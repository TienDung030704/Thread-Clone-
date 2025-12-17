import { useEffect, useState } from "react";
import HomeLogin from "./HomeLogin";
import HomeNotLogin from "./HomeNotLogin";
import { useCurrentUser, useFetchUser } from "@/features/Auth/authUser/hook";

function Home() {
  const [isLoginIn, setisLoginIn] = useState(false);
  const currentUser = useCurrentUser();
  const fetchUserInfo = useFetchUser();
  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    if (access_token && refresh_token) {
      // Nếu có token nhưng chưa có user info → fetch ngay
      if (!currentUser || Object.keys(currentUser).length === 0) {
        fetchUserInfo();
      }
      setisLoginIn(true);
    } else {
      setisLoginIn(false);
    }
  }, [currentUser, fetchUserInfo]);

  return (
    <div>
      <div>{isLoginIn ? <HomeLogin /> : <HomeNotLogin />}</div>
    </div>
  );
}
export default Home;
