import { useEffect, useState } from "react";
import SearchLogin from "./SearchLogin";
import SearchNotLogin from "./SearchNotLogin";

function SearchPage() {
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
      <div>{isLoginIn ? <SearchLogin /> : <SearchNotLogin />}</div>
    </div>
  );
}
export default SearchPage;
