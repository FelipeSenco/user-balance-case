"use client";
import useSession from "@/hooks/useSession";
import { FC } from "react";

const AccountListPage: FC = () => {
  useSession();
  return <div></div>;
};

export default AccountListPage;
