import React, { useState, useContext } from "react";
import "../DashboardPage/DashBoardStyle.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Index";
import { Outlet, Link } from "react-router-dom";

export const DashboardPage = () => {
  const { setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);
  const [activeView, setActiveView] = useState(null);


  const [showScene, setShowScene] = useState({
    cellar: false,
    lease: false,
    user: false,
    account: false,
    service: false
  });

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");
  };


  const handleScene = (scene) => {
    setShowScene({
      cellar: scene === "cellar",
      lease: scene === "lease",
      user: scene === "user",
      account: scene === "account",
      service: scene === "service"
    });

    setActiveView(scene);
  };

  return (
    <>
      <body class='bodyD'>
        <div class="dashboard">
          <div class="sidebar">
            <ul>
              <li class="title "><a href="#">HOTELES</a></li>
              <li onClick={() => {
                handleScene("user");
              }}
              >
                <a href="#">USERS</a>
              </li>
              <li onClick={() => {
                handleScene("cellar");
              }}
              >
                <a href="#">CELLARS</a>
              </li>
              <li onClick={() => {
                handleScene("account");
              }}
              >
                <a href="#">ACCOUNTS</a>
              </li>
              <li onClick={logOut}>
                <a href="#">LOGOUT</a>
              </li>
            </ul>
          </div>
          <div class="content">
            {activeView === "account" && <AccountPage />}
            {activeView === "cellar" && < CellarPage />}
            {activeView === "lease" && <LeasesPage />}
            {activeView === "user" && <UsersPage />}
            {activeView === "service" && <ServicePage />}
          </div>
        </div>
      </body>
    </>
  );
};