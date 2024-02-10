import { getUserAccountDetails } from "../ClientApi/functions";
import { TransferButtons } from "./[id]/Buttons";

const AccountDetails = async ({ userId }: { userId: number }) => {
  const accountDetails = await getUserAccountDetails(userId);
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>
      <p>Name: {accountDetails.Name}</p>
      <p>Email: {accountDetails.Email}</p>
      <p>Savings Balance: ${accountDetails.SavingsBalance.toFixed(2)}</p>
      <p>Checking Balance: ${accountDetails.CheckingBalance.toFixed(2)}</p>
      <TransferButtons userAccount={accountDetails} />
    </div>
  );
};

export default AccountDetails;
