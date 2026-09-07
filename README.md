<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/1cc13d25-675c-4fa2-acb6-18f9907dba4e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Prisma + Supabase

The database schema is in `prisma/schema.prisma` and uses PostgreSQL on Supabase.

1. Copy `.env.example` to `.env`.
2. Replace `DATABASE_URL` and `DIRECT_URL` with the connection strings from Supabase. Keep the pooler URL for `DATABASE_URL` and the direct URL for `DIRECT_URL`.
3. Install dependencies and generate the client:
   `npm install && npm run prisma:generate`
4. Validate the schema:
   `npm run prisma:validate`
5. Create the first migration against Supabase:
   `npm run prisma:migrate`

For a deployed environment, use `npm run prisma:deploy` instead of `prisma:migrate`.
