# Plura API

The backend API service for Plura, built with Next.js, Hono, Prisma and Upstash.

# Video Guide: Setting Up Full Plura Backend

This video is here to help you set up the full Plura backend step by step. Click the link below to watch:

👉 [Click Me to Watch the Video](https://drive.google.com/file/d/15k4DIn0FeVXKGR-T4bXx-BGHEb4ufmeH/preview)

## Check list

Before setting up the API, ensure you have:
- Node.js >= 18
- PNPM package manager below 19 not supported
- PostgreSQL database
- Redis instance (Upstash)

## Setup

1. Install dependencies:

```bash
pnpm install
```
2. Create a `.env` file in the `apps/api` directory with the following variables:

```bash
# Required: Your Resend API key for email services
RESEND_API=

# Required: Base URL of your application
BASE_URL=

# Required: Authentication configuration
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

# Optional: OAuth provider credentials
# For Google OAuth (https://console.cloud.google.com)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# For Discord OAuth (https://discord.com/developers)
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=

# For GitHub OAuth (https://github.com/settings/developers)
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
   
# Required: PostgreSQL connection string
DATABASE_URL=

#Required: Upstash Redis configuration (https://upstash.com)
UPSTASH_REDIS_REST_TOKEN=
UPSTASH_REDIS_REST_URL=
```

## 📞 Contact

- Project Link: [GitHub Repository](https://github.com/Skidgod4444/plura)
- Discord: [Discord](https://discord.gg/plura)
---

### Contributing

<a href="https://github.com/SkidGod4444/plura/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SkidGod4444/plura" />
</a>

**Engineered with ❤️ by the Plura Team**
