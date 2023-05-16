import React, { useState, useContext } from "react";
import "../DashboardPage/DashBoardStyle.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Index";
import { Outlet, Link } from "react-router-dom";
import { AccountPage } from "../AccountPage/AccountPage";
import { LeasesPage } from "../LeasesPage/LeasesPage";
import UsersPage from "../UsersPage/UsersPage";
import { ServicePage } from "../ServicesPage/ServicesPage";
import CellarPage from "../CellarPage/CellarPage";

export const DashboardPage = () => {
  const { isAdmin, setLoggedIn, dataUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState(null);

  const [showScene, setShowScene] = useState({
    cellar: false,
    lease: false,
    user: false,
    account: false,
    service: false,
  });

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    navigate("/login");
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
      />
      <div>
        {/* <!-- Inicio del menu --> */}
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <div class="container-fluid">
            {/* <!-- icono o nombre --> */}
            <a class="navbar-brand active">
              <i class="bi bi-person-circle"></i>
              <Link to={''}>
                <span class="text-info"> Dashboard</span>
              </Link>
            </a>
            {/* <!-- boton del menu para resolucion movil --> */}
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <!-- elementos del menu responsive --> */}
            <div class="collapse navbar-collapse" id="menu">
              <ul class="navbar-nav me-auto">
                {isAdmin === "admin" ? (
                  <>
                    <h1 style={{ color: "#fff" }}>You are admin</h1>
                  </>
                ) : isAdmin === "user" ? (
                  <>
                    <h1 style={{ color: "#fff" }}>You are user</h1>
                    <Link to={"invoicedetail"} className="btn btn-danger">
                      Invoices Details
                    </Link>
                  </>
                ) : (
                  <>
                    <h1 style={{ color: "#fff" }}>You are client</h1>
                  </>
                )}
              </ul>
              <hr class="d-md-none text-white-50" />
              {/* <!-- Iconos redes sociales --> */}
              <ul class="navbar-nav  flex-row flex-wrap text-light">
                <li class="nav-item col-6 col-md-auto p-3">
                  <i class="bi bi-twitter"></i>
                  <small class="d-md-none ms-2">Twitter</small>
                </li>
                <li class="nav-item col-6 col-md-auto p-3">
                  <i class="bi bi-github"></i>
                  <small class="d-md-none ms-2">GitHub</small>
                </li>
                <li class="nav-item col-6 col-md-auto p-3">
                  <i class="bi bi-whatsapp"></i>
                  <small class="d-md-none ms-2">WhatsApp</small>
                </li>
                <li class="nav-item col-6 col-md-auto p-3">
                  <i class="bi bi-facebook"></i>
                  <small class="d-md-none ms-2">Facebook</small>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="content">{activeView === "user" && <UsersPage />}</div>
        {/* <!-- Script para responsive - movil--> */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></script>
      </div>
      <Outlet></Outlet>
    </>
  );
};
