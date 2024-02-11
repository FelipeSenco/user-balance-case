"use client";
import { User } from "@prisma/client";
import { useState } from "react";
import {
  editCheckingCurrencyAmount,
  editSavingsCurrencyAmount,
  transferToChecking,
  transferToSavings,
} from "../ClientApi/functions";

export const TransferButtons = ({
  userAccount,
  updateAccountDetails,
}: {
  userAccount: User;
  updateAccountDetails: (newAccountDetails: User) => void;
}) => {
  const [showCheckingInput, setShowCheckingInput] = useState(false);
  const [showSavingsInput, setShowSavingsInput] = useState(false);
  const [checkingAmount, setCheckingAmount] = useState(100);
  const [savingsAmount, setSavingsAmount] = useState(100);
  const [failed, setFailed] = useState(false);

  const onTransferToSavingsClick = async () => {
    const updatedUser = await transferToSavings({
      id: userAccount.id,
      amount: checkingAmount,
    });

    if (updatedUser.id) {
      updateAccountDetails(updatedUser);
      setShowCheckingInput(false);
      setFailed(false);
    } else {
      setFailed(true);
    }
  };

  const onTransferToCheckingClick = async () => {
    const updatedUser = await transferToChecking({
      id: userAccount.id,
      amount: savingsAmount,
    });

    if (updatedUser) {
      updateAccountDetails(updatedUser);
      setShowSavingsInput(false);
      setFailed(false);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-10 w-1/3">
      <button
        onClick={() => setShowCheckingInput(!showCheckingInput)}
        className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      >
        {showCheckingInput ? "Hide" : "Transfer to Savings"}
      </button>
      {showCheckingInput && (
        <div className="flex gap-5">
          <input
            type="number"
            min={1}
            value={checkingAmount}
            onChange={(e) => setCheckingAmount(parseInt(e.target.value))}
            className="border-2 border-gray-300 px-2 rounded"
          />
          <button
            onClick={onTransferToSavingsClick}
            className="bg-green-500 text-white font-semibold px-4 rounded hover:bg-green-700 transition duration-300"
          >
            Ok
          </button>
          {failed && (
            <p className="text-red-300">
              Something went wrong, please try again...
            </p>
          )}
        </div>
      )}
      <button
        onClick={() => setShowSavingsInput(!showSavingsInput)}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {showSavingsInput ? "Hide" : "Transfer to Checking"}
      </button>
      {showSavingsInput && (
        <div className="flex gap-5">
          <input
            type="number"
            min={1}
            value={savingsAmount}
            onChange={(e) => setSavingsAmount(parseInt(e.target.value))}
            className="border-2 border-gray-300 px-2 rounded"
          />
          <button
            onClick={onTransferToCheckingClick}
            className="bg-green-500 text-white font-semibold px-4 rounded hover:bg-green-700 transition duration-300"
          >
            Ok
          </button>
          {failed && (
            <p className="text-red-300">
              Something went wrong, please try again...
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export const EditSavingsCurrencyAmount = ({
  userAccount,
  updateAccountDetails,
}: {
  userAccount: User;
  updateAccountDetails: (newAccountDetails: User) => void;
}) => {
  const [showInput, setShowInput] = useState(false);
  const [amount, setAmount] = useState(userAccount.SavingsBalance);
  const [failed, setFailed] = useState(false);

  const onOkClick = async () => {
    const updatedUser = await editSavingsCurrencyAmount({
      id: userAccount.id,
      amount: amount,
    });

    if (updatedUser.id) {
      updateAccountDetails(updatedUser);
      setShowInput(false);
      setFailed(false);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="flex items-start gap-1">
      <button
        onClick={() => setShowInput(!showInput)}
        className="bg-blue-500 text-white font-semibold px-2 rounded hover:bg-blue-700 transition duration-300"
      >
        {showInput ? "Hide" : "Edit"}
      </button>
      {showInput && (
        <>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="border-2 border-gray-300 px-2 rounded"
          />
          <button
            onClick={onOkClick}
            disabled={amount === userAccount.SavingsBalance}
            className="bg-green-500 text-white font-semibold px-4 rounded hover:bg-green-700 transition duration-300"
          >
            Ok
          </button>{" "}
          {failed && (
            <p className="text-red-300">
              Something went wrong, please try again...
            </p>
          )}
        </>
      )}
    </div>
  );
};

export const EditCheckingCurrencyAmount = ({
  userAccount,
  updateAccountDetails,
}: {
  userAccount: User;
  updateAccountDetails: (newAccountDetails: User) => void;
}) => {
  const [showInput, setShowInput] = useState(false);
  const [amount, setAmount] = useState(userAccount.CheckingBalance);
  const [failed, setFailed] = useState(false);

  const onOkClick = async () => {
    const updatedUser = await editCheckingCurrencyAmount({
      id: userAccount.id,
      amount: amount,
    });
    if (updatedUser.id) {
      updateAccountDetails(updatedUser);
      setShowInput(false);

      setFailed(false);
    } else {
      setFailed(true);
    }
  };

  return (
    <div className="flex items-start gap-1">
      <button
        onClick={() => setShowInput(!showInput)}
        className="bg-blue-500 text-white font-semibold px-2 rounded hover:bg-blue-700 transition duration-300"
      >
        {showInput ? "Hide" : "Edit"}
      </button>
      {showInput && (
        <>
          <input
            type="number"
            min={1}
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            className="border-2 border-gray-300 px-2 rounded"
          />
          <button
            onClick={onOkClick}
            disabled={amount === userAccount.CheckingBalance}
            className="bg-green-500 text-white font-semibold px-4 rounded hover:bg-green-700 transition duration-300"
          >
            Ok
          </button>
          {failed && (
            <p className="text-red-300">
              Something went wrong, please try again...
            </p>
          )}
        </>
      )}
    </div>
  );
};