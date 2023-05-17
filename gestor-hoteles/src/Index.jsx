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
import { GetInvoiceDetailEvents } from './pages/InvoiceDetail/GetInvoiceDetailEvents';
//Bills
import { BillPage } from './pages/Bill/BillPage';
import { GetBills } from './pages/Bill/GetBills';
import { AddBill } from './pages/Bill/AddBill';
import { UpdateBill } from './pages/Bill/UpdateBill';

export const AuthContext = createContext();
export const Index = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    const [dataUser, setDataUser] = useState({
        name: '',
        username: '',
        role: ''
      })

      const [isAdmin, setIsAdmin] = useState('ADMIN');
      useEffect(() => {
          let token = localStorage.getItem('token')
          if (token) setLoggedIn(true)
      }, [])
      
      const ADMINAMRoutes = [
        //EVENTO
        //SERVICIOS
        //HABITACIONES
        //HOTELES
      ]

      const ADMINRoutes = [
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
                },
                {
                    path: 'events/:_id',
                    element: <GetInvoiceDetailEvents></GetInvoiceDetailEvents>
                }
            ]
        },{
            path: 'bill',
            element: <BillPage></BillPage>,
            children: [
                {
                    path: '',
                    element: <GetBills></GetBills>
                },
                {
                    path: 'add',
                    element: <AddBill></AddBill>
                },
                {
                    path: 'update/:_id',
                    element: <UpdateBill></UpdateBill>
                }
            ]
        }
        //HOTEL
        //DETALLE CUENTA
        //FACTURA
      ]

      const CLIENTRoutes = [
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
                    children: isAdmin === "ADMINAM" ? ADMINAMRoutes :
                    isAdmin === "ADMIN" ? ADMINRoutes : CLIENTRoutes
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
