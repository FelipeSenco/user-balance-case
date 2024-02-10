import { LoginData } from "@/types/requestData";
import axios from "axios";

export const getSession = async () => {
  const res = await axios.get(process.env.NEXT_PUBLIC_API_URL + "session", {
    withCredentials: true,
  });
  return res;
};

export const login = async (data: LoginData) => {
  const res = await axios.post(process.env.NEXT_PUBLIC_API_URL + "login", data);

  return res;
};
