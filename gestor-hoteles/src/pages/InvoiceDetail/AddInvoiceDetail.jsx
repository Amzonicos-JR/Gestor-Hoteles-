import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddInvoiceDetail = () => {
  const navigate = useNavigate();
  const [rev, setRev] = useState([]);
  const [form, setForm] = useState({
    booking: "",
  });

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
  };

  const addInvoiceDetail = async (e) => {
    try {
      let form = {
        booking: document.getElementById("inputReservation").value
      }
      const { data } = await axios.post(
        "http://localhost:3000/invoicedetail/add",
        form
      );
      if (data.message) {
        alert(data.message);
        //cambiar de vista
        navigate("/home/invoicedetail");
      }
    } catch (err) {
      console.log(err);
      alert(err.response?.data.message);
      throw new Error("Error in savid to invoice detail");
    }
  };

  useEffect(() => {
    getRev();
  }, []);

  return (
    <>
      <h1 className="text-center">Agregar invoice detail</h1>
      <form>
        <div className="container p-5 my-1">
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

          <Link to={"/home/invoicedetail"}>
            <button type="button" className="btn btn-primary btn-lg btn-block">
              Cancelar
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};