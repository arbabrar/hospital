import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/app.css'
import Welcome from './components/Welcome';
import Main from './components/Main';
import Login from './components/Login';
import NotFound from './components/Utilitarios/Error/Nofound';
import { UserContextProvider } from './context/UserContext';
import AdminDashboard from './components/Layout/AdminDashboard';


if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
      <UserContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/updsHospital' element = { <Main/> }>
                <Route  index element = { <AdminDashboard/> }/>
              </Route>
              <Route path='/' element={<Welcome/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </UserContextProvider>
    )
}
