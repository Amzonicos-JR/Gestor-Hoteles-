import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const RegisterPage = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        DPI: '',
        name: '',
        surname: '',
        age: '',
        phone: '',
        email: '',
        password: ''

    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const register = async (e) => {
        try {
            e.preventDefault()
            const { data } = await axios.post('http://localhost:3000/user/register', form)
            if (data.message) {
                alert(data.message)
                navigate('/login')
            }
        } catch (err) {
            console.log(err)
            alert(err.response.data.message)
            throw new Error('Error registering user')
        }
    }



    return (
        <>
            <br />
            <h1 className='text-center'>Sing up</h1>
            <form className='m-5 text-center'>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">DPI</label>
                    <input onChange={handleChange} name='DPI' className='form-control' type="number" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Name</label>
                    <input onChange={handleChange} name='name' className='form-control' type="text" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Surname</label>
                    <input onChange={handleChange} name='surname' className='form-control' type="text" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Age</label>
                    <input onChange={handleChange} name='age' className='form-control' type="number" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Phone</label>
                    <input onChange={handleChange} name='phone' className='form-control' type="number" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Email</label>
                    <input onChange={handleChange} name='email' className='form-control' type="email" />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor="">Password</label>
                    <input onChange={handleChange} name='password' className='form-control' type="password" />
                </div>
                <button onClick={(e) => register(e)} className='btn btn-primary m-2'>
                    Sign Up
                </button>
                <Link to='/login'>
                    <button className='btn btn-danger'>Cancel</button>
                </Link>
            </form>
        </>
    )
}

export default RegisterPage