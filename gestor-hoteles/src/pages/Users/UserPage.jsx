import React from 'react'
import { Link, Outlet } from "react-router-dom";

export const UserPage = () => {

    return (
        <>
            <h1>User Page</h1>
            <br></br>
            <Outlet></Outlet>
        </>
    )
}