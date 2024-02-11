import { LoginData, editCurrencyAmount } from "@/types/requestData";
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

export const editSavingsCurrencyAmount = async (data: editCurrencyAmount) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "editSavingsCurrencyAmount",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: data.amount, id: data.id }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const updatedUser = await response.json();
  return updatedUser as User;
};

export const editCheckingCurrencyAmount = async (data: editCurrencyAmount) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "editCheckingCurrencyAmount",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: data.amount, id: data.id }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const updatedUser = await response.json();
  return updatedUser as User;
};

export const transferToSavings = async (data: editCurrencyAmount) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "transferToSavings",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: data.amount, id: data.id }),
    }
  );

  const updatedUser = await response.json();
  return updatedUser as User;
};

export const transferToChecking = async (data: editCurrencyAmount) => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "transferToChecking",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: data.amount, id: data.id }),
    }
  );

  const updatedUser = await response.json();
  return updatedUser as User;
};
