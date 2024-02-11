import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AccountDetails from "../AccountDetails";
import { getUserAccountDetails } from "@/app/ClientApi/functions";

const AccountDetailsPage = async ({ params }: { params: { id: number } }) => {
  if (cookies().get("token")?.value !== process.env.MOCK_TOKEN) {
    redirect("login");
  }
  const accountDetails = await getUserAccountDetails(params.id);
  return <AccountDetails accountDetails={accountDetails} />;
};

export default AccountDetailsPage;
