import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"

export const UpdateInvoiceDetail = () =>{
    const { _id } = useParams()

    return (
        <>
            <h1> Update Invoice Detail {_id} </h1>
            <Link to={'/home/invoicedetail'}>
                <button className="btn btn-danger">Agregar</button>
            </Link>
            <Link to={'/home/invoicedetail'}>
                <button className="btn btn-danger">Cancelar</button>
            </Link>            
        </>
    )
}