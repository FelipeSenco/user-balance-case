"use client";
import { User } from "@prisma/client";
import {
  EditCheckingCurrencyAmount,
  EditSavingsCurrencyAmount,
  TransferButtons,
} from "./Buttons";
import { useState } from "react";

const AccountDetails = ({ accountDetails }: { accountDetails: User }) => {
  const [userAccount, setUserAccount] = useState(accountDetails);

  const updateAccountDetails = (newAccountDetails: User) => {
    setUserAccount(newAccountDetails);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Account Details</h2>
      <div className="flex flex-col gap-5">
        <div className="flex justify-around items-start">
          <p>
            <span className="font-bold">Name:</span> {userAccount.Name}
          </p>
          <p>
            <span className="font-bold">Email:</span> {userAccount.Email}
          </p>
        </div>
        <div className="flex justify-around">
          <div>
            <p>
              <span className="font-bold">Savings Balance:</span> $
              {userAccount.SavingsBalance}
            </p>
            <EditSavingsCurrencyAmount
              userAccount={userAccount}
              updateAccountDetails={updateAccountDetails}
            />
          </div>
          <div>
            <p>
              <span className="font-bold">Checking Balance:</span> $
              {userAccount.CheckingBalance}
            </p>
            <EditCheckingCurrencyAmount
              userAccount={userAccount}
              updateAccountDetails={updateAccountDetails}
            />
          </div>
        </div>
      </div>
      <TransferButtons
        userAccount={userAccount}
        updateAccountDetails={updateAccountDetails}
      />
    </div>
  );
};

export default AccountDetails;
