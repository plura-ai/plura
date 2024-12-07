import { cache } from "@repo/cache";
import { logger, schedules } from "@trigger.dev/sdk/v3";

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK!;
const LATENCY_THRESHOLD = 1000;

export const siteStatusTask = schedules.task({
  id: "site-status",
  cron: "*/12 * * * *",
  maxDuration: 600,
  run: async () => {
    const urls = {
      WEB: "https://www.plura.pro",
      API: "https://api.plura.pro/v1/health",
      APP: "https://app.plura.pro/events",
    };

    const latencies: Record<string, number | null> = {};
    const statuses: Record<string, string | null> = {};
    let totalLatency = 0;
    let operationCount = 0;

    for (const [name, url] of Object.entries(urls)) {
      const startTime = Date.now();
      try {
        const response = await fetch(url, { method: "GET" });
        const latency = Date.now() - startTime;
        latencies[name] = latency;
        statuses[name] = response.ok ? "UP" : `DOWN (Status ${response.status})`;
        totalLatency += latency;
        operationCount++;

        logger.log(`${name} is ${statuses[name]}`, { latency });

        // Send to Discord if the service is down or latency exceeds threshold
        if (!response.ok || latency > LATENCY_THRESHOLD) {
          await sendDiscordNotification(name, statuses[name], latency);
        }
      } catch (error: any) {
        latencies[name] = null;
        statuses[name] = `DOWN (Error: ${error.message})`;
        logger.error(`${name} check failed`, { error });
        await sendDiscordNotification(name, "DOWN", null, error.message);
      }
    }

    const averageLatency = operationCount > 0 ? totalLatency / operationCount : null;
    const statusRecord = {
      timestamp: new Date().toISOString(),
      latencies,
      statuses,
      totalLatency,
      operationCount,
      averageLatency,
    };

    // Push the status record to a list in Redis
    await cache.rpush("site-latency:history", JSON.stringify(statusRecord));
    await cache.ltrim("site-latency:history", -120, -1);
  },
});

// Function to send notifications to Discord webhook
async function sendDiscordNotification(
  serviceName: string,
  status: string | null,
  latency: number | null = null,
  error: string | null = null
) {
  const ROLE_ID = "1308042212319428668";
  const downMsg = `🚨 Service **${serviceName}** is experiencing issues! 🚨`;
  const upMsg = `⚠️ Service **${serviceName}** is having high latency! ⚠️`;
  const NotifyMsg = status === "UP" ? upMsg : downMsg;
  const message = {
    content: `
<@&${ROLE_ID}>
${NotifyMsg}
`,
    embeds: [
      {
        title: `Status Alert for ${serviceName}`,
        description: `Service **${serviceName}** is currently **${status}**.`,
        color: status === "UP" ? 3066993 : 15158332, // Green for UP, Red for DOWN
        fields: [
          {
            name: "Latency",
            value: latency !== null ? `${latency} ms` : "N/A",
            inline: true,
          },
          {
            name: "Error",
            value: error || "None",
            inline: true,
          },
        ],
        timestamp: new Date().toISOString(),
      },
    ],
  };

  try {
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    logger.log(`Notification sent to Discord for ${serviceName}`, { status, latency });
  } catch (notificationError) {
    logger.error("Failed to send notification to Discord", { notificationError });
  }
}

