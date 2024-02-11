import { cookies } from "next/headers";

export const hasSession = () =>
  cookies().get("token")?.value === process.env.MOCK_TOKEN;
