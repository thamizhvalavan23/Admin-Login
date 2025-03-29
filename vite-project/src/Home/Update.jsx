import React, { useContext, useState } from 'react';
import './Update.css';
import { Appcontext } from '../AdminLogin/Context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';


const Update = () => {


    const [first_name , setFirst_name] = useState('');
    const[last_name , setLast_name] = useState("");
    const[email , setEmail] = useState("");

    const {show , setShow} = useContext(Appcontext);

    const {upid} = useParams();

    const navigiate = useNavigate()

    
    
    const updatedata = async (event)=> {

        event.preventDefault();
        try {

            const {data} = await axios.put(`https://admin-login-back-end.onrender.com/api/admin/update${upid}`, {first_name , last_name , email})

            if (data.success) {
                console.log("good code");
                toast.success(data.message);
                setEmail("");
                setFirst_name("")
                setLast_name("")
                navigiate('/')
            }else{
                console.log("bad code");
                toast.error(data.message);
            }
            
        } catch (error) {
            console.log("invalid");
            
        }
    }

  return (
    <div>
          <div className="set-show">
                {
                    show === 'show' ? <div className='show-data'>

                        <form className='form-tag' onSubmit={updatedata}>
                            <div className="show-form">
                                <h1>Update-Users</h1>
                                <span><i class="fa-solid fa-graduation-cap"></i></span>
                            </div>
                            <div className="show-details">
                                <input type='text' name='first_name' value={first_name} onChange={(e) => setFirst_name(e.target.value)} required autoComplete='off' placeholder='first_name' />
                                <input type='text' name='last_name ' value={last_name } onChange={(e) => setLast_name(e.target.value)} required autoComplete='off' placeholder='last_name'  />
                                <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete='off' placeholder='Email' />
                            </div>
                            <div className="show-cancel">
                                <button onClick={() => setShow("Hidden")} className='btn' type='submite'>Cancel</button>
                                <button className='btn' type='submite'>UpDate</button>
                            </div>

                        </form>

                    </div>
                        : ""


                }
            </div>
      
    </div>
  )
}

export default Update
