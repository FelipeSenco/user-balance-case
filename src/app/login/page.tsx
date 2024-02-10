"use client";
import { FC, useState } from "react";
import { login } from "../ClientApi/functions";
import { useRouter } from "next/navigation";

const LoginPage: FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login({ username, password });
      router.push("/");
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="username">
                Username
              </label>
              <input
                required
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="username"
                name="username"
              />
            </div>
            <div className="mt-4">
              <label className="block" htmlFor="password">
                Password
              </label>
              <input
                required
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                id="password"
                name="password"
              />
            </div>
            <div className="flex flex-col items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
              >
                Login
              </button>
              {error && <p className="text-red-400">{error.message}</p>}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
