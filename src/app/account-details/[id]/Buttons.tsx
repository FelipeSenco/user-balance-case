"use client";

import { User } from "@prisma/client";

export const TransferButtons = ({ userAccount }: { userAccount: User }) => {
  return (
    <div className="flex gap-4 mt-4">
      <button
        onClick={null}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Transfer to Savings
      </button>
      <button
        onClick={null}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Transfer to Checking
      </button>
    </div>
  );
};
