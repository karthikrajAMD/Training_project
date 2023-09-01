import React, { useEffect, useState } from "react";
import "../styleSheet/dashboard.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
function Dashboard() {
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  useEffect(() => {
    let loginSignupClass = document.querySelector(".login-signup");
    if (loginSignupClass) loginSignupClass.className = "ls-remove";
    let headClass = document.querySelector(".head1");
    if (headClass) headClass.className = "head";
    let getData = localStorage.getItem("user");
    if (getData === "") {
      let loginSignupClass = document.querySelector(".ls-remove");
      loginSignupClass.className = "login-signup";
      let headClass = document.querySelector(".head");
      headClass.className = "head1";
      navigate("/");
    } else {
      setEmail(JSON.parse(getData).email);
    }
  }, []);
  return <div></div>;
}

export default Dashboard;
