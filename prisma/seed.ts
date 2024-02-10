import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      Name: "Alice",
      Email: "alice@example.com",
      SavingsBalance: 1000.0,
      CheckingBalance: 1500.0,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      Name: "Bob",
      Email: "bob@example.com",
      SavingsBalance: 2000.0,
      CheckingBalance: 2500.0,
    },
  });

  const user3 = await prisma.user.create({
    data: {
      Name: "Charlie",
      Email: "charlie@example.com",
      SavingsBalance: 3000.0,
      CheckingBalance: 3500.0,
    },
  });

  console.log({ user1, user2, user3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
