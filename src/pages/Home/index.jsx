import { useEffect, useState } from "react";
import HomeLogin from "./HomeLogin";
import HomeNotLogin from "./HomeNotLogin";

function Home() {
  const [isLoginIn, setisLoginIn] = useState(false);
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token");
  useEffect(() => {
    if (access_token && refresh_token) {
      setisLoginIn(true);
    } else {
      setisLoginIn(false);
    }
  }, []);
  return (
    <div>
      <div>{isLoginIn ? <HomeLogin /> : <HomeNotLogin />}</div>
    </div>
  );
}
export default Home;
