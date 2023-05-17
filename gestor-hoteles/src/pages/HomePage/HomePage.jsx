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
import valencia from "../../assets/Valencia.png"
import barcelo from "../../assets/Barcelo.png"
import us from "../../assets/us.png"
import luxor from "../../assets/Luxor.png"
import times from "../../assets/Times.png"
import flamingo from "../../assets/Flamingo.png"
import excalibur from "../../assets/Excalibur.png"
import popular1 from "../../assets/Popular1.png"
import popular2 from "../../assets/Popular2.png"
import popular3 from "../../assets/Popular3.png"
import popular4 from "../../assets/Popular4.png"
import popular5 from "../../assets/Popular5.png"
import popular6 from "../../assets/Popular6.png"

export const HomePage = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap"
        rel="stylesheet"
      />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymus" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>

      <body>
        <nav className="navbar navbar-expand-lg" id="navbar">
          <div className="container">
            <a className="navbar-brand" id="logo">
              <span>K</span>inalgo
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

                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#book">
                    Reserva
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#packages">
                    Ofertas
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Beneficios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#gallary">
                    Populares
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Conoce Sobre Nosotros
                  </a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
        <div className="home">
          <div className="content">
            <h5>Bienvenido a <span>K</span>inalgo </h5>
            <h1>
              Visita <span className="changecontent"></span>
            </h1>
            <p>
              Somos la mejor opción en ofertas de hoteles
            </p>
            <a href="#about">Conocenos</a>
          </div>
        </div>
        <section className="book" id="book">
          <div className="container">
            <div className="main-text">
              <h1>
                <span>R</span>eserva <span>Y</span>a
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
                    placeholder="Nombre de Hotel"
                    required
                  />
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Cantidad de Personas"
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
                    placeholder="Ingrese datos persona de la reservacion"
                  ></textarea>
                  <Link to='/login'>
                    <input
                      type="submit"
                      value="Reservar"
                      className="submit"
                      required
                    />
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="packages" id="packages">
          <div className="container">
            <div className="main-txt">
              <h1>
                <span>O</span>fertas
              </h1>
            </div>
            <div className="row" style={{ marginTop: 30 + 'px' }}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={valencia} alt="" />
                  <div className="card-body">
                    <h3>Hotel Valencia</h3>
                    <p>
                      Hotel Valencia y haz de tu estancia en la ciudad una experiencia única e inolvidable. Alójate en el centro histórico de la ciudad de Valencia
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$250</strong>
                    </h6>
                    <a href="#book">Reserva ahora</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={barcelo} alt="" />
                  <div className="card-body">
                    <h3>Hotel Barcelo</h3>
                    <p>
                      Este hotel urbano de 5 estrellas dispone de 397 elegantes habitaciones equipadas
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <h6>
                      Price: <strong>$100</strong>
                    </h6>
                    <a href="#book">Reserva ahora</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={luxor} alt="" />
                  <div className="card-body">
                    <h3>Luxor Hotel & Casino</h3>
                    <p>
                      Es un hotel de 4 estrellas conocido
                      por su forma piramidal inspirada en el Antiguo Egipto.
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star "></i>
                    </div>
                    <h6>
                      Price: <strong>$300</strong>
                    </h6>
                    <a href="#book">Reserva ahora</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 30 + 'px' }}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={times} alt="" />
                  <div className="card-body">
                    <h3>Hotel Times Square</h3>
                    <p>
                      Hotel Times Square  para disfrutar de un lujoso alojamiento,
                      modernas amenidades y servicios de primera clase.
                    </p>
                    <div className="star">
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                      <i className="fa-solid fa-star checked"></i>
                    </div>
                    <h6>
                      Price: <strong>$500</strong>
                    </h6>
                    <a href="#book">Reserva ahora</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={flamingo} alt="" />
                  <div className="card-body">
                    <h3>Flamingo Hotel & Casino</h3>
                    <p>
                      Flamingo Las Vegas Hotel & Casino es un complejo hotelero de
                      3 estrellas que alberga unas completas instalaciones
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
                    <a href="#book">Reserva ahora</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={excalibur} alt="" />
                  <div className="card-body">
                    <h3>Excalibur Hotel Casino</h3>
                    <p>
                      Excalibur Hotel Casino, de 3 estrellas, se encuentra en pleno
                      centro de la privilegiada zona de Las Vegas Strip.
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
                    <a href="#book">Reserva ahora</a>
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
                <span>B</span>eneficios
              </h1>
            </div>
            <div className="row" style={{ marginTop: 30 + 'px' }}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-hotel"></i>
                  <div className="card-body">
                    <h3>Los mejores Hoteles</h3>
                    <p>
                      Trabajamos con los mejores hoteles de cada país para mejor comodida para nuestros clíentes.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-utensils"></i>
                  <div className="card-body">
                    <h3>Comidas & Drinks</h3>
                    <p>
                      Cada reservacion de hotel cuenta con buffet incluido, como tambien bebidas incluidas en el bar.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-bullhorn"></i>
                  <div className="card-body">
                    <h3>Guía de Seguridad</h3>
                    <p>
                      También cuenta con guia personal , para conocer los lugares más turisticos en la zona.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 30 + 'px' }}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-globe-asia"></i>
                  <div className="card-body">
                    <h3>Alrededor del mundo</h3>
                    <p>
                      Trabajamos con los mejores hoteles en todos los paises del mundo.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-plane"></i>
                  <div className="card-body">
                    <h3>Viajes Seguros</h3>
                    <p>
                      Trabajamos con las mejores compañías aerolineas para mejor servicio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <i className="fas fa-hiking"></i>
                  <div className="card-body">
                    <h3>Actividades</h3>
                    <p>
                      Contamos con actividades como tenis, cata de vinos, natación y mucho más.
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
                <span>H</span>oteles Mas Populares
              </h1>
            </div>
            <div className="row" style={{ marginTop: 30 + 'px' }}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={popular1} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={popular2} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={popular1} alt="" height="230px" />
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: 30 + 'px' }}>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={popular4} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={popular5} alt="" height="230px" />
                </div>
              </div>
              <div className="col-md-4 py-3 py-md-0">
                <div className="card">
                  <img src={popular6} alt="" height="230px" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="container">
            <div className="main-txt">
              <h1>
                <span>C</span>onoce <span>S</span>obre <span>N</span>osotros
              </h1>
            </div>
            <div className="row" style={{ marginTop: 50 + 'px' }}>
              <div className="col-md-6 py-3 py-md-0">
                <div className="card">
                  <img src={aboutImg} alt="" />
                </div>
              </div>
              <div className="col-md-6 py-3 py-md-0">
                <h2>¿Quienes Somos?</h2>
                <p>
                  Kinalgo S.A, Somos una Empresa de hotelería  dedicada a proporcionar servicios de alojamiento y
                  hospitalidad a los huéspedes que viajan por placer o negocios.Trabajamos con diferentes hoteles alrededor del mundo que operan hoteles,
                  resorts, posadas u otras formas de alojamiento temporal.
                </p>
                <h2>Mision</h2>
                <p>
                  Nuestra misión es ofrecer un servicio seguro, confiable y eficaz a todos nuestros clientes, contamos
                  con distintos precios, muy accesibles y cómodos..
                </p>

              </div>
            </div>
          </div>
        </section>
        <footer id="footer">
          <h1>
            <span>K</span>inalgo
          </h1>

          <div className="social-links">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest-p"></i>
          </div>

          <div className="copyright">
            <p>&copy;Copyright 2023 Kinalgo All Rights Reserved</p>
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
