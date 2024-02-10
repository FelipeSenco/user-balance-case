import { FC } from "react";
import { AccountList } from "./AccountList";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const AccountListPage: FC = async () => {
  if (cookies().get("token")?.value !== process.env.MOCK_TOKEN) {
    redirect("login");
  }

  return <AccountList />;
};

export default AccountListPage;
