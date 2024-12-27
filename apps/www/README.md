## Setting Up Your Environment

To set up your environment for the project, follow these steps:

1. **Create a .env file** and copy the contents from the .env.example file: 
   ``` bash
   cp .env.example .env
   ``` 

2. **Install Prisma** and set up your database:
   ```bash
   pnpm install @prisma/client
   npx prisma init
  ```

3. **Configure your Prisma schema** in `prisma/schema.prisma` to connect to your Supabase database:
  ```prisma
   datasource db {
     provider = "postgresql"
    url      = env("DATABASE_URL")
  }
   ```

4. **Run the Prisma migrations** to set up your database:
   ```bash
   pnpm prisma migrate dev --name init
   ```

5. **Testing the Setup**:
- You can test your setup by running the development server:
   ```bash
   pnpm dev
   ```
   - Access your application at [Login](http://localhost:3003/auth).

    - Access your application at [Upastash](http://localhost:3001/api/health).
   
## 📞 Contact

- Project Link: [GitHub Repository](https://github.com/Skidgod4444/plura)
- Discord: [Discord](https://discord.gg/plura)
---

### Contributing

<a href="https://github.com/SkidGod4444/plura/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=SkidGod4444/plura" />
</a>

**Engineered with ❤️ by the Plura Team**

