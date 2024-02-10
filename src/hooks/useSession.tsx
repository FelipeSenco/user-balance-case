import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const useSession = () => {
  const router = useRouter();

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + "session", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        // Axios automatically checks the HTTP status code so you can directly access `response.data`
      })
      .catch((error) => {
        console.error("Failed to fetch session:", error);
        // Axios throws an error for status codes outside the 2xx range, which you can use to redirect
        router.push("/login");
      });
  }, [router]);
};

export default useSession;
