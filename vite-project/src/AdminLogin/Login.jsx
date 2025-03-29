import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Appcontext } from './Context.jsx';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState("eve.holt@reqres.in");
    const [password, setPassword] = useState("cityslicka")

    const { setAtoken , Atoken } = useContext(Appcontext)


    const handlesubmite = async (event) => {
        event.preventDefault();

        try {

            const {data} = await axios.post("https://admin-login-back-end.onrender.com/api/admin/login" , {email , password});

            if (data.success) {

                localStorage.setItem("Atoken",data.token)
                setAtoken(data.token);
                console.log("good login",);
                toast.success(data.message)
                setEmail("");
                setPassword("")
            }
            
        } catch (error) {
            console.log(error);
            toast.error(data.message)
            
        }
    }


    return (
        <div>
            <form onSubmit={handlesubmite}>
            <div className='main'>
                <h1 className='main-name'>Admin_login</h1>
                <div className='input'>
                    <input type='text' placeholder='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' />
                    <input type='password' placeholder='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete='off' />
                </div>
                <button className='btn' type='submite'>Login</button>
            </div>
            </form>

        </div>
    )
}

export default Login
