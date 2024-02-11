// pages/api/transfer/[id].js

import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;

  if (method === "PUT") {
    try {
      if (!body.amount) {
        return res.status(400).json({ error: "Amount is required" });
      }
      const amount = parseFloat(body.amount);
      if (isNaN(amount) || amount <= 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }

      const user = await prisma.user.findUnique({
        where: { id: parseInt(body.id) },
      });

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.SavingsBalance < amount) {
        return res
          .status(400)
          .json({ error: "Insufficient funds in Checking Account" });
      }

      const updatedUser = await prisma.user.update({
        where: { id: parseInt(body.id) },
        data: {
          CheckingBalance: user.CheckingBalance + amount,
          SavingsBalance: user.SavingsBalance - amount,
        },
      });

      res.json(updatedUser);
    } catch (error) {
      console.error("Failed to transfer amount:", error);
      res.status(500).json({ error: "Failed to transfer amount" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
