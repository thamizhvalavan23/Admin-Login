import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import { toast } from 'react-toastify'
import { Appcontext } from '../AdminLogin/Context';
import Update from './Update.jsx';
import { Link } from 'react-router-dom';

const Home = () => {

    const [data, setData] = useState([]);

    const {setAtoken } = useContext(Appcontext);

     const {show , setShow} = useContext(Appcontext);


    const fetchdata = async () => {


        try {

            const { data } = await axios.get("http://localhost:3000/api/admin/all-data");

            if (data.success) {
                setData(data.find)
                console.log(data.find);
            } else {
                console.log("second error");

            }
        } catch (error) {

            console.log("last error");
        }

    }

    const deleteUser = async (userId, onDelete) => {
        try {
          const response = await axios.delete(`http://localhost:3000/api/admin/delete${userId}`);
      
          if (response.data.success) {
            alert("User deleted successfully!");
            onDelete(); // Refresh data after deletion
          } else {
            alert("Failed to delete user.");
          }
        } catch (error) {
          console.error("Delete Error:", error);
          alert("An error occurred while deleting.");
        }
      };

    useEffect(() => {
        fetchdata()

    },[])



    return (
        <div>
            <button onClick={()=> setAtoken("")} className='btn2' type='submite'>Logout</button>
            <div className='card-list'>
            {
                data.map((list, index) => (
                    <div key={index} className='card-data'>
                        <img src={list.avatar} alt='hello'/>
                        <p>{list.first_name} {list.last_name}</p>
                        <p>{list.email}</p>
                        <h1><span onClick={()=> deleteUser(list._id, fetchdata)}>Delete</span> <Link to={`/update/${list._id}`}> <span onClick={()=> setShow("show")}>Update</span> </Link></h1>
                    </div>
                ))
            }
            </div>
            <div className='top'>
            </div>
        </div>
    )
}

export default Home
