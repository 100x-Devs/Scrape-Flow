## Getting Started

Fork the repository (For first time)

```bash
git clone https://github.com/100x-Devs/Scrape-Flow
```

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Create a new .env file in the root folder Add add the following:
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= (Your Key)
CLERK_SECRET_KEY= (Your Key)
```

Genetate Prisma:

```bash
 npx prisma generate
```
To view the MySQL database (Prisma Studio):

```bash
 npx prisma studio
```


Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.



```bash
npx prisma studio
```

Then open [http://localhost:5555](http://localhost:5555) to view the database.

## Steps for contributors

Before you make any code changes, run the following commands to sync with the latest code changes:

```bash
git fetch origin
```

```bash
git merge origin/master
```

If you make any changes in the `schema.prisma` file:

```bash
npx prisma generate
```