import React from 'react'
import { Link, Outlet } from "react-router-dom";
import { TableRoom } from '../../components/Room/TableRoom';

export const RoomPage = () => {
    return (
        <>
            <h1>Rooms Aplication</h1>
            <TableRoom></TableRoom>
        </>
    )
}