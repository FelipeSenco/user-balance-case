-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "SavingsBalance" REAL NOT NULL,
    "CheckingBalance" REAL NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
