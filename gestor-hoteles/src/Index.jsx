import React, { useState, createContext, useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage';
import App from './App'
import { DashboardPage } from './pages/DashboardPage/DashboardPage';

//invoices details
import { InvoiceDetailPage } from './pages/InvoiceDetail/InvoiceDetailPage';
import { GetInvoicesDetails } from './pages/InvoiceDetail/GetInvoicesDetails';
import { AddInvoiceDetail } from './pages/InvoiceDetail/AddInvoiceDetail';
import { UpdateInvoiceDetail } from './pages/InvoiceDetail/UpdateInvoiceDetail';
import { GetInvoiceDetailasPage } from './pages/InvoiceDetail/GetInvoiceDetailasPage';

export const AuthContext = createContext();
export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: ''
      })

      const [isAdmin, setIsAdmin] = useState('user');
      useEffect(() => {
          let token = localStorage.getItem('token')
          if (token) setLoggedIn(true)
      }, [])
      
      const adminRoutes = [
        //EVENTO
        //SERVICIOS
        //HABITACIONES
        //HOTELES
      ]

      const userRoutes = [
        {
            path: 'invoicedetail',
            element: <InvoiceDetailPage></InvoiceDetailPage>,
            children: [
                {
                    path: '',
                    element: <GetInvoicesDetails></GetInvoicesDetails>
                },
                {
                    path: 'add',
                    element: <AddInvoiceDetail></AddInvoiceDetail>
                },
                {
                    path: 'update/:_id',
                    element: <UpdateInvoiceDetail></UpdateInvoiceDetail>
                },
                {
                    path: 'additionalservices/:_id',
                    element: <GetInvoiceDetailasPage></GetInvoiceDetailasPage>
                }
            ]
        }
        //HOTEL
        //DETALLE CUENTA
        //FACTURA
      ]

      const clientRoutes = [
        //RESERVACIÓN
      ]

    const routes = createBrowserRouter([
        {
            path: '/',
            element: <App/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/login',
                    element: <LoginPage></LoginPage>
                },
                {
                    path: '/home',
                    element: loggedIn ? <DashboardPage></DashboardPage> : <LoginPage></LoginPage>, 
                    children: isAdmin === "admin" ? adminRoutes :
                    isAdmin === "user" ? userRoutes : clientRoutes
                },
            ]
        }
    ])
    return (
        <AuthContext.Provider value={{isAdmin, loggedIn, setLoggedIn, dataUser, setDataUser }}>
            <RouterProvider router={routes}></RouterProvider>
        </AuthContext.Provider>
    )
}
