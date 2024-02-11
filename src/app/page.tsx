import { hasSession } from "@/utils";

export default function Home() {
  const isLoggedIn = hasSession();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <div data-testid="welcome-message" className="font-bold text-xl">
        Welcome to the User Account Balance Case
      </div>
      {!isLoggedIn && (
        <div data-testid="welcome-login">
          Please{" "}
          <a className="text-blue-500" href="/login">
            Login
          </a>{" "}
          to check and manage user accounts.
        </div>
      )}
      {isLoggedIn && (
        <div data-testid="welcome-loggedin" className="text-green-500">
          You are logged in and all set to check and manage User Accounts. Use
          the header to navigate to the management page.
        </div>
      )}
    </main>
  );
}
