import React from 'react';
import { Outlet } from "react-router-dom";
import Menu from './Layout/Menu';
import Footer from './Layout/Footer';

function Main () {
    if (!localStorage.getItem("UPDSHospital")) return <Navigate to="/login"/>
    return (
        <>
            <Menu/>
            <Outlet/> 
            <Footer/>
        </>
    )
}

export default Main;