import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Room } from "./Room";
export const TableRoom = () => {
    const [iAccount, setIDAccount] = useState();
    const [rooms, setRooms] = useState([{}]);

    const getRooms = async () => {
        try {
            const { data } = await axios.get('http://localhost:3000/room/get-rooms')
            if (data.rooms) {
                setRooms(data.rooms)
            }
        } catch (err) {
            console.log(err);
            throw new Error(err.response.message || data, "Error getting rooms");
        }
    };

    // const addAccount = async () => {
    //     try {
    //         let account = {
    //             dpi: document.getElementById('inputDPI').value,
    //             name: document.getElementById('inputName').value,
    //             surname: document.getElementById('inputSurname').value,
    //             age: document.getElementById('inputAge').value,
    //             phone: document.getElementById('inputPhone').value,
    //             email: document.getElementById('inputEmail').value
    //         }
    //         const { data } = await axios.post('http://localhost:3000/account/add-account', account)
    //         alert(data.message)
    //         getAccounts();
    //         clear();
    //     } catch (err) {
    //         alert(err.response.data.message)
    //     }
    // }

    const clear = async () => {
        try {
            document.getElementById('inputDPI').value = '',
                document.getElementById('inputName').value = '',
                document.getElementById('inputSurname').value = '',
                document.getElementById('inputAge').value = '',
                document.getElementById('inputPhone').value = '',
                document.getElementById('inputEmail').value = ''
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => getRooms, [])

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center h-100">
                <button className="btn btn-outline-danger">ADD ROOM <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" class="bi bi-house-add" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                </svg></button>
            </div>
            <br />
            <table className="table table-striped">
                <thead>
                    <tr className="text-center">
                        <th>NORoom</th>
                        <th>AmountP</th>
                        <th>TypeRoom</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rooms.map(({ _id, numberRoom, amountPeople, typeRoom, price, status }, index) => {
                            return (
                                <tr className="text-center" key={index}>
                                    <Room
                                        numberRoom={numberRoom}
                                        amountPeople={amountPeople}
                                        typeRoom={typeRoom}
                                        price={price}
                                        status={status}
                                    ></Room>
                                    <td>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg></p>
                                    </td>
                                    <td>
                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                        </svg></p>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}