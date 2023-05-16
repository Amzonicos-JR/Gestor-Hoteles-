import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export const GetInvoiceDetailasPage = () =>{
    const [as, setAs] = useState([])
    const { _id } = useParams()

    const getAs = async() =>{
        try{
            const { data } = await axios.get(`http://localhost:3000/invoicedetail/getas/${_id}`)
            if(data.additionalServices){
                setAs(data.additionalServices)
                console.log(data.additionalServices)
            }
        }catch(err){
            console.log(err);
            throw new Error(err.response.message || "Error getting additional services");
        }
    }

    return (
        <>
            <h1> Addtitional Services of {_id} </h1>
            <div>
                <h2>My additional services</h2>
                //Hacer el populate de as y event
            </div>
            <div>
                <h2> Services </h2>
            </div>
        </>
    )
}