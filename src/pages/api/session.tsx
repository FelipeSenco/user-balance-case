// pages/api/session.js

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sessionCookie = req.headers.cookie || "";
  console.log(sessionCookie);
  const sessionToken = sessionCookie
    .split(";")
    .find((c) => c.trim().startsWith("token="));

  if (sessionToken && sessionToken.split("=")[1] === "mockSessionToken") {
    res.status(200).json({ message: "Active session found." });
  } else {
    res.status(401).json({ message: "No active session found." });
  }
}
