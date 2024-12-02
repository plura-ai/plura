import { cache } from '@repo/cache';
import { logger, schedules } from '@trigger.dev/sdk/v3';

export const publishContributorsTask = schedules.task({
  id: "publish-contributors",
  cron: "0 0 * * 0", // Runs every Sunday at midnight
  maxDuration: 60,
  run: async () => {
    const owner = 'SkidGod4444'; // Replace with the repository owner's username
    const repo = 'plura'; // Replace with the repository name
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

    let contributors = [];
    let page = 1;

    try {
      do {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/contributors?per_page=100&page=${page}`,
          {
            headers: {
              Authorization: `token ${GITHUB_TOKEN}`,
              Accept: 'application/vnd.github.v3+json',
            },
          }
        );

        if (!response.ok) {
          logger.error(`GitHub API request failed with status ${response.status}`);
          return;
        }

        const data = await response.json();

        if (data.length === 0) {
          break;
        }

        contributors = contributors.concat(data);
        page += 1;
      } while (true);

      // Filter out bots based on type or if 'bot' appears in their login
      const filteredContributors = contributors.filter(
        (contributor) =>
          contributor.type !== 'Bot' &&
          !contributor.login.toLowerCase().includes('bot')
      );

      // Prepare data: list of { login, id, avatar_url, html_url }
      const contributorData = filteredContributors.map((contributor) => ({
        login: contributor.login,
        id: contributor.id,
        avatar_url: contributor.avatar_url,
        html_url: contributor.html_url,
      }));

      // Store data in Redis under a fixed key
      const redisKey = 'contributors';
      await cache.del(redisKey); // Clear existing data
      await cache.rpush(redisKey, ...contributorData.map((c) => JSON.stringify(c)));

      logger.log('Published contributors data', { contributorData });
    } catch (error) {
      logger.error('Error fetching contributors from GitHub', { error });
    }
  },
});