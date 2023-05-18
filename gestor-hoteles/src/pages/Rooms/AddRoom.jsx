import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export const AddRoom = () => {

  const [rooms, setRooms] = useState([{}]);
  const navigate = useNavigate()

  const getRooms = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/room/get-room')
      if (data.rooms) {
        setRooms(data.rooms)
      }
    } catch (err) {
      console.log(err);
      throw new Error(err.response.message || "Error getting rooms");
    }
  };

  const addRoom = async (e) => {
    try {
      console.log('entre')
      e.preventDefault();
      let room = {
        numberRoom: document.getElementById('inputDPI').value,
        amountPeople: document.getElementById('inputNO').value,
        typeRoom: document.getElementById('inputType').value,
        price: document.getElementById('inputPrice').value
      }
      const { data2 } = await axios.post('http://localhost:3000/room/add-room', room)
      alert(data2.message)
      getRooms();
      clear();
    } catch (err) {
      alert(err.response.data2.message)
    }
  }

  const clear = async () => {
    try {
      document.getElementById('inputDPI').value = '',
        document.getElementById('inputDPI').value = '',
        document.getElementById('inputNO').value = '',
        document.getElementById('inputType').value = '',
        document.getElementById('inputPrice').value = ''
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => getRooms, [])
  return (
    <>
      <h1>ADD ROOMS</h1>
      <form className="m-5 text-center">
        <div className="mb-3">
          <label htmlFor="inputNO" className="form-label">Number Room</label>
          <input type="number" className="form-control" id="inputNO" required />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">AmounPeople</label>
          <input type="number" className="form-control" id="inputPrice" required />
        </div>
        <div>
          <label htmlFor="inputType" className="form-label">Type Room</label>
          <input type="text" className="form-control" id="inputType" required />
        </div>
        <div>
          <label htmlFor="inputPrice" className="form-label">Price</label>
          <input type="number" className="form-control" id="inputPrice" required />
        </div>
        <br></br>

        <Link to="/home/rooms">
          <button onClick={(e) => addRoom(e)} className="btn btn-success m-1">ADD</button>
        </Link>
        <Link to="/home/rooms">
          <button className="btn btn-danger m-1">Cancel</button>
        </Link>
      </form>
    </>
  )
}
