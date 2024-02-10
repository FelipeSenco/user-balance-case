import { FC } from "react";
import { getSession } from "../ClientApi/functions";
import { redirect } from "next/navigation";

const AccountDetails: FC = async () => {
  const sessionRes = await getSession();

  if (!!sessionRes.status && sessionRes?.status !== 200) {
    redirect(`/login`);
  }
  return <div></div>;
};

export default AccountDetails;
