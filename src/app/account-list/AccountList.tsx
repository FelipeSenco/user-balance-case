import { getUserAccounts } from "../ClientApi/functions";
import { ManageButton } from "./ManageButton";

export const AccountList = async () => {
  const userAccounts = await getUserAccounts();

  return (
    <div className="flex flex-col gap-4">
      {userAccounts.map((user, index) => (
        <>
          <div
            key={index}
            className="flex justify-between bg-white w-full p-4 shadow-md rounded-lg border border-gray-200"
          >
            <div>
              <h2 className="text-xl font-semibold">{user.Name}</h2>
              <p className="text-gray-600">
                <span className="font-bold">Email:</span> {user.Email}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Savings Balance:</span> $
                {user.SavingsBalance.toFixed(2)}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Checking Balance:</span> $
                {user.CheckingBalance.toFixed(2)}
              </p>
            </div>
            <ManageButton id={user.id} />
          </div>
        </>
      ))}
    </div>
  );
};
