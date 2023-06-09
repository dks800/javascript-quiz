import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getQuizLocalStorage } from "../../common/functions";
import User from "../User/User";

export default function CheckSession({ children, name }) {
  const navigate = useNavigate();
  let appData = getQuizLocalStorage();
  let user = appData?.username;
  useEffect(() => {
    if (!user) navigate("/");
    if (user && name === "user") navigate("/quiz");
    if (user && appData.isCompleted) navigate("/score");
  }, []);
  return <>{user ? children : <User />}</>;
}
