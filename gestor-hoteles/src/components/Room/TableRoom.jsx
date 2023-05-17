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
                                        <p>UPDATE</p>
                                    </td>
                                    <td>
                                        <p>delete</p>
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