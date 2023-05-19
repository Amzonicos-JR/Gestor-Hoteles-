import axios from "axios";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> asumpango-2018373
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddInvoiceDetail = () => {
  const navigate = useNavigate();
  const [rev, setRev] = useState([]);
<<<<<<< HEAD
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddInvoiceDetail = () => {
  const navigate = useNavigate()
>>>>>>> jperez-2018495
=======
>>>>>>> asumpango-2018373
  const [form, setForm] = useState({
    booking: "",
  });

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> asumpango-2018373
  const getRev = async () => {
    try {
      const { data } = await axios(
        "http://localhost:3000/reservation/get-reservations-NOIV"
      );
      if (data.reservation) {
        console.log(data.reservation);
        setRev(data.reservation);
      }
    } catch (err) {
      console.log(err);
      throw new Error(
        err.response.message || "Error getting reservations in not use"
      );
    }
<<<<<<< HEAD
=======
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
>>>>>>> jperez-2018495
=======
>>>>>>> asumpango-2018373
  };

  const addInvoiceDetail = async (e) => {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      let form = {
        booking: document.getElementById("inputReservation").value
      }
=======
      e.preventDefault();
>>>>>>> jperez-2018495
=======
      let form = {
        booking: document.getElementById("inputReservation").value
      }
>>>>>>> asumpango-2018373
      const { data } = await axios.post(
        "http://localhost:3000/invoicedetail/add",
        form
      );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> asumpango-2018373
      if (data.message) {
        alert(data.message);
        //cambiar de vista
        navigate("/home/invoicedetail");
      }
<<<<<<< HEAD
=======
      if(data.message) {
        alert(data.message)
        //cambiar de vista  
        navigate("/home/invoicedetail")
    }
>>>>>>> jperez-2018495
=======
>>>>>>> asumpango-2018373
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
      throw new Error("Error in savid to invoice detail");
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> asumpango-2018373
  useEffect(() => {
    getRev();
  }, []);

<<<<<<< HEAD
=======
>>>>>>> jperez-2018495
=======
>>>>>>> asumpango-2018373
  return (
    <>
      <h1 className="text-center">Agregar invoice detail</h1>
      <form>
        <div className="container p-5 my-1">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> asumpango-2018373
          <div className="mb-3">
            <label htmlFor="inputReservation" className="form-label">
              Reservaciones
            </label>
            <select className="form-control" id="inputReservation">
              {rev.map(({ _id, user, hotel, cNoches, subTotal, rooms }, i) => {
                return (
                  <option key={i} value={_id}>
                    User: {user.name}, Hotel: {hotel.name},  {hotel.direction}, Habitacion: {rooms.numberRoom}, {rooms.typeRoom}, Noches: {cNoches}, Total: {subTotal},
                  </option>
                )
              })}
            </select>
          </div>

          <button
            onClick={(e) => addInvoiceDetail(e)}
            type="button"
            className="btn btn-primary btn-lg btn-block"
          >
            Agregar
          </button>
<<<<<<< HEAD
=======
          <div className="form-group">
            <label>Booking</label>
            <input
              onChange={handleChange}
              name="booking"
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="booking"
            />
          </div>

            <button
              onClick={(e) => addInvoiceDetail(e)}
              type="button"
              className="btn btn-primary btn-lg btn-block"
            >
              Agregar
            </button>
>>>>>>> jperez-2018495
=======
>>>>>>> asumpango-2018373

          <Link to={"/home/invoicedetail"}>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Cancelar
            </button>
          </Link>
        </div>
      </form>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
};
=======
};
>>>>>>> jperez-2018495
=======
};
>>>>>>> asumpango-2018373
