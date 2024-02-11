import { redirect } from "next/navigation";
import AccountDetails from "../AccountDetails";
import { getUserAccountDetails } from "@/app/ClientApi/functions";
import { hasSession } from "../../../utils";

const AccountDetailsPage = async ({ params }: { params: { id: number } }) => {
  const isLoggedIn = hasSession();

  if (!isLoggedIn) {
    redirect("login");
  }

  const accountDetails = await getUserAccountDetails(params.id);
  return <AccountDetails accountDetails={accountDetails} />;
};

export default AccountDetailsPage;
