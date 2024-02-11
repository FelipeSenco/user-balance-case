import { serialize } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  if (username === "admin" && password === "123") {
    const mockToken = process.env.MOCK_TOKEN;

    const serialized = serialize("token", mockToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);
    res.status(200).json({ message: "Authentication successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
}
