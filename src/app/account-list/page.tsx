import { FC } from "react";
import { AccountList } from "./AccountList";
import { redirect } from "next/navigation";
import { hasSession } from "../../utils";
import { getUserAccounts } from "../ClientApi/functions";

const AccountListPage: FC = async () => {
  const isLoggedIn = hasSession();

  if (!isLoggedIn) {
    redirect("login");
  }

  const accountList = await getUserAccounts();

  return <AccountList accountList={accountList} />;
};

export default AccountListPage;
