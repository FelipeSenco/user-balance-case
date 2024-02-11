import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-white shadow-md bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex space-x-4 gap-10">
          <Link href="/" className={"hover:bg-blue-200 px-4 rounded"}>
            <span className={linkTextStyle}> Home</span>
          </Link>
          <Link
            data-testid="account-list-button"
            href="/account-list"
            className={"hover:bg-blue-200 px-4 rounded"}
          >
            <span className={linkTextStyle}>User Accounts</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

const linkTextStyle =
  "text-blue-600 hover:text-blue-800 font-semibold transition duration-300 cursor-pointer";
