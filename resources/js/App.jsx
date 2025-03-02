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
import PersonaForm from './components/Personas/PersonaForm';
import ListPersona from './components/Personas/ListPersona';
import HolderAsociarPersonal from './components/Layout/Holder/HolderAsociarPersonal';
import HolderCrearUsuario from './components/Layout/Holder/HolderCrearUsuario';
import ListaCategoria from './components/Categorias/LIstaCategoria';
import MedicamentoForm from './components/Medicamentos/MedicamentoForm';



if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
      <UserContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/updsHospital' element = { <Main/> }>
                <Route  index element = { <AdminDashboard/> }/>
                <Route path='registroPersona' element={<PersonaForm/>}/>
                <Route path='ListPersona' element={<ListPersona/>}/>
                <Route path='AsociarPersona/:id' element={<HolderAsociarPersonal />}/>
                <Route path='CrearUsuario/:id' element={<HolderCrearUsuario/>} />
                <Route path='ListarCategoria' element={<ListaCategoria/>} />
                <Route path='registroMeicamento' element={<MedicamentoForm/>}/>
              </Route>
              <Route path='/' element={<Welcome/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </UserContextProvider>
    )
}
