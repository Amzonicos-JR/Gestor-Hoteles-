import React from "react";
import { Link } from "react-router-dom";
import "../HomePage/HomePage.css";
import ilustracion1 from "../../assets/ilustracion1.svg";
import aboutImg from "../../assets/about-img.png"
import background from "../../assets/background-img.png"
import book from "../../assets/book-img.png"
import france from "../../assets/france.png"
import g1 from "../../assets/g1.png"
import g2 from "../../assets/g2.png"
import g3 from "../../assets/g3.png"
import g4 from "../../assets/g4.png"
import g5 from "../../assets/g5.png"
import g6 from "../../assets/g6.png"
import india from "../../assets/india.png"
import italy from "../../assets/italy.png"
import logo from "../../assets/logo.png"
import pakistan from "../../assets/pakistan.png"
import uk from "../../assets/uk.png"
import us from "../../assets/us.png"

export const HomePage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap"
        rel="stylesheet"
      />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymus"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>

      <body>
        <nav className="navbar navbar-expand-lg" id="navbar">
          <div className="container">
            <a className="navbar-brand"  id="logo">
              <span>T</span>ravel
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span>
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to='homepage'>
                  <a className="nav-link active">
                    Home
                  </a>
                    </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#book">
                    Book
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#packages">
                    Packages
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallary">
                    Gallary
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
              </ul>
                <button className="btn btn-primary" type="button">
                  Search
                </button>
            </div>
          </div>
        </nav>
        <div className="home">
          <div className="content">
            <h5>Welcome To World</h5>
            <h1>
              Visit <span className="changecontent"></span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae,
              nisi.
            </p>
            <a href="#book">Book Place</a>
          </div>
        </div>
        <section className="book" id="book">
          <div className="container">
            <div className="main-text">
              <h1>
                <span>B</span>ook
              </h1>
            </div>
            <div className="row">
              <div className="col-md-6 py-3 py-md-0">
                <div className="card">
                  <img src={book} alt="" />
                </div>
              </div>
              <div className="col-md-6 py-3 py-md-0">
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Where To"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="How Many"
                    required
                  />
                  <br />
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Arrivals"
                    required
                  />
                  <br />
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Leaving"
                    required
                  />
                  <br />
                  <textarea
                    className="form-control"
                    rows="5"
                    name="text"
                    placeholder="Enter Your Name & Details"
                  ></textarea>
                  <input
                    type="submit"
                    value="Book Now"
                    className="submit"
                    required
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
        Start
        <section className="packages" id="packages">
          <div className="container">
            <div className="main-txt">
              <h1>
                <span>P</span>ackages
              </h1>
            </div>
            <div className="row" style={{marginTop: 30+'px'}}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={uk} alt="" />
                  <div className="card-body">
                    <h3>United Kingdom</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, doloribus!
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$500</strong>
                    </h6>
                    <a href="#book">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={france} alt="" />
                  <div className="card-body">
                    <h3>France</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, doloribus!
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$500</strong>
                    </h6>
                    <a href="#book">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={pakistan} alt="" />
                  <div className="card-body">
                    <h3>Pakistan</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, doloribus!
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$500</strong>
                    </h6>
                    <a href="#book">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: 30+'px'}}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={italy} alt="" />
                  <div className="card-body">
                    <h3>Italy</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, doloribus!
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$500</strong>
                    </h6>
                    <a href="#book">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={india} alt="" />
                  <div className="card-body">
                    <h3>India</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, doloribus!
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$500</strong>
                    </h6>
                    <a href="#book">Book Now</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={us} alt="" />
                  <div className="card-body">
                    <h3>United States</h3>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ut, doloribus!
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$500</strong>
                    </h6>
                    <a href="#book">Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services" id="services">
          <div className="container">
            <div className="main-txt">
              <h1>
                <span>S</span>ervices
              </h1>
            </div>
            <div className="row" style={{marginTop: 30+'px'}}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-hotel"></i>
                  <div className="card-body">
                    <h3>Affordable Hotel</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, eaque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-utensils"></i>
                  <div className="card-body">
                    <h3>Food & Drinks</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, eaque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-bullhorn"></i>
                  <div className="card-body">
                    <h3>Safty Guide</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, eaque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: 30+'px'}}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-globe-asia"></i>
                  <div className="card-body">
                    <h3>Around The World</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, eaque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-plane"></i>
                  <div className="card-body">
                    <h3>Fastest Travel</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, eaque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-hiking"></i>
                  <div className="card-body">
                    <h3>Adventures</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      A, eaque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallary" id="gallary">
          <div className="container">
            <div className="main-txt">
              <h1>
                <span>G</span>allary
              </h1>
            </div>
            <div className="row" style={{marginTop: 30+'px'}}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={g1} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={g2} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={g3} alt="" height="230px" />
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: 30+'px'}}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={g4} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={g5} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={g6} alt="" height="230px" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container">
            <div className="main-txt">
              <h1>
                About <span>Us</span>
              </h1>
            </div>
            <div className="row" style={{marginTop: 50+'px'}}>
              <div className="col-md-6 py-3 py-md-0">
                <div className="card">
                  <img src={aboutImg} alt="" />
                </div>
              </div>
              <div className="col-md-6 py-3 py-md-0">
                <h2>How Travel Agency Work</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident perferendis dolorem, numquam earum at nam beatae
                  voluptate natus consectetur facere, saepe cupiditate ut
                  exercitationem deserunt, facilis quam perspiciatis autem iure
                  illo harum minima. Quas, vitae aperiam laudantium alias
                  asperiores nulla rerum, nihil eveniet perferendis sint illum
                  accusamus officiis aliquam nam.
                </p>
                <button id="about-btn">Read More...</button>
              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <h1>
            <span>T</span>ravel
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            fugiat, ipsa quos nulla qui alias.
          </p>
          <div className="social-links">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>
          <div className="credit">
            <p>
              Designed By <a href="#">SA Coding</a>
            </p>
          </div>
          <div className="copyright">
            <p>&copy;Copyright SA Coding. All Rights Reserved</p>
          </div>
        </footer>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </body>
    </>
  );
};
