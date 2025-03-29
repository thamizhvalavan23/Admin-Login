import { createContext , useState } from "react";
import React from "react";

export const  Appcontext = createContext()


const Appcontextprovider = (props)=> {
    const [Atoken , setAtoken] = useState(localStorage.getItem('Atoken') ? localStorage.getItem('Atoken') : "")
     const [show, setShow] = useState("Hidden")



    const value = {

        Atoken , setAtoken , show , setShow

    }



    return(

        <Appcontext.Provider value = {value}>
            {props.children}
        </Appcontext.Provider>
    )

}



export default Appcontextprovider