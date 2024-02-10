import { FC } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AccountDetails = ({ params }: { params: { id: number } }) => {
  if (!cookies().get("token")) {
    redirect("login");
  }
  return <div>{params.id}</div>;
};

export default AccountDetails;
