import { FC } from "react";
import { AccountList } from "./AccountList";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const AccountListPage: FC = async () => {
  if (!cookies().get("token")) {
    redirect("login");
  }

  return <AccountList />;
};

export default AccountListPage;
