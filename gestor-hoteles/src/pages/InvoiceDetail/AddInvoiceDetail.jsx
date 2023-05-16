import React from "react";
import { Link } from "react-router-dom";

export const AddInvoiceDetail = () =>{
    return (
        <>
            <h1>Agregar invoice detail</h1>
            <Link to={'/home/invoicedetail'}>
                <button className="btn btn-danger">Agregar</button>
            </Link>
            <Link to={'/home/invoicedetail'}>
                <button className="btn btn-danger">Cancelar</button>
            </Link>            
        </>
    )
}