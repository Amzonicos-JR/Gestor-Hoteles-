import React from "react";
import { Link } from "react-router-dom";

export const GetInvoicesDetails = () => {
  return (
    <>
      <Link to={"add"}>
        <button className="btn btn-danger">+Add</button>
      </Link>
      <Link to={`update/${111}`}>
        <button className="btn btn-danger">+Actualizar</button>
      </Link>      
      <h2>Get invoices details</h2>
    </>
  );
};
