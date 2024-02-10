import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AccountDetails from "../AccountDetails";

const AccountDetailsPage = ({ params }: { params: { id: number } }) => {
  if (cookies().get("token")?.value !== process.env.MOCK_TOKEN) {
    redirect("login");
  }
  return <AccountDetails userId={params.id} />;
};

export default AccountDetailsPage;
