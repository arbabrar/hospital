import React from 'react';
import { GridLoader } from "react-spinners";

const Loading = ({color="#335bff", mensaje ="Espere por favor"}) =>{
    return(
        <div className='text-center'>
                <GridLoader color={color}/>
                <p className="text-size">Espere por favor...</p> 
        </div>
    )
}

export default Loading;