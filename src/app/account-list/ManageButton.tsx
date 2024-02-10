"use client";
import { useRouter } from "next/navigation";

export const ManageButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const onCardClick = (id: number) => {
    router.push("/account-details/" + id);
  };
  return (
    <button
      onClick={() => {
        onCardClick(id);
      }}
      className="mt-4 bg-blue-500 text-white h-1/2 py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Manage
    </button>
  );
};
