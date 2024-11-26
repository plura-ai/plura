import { cache } from "@repo/cache";
import { logger, schedules, wait } from "@trigger.dev/sdk/v3";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const db = createClient(supabaseUrl, supabaseKey);

export const dbStatusTask = schedules.task({
  id: "db-status",
  cron: "*/12 * * * *",
  maxDuration: 600,
  run: async (payload, { ctx }) => {
    const latencies: Record<string, number | null> = {};
    let totalLatency = 0;
    let operationCount = 0;

    const measureAndCacheLatency = async (operationName: string, operation: () => Promise<any>) => {
      const startTime = Date.now();
      try {
        await operation();
        const latency = Date.now() - startTime;
        latencies[operationName] = latency;
        totalLatency += latency;
        operationCount++;

        logger.log(`Latency for ${operationName}`, { latency });
      } catch (error) {
        logger.error(`${operationName} failed`, { error });
        latencies[operationName] = null;
      }
    };

    const massOperationsCount = 100;

    await measureAndCacheLatency("mass_create", async () => {
      const createPromises = Array.from({ length: massOperationsCount }, (_, i) =>
        db
          .from('triggers')
          .insert([{ id: `mass-${i}`, name: `Mass Test ${i}`, email: `mass${i}@test.com`, email_verified: true }])
      );
      await Promise.all(createPromises);
    });

    await wait.for({ seconds: 10 });

    await measureAndCacheLatency("mass_read", async () => {
      const { data, error } = await db
        .from('triggers')
        .select('*')
      if (error) {
        logger.error('Error fetching data:', { error });
        return null;
      }
      logger.log('Read data', { data });
      return data;
    });

    await wait.for({ seconds: 15 });

    await measureAndCacheLatency("mass_update", async () => {
      const updatePromises = Array.from({ length: massOperationsCount }, (_, i) =>
        db
          .from('triggers')
          .update({ name: `Updated Mass Test ${i}`, email_verified: false })
          .eq('id', `mass-${i}`)
      );
      await Promise.all(updatePromises);
    });

    await wait.for({ seconds: 10 });

    await measureAndCacheLatency("mass_delete", async () => {
      const deletePromises = Array.from({ length: massOperationsCount }, (_, i) =>
        db
          .from('triggers')
          .delete()
          .eq('id', `mass-${i}`)
      );
      await Promise.all(deletePromises);
    });

    await wait.for({ seconds: 5 });

    const averageLatency = operationCount > 0 ? totalLatency / operationCount : null;
    const latencyRecord = {
      timestamp: new Date().toISOString(),
      latencies,
      totalLatency,
      operationCount,
      averageLatency,
      massOperationsCount,
    };

    await cache.rpush("db-latency:history", JSON.stringify(latencyRecord));
    await cache.ltrim("db-latency:history", -120, -1);
  },
});
