import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const UpdateRoom = () => {
    const navigate = useNavigate();
    const { _id } = useParams();

    const updateRoom = async (e) => {
        try {
            e.preventDefault();
            let updateRoom = {
                numberRoom: document.getElementById('inputNO').value,
                amountPeople: document.getElementById('inputAP').value,
                price: document.getElementById('inputPrice').value
            }

            const { data } = await axios.put(`http://localhost:3000/room/update-room/${_id}`, updateRoom)
            alert(data.message)
            navigate('/home/rooms')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <h1>Update Room</h1>
            <form className="m-5 text-center">
                <div className="mb-3">
                    <label htmlFor="inputNO" className="form-label">Number Room</label>
                    <input type="number" className="form-control" id="inputNO" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputAP" className="form-label">AmounPeople</label>
                    <input type="number" className="form-control" id="inputAP" required />
                </div>
                <div>
                    <label htmlFor="inputPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="inputPrice" required />
                </div>
                <br></br>
                <button onClick={(e) => updateRoom(e)} className="btn btn-success m-1">Update</button>
                <Link to="/home/rooms">
                    <button className="btn btn-danger m-1">Cancel</button>
                </Link>
            </form>
        </>
    )
}
