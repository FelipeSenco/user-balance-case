// pages/api/user/[id].js

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
      if (isNaN(amount) || amount < 0) {
        return res.status(400).json({ error: "Invalid amount" });
      }

      const user = await prisma.user.update({
        where: { id: parseInt(body.id) },
        data: { CheckingBalance: amount },
      });

      res.json(user);
    } catch (error) {
      console.error("Failed to update user's savings balance:", error);
      res
        .status(500)
        .json({ error: "Failed to update user's savings balance" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
