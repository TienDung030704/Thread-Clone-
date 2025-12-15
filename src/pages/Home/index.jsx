import { useEffect, useState } from "react";
import HomeLogin from "./HomeLogin";
import HomeNotLogin from "./HomeNotLogin";
import { useCurrentUser } from "@/features/Auth/authUser/hook";

function Home() {
  const [isLoginIn, setisLoginIn] = useState(false);
  const currentUser = useCurrentUser();

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    const refresh_token = localStorage.getItem("refresh_token");
    const hasUserInfo = currentUser && Object.keys(currentUser).length > 0;
    if (access_token && refresh_token && hasUserInfo) {
      setisLoginIn(true);
    } else {
      setisLoginIn(false);
    }
  }, [currentUser]);

  return (
    <div>
      <div>{isLoginIn ? <HomeLogin /> : <HomeNotLogin />}</div>
    </div>
  );
}
export default Home;
