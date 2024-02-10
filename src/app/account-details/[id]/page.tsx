import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AccountDetails from "../AccountDetails";

const AccountDetailsPage = ({ params }: { params: { id: number } }) => {
  if (!cookies().get("token")) {
    redirect("login");
  }
  return <AccountDetails userId={params.id} />;
};

export default AccountDetailsPage;
