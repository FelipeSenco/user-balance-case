// pages/api/session.js

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const validToken = validateSessionToken(req);

  if (validToken) {
    res.status(200).json({ message: "Active session found." });
  } else {
    res.status(401).json({ message: "No active session found." });
  }
}

export function validateSessionToken(req: NextApiRequest) {
  const sessionCookie = req.headers.cookie || "";
  const sessionToken = sessionCookie
    .split(";")
    .find((c) => c.trim().startsWith("token="));

  return sessionToken && sessionToken.split("=")[1] === process.env.MOCK_TOKEN;
}
