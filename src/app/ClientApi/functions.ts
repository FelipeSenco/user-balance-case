import { LoginData } from "@/types/requestData";
import { User } from "@prisma/client";
import axios from "axios";

export const getSession = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "session", {
    credentials: "same-origin",
  });

  return res;
};

export const login = async (data: LoginData) => {
  const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + "login", data);

  return res;
};

export const getUserAccounts = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "getUserAccounts");
  const json = await res.json();

  return json.userAccounts as User[];
};

export const getUserAccountDetails = async (id: number) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "getUserAccountDetails?id=" + id
  );
  const json = await res.json();

  return json.userAccount as User;
};
