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
import NoAuthorized from './components/Utilitarios/NoAuthorized';
import ProtectedRoute from './components/Utilitarios/ProtectedRoute';
import FarmaciaDasborad from './components/Layout/FarmaciaDashboard';
import RegistroVentas from './components/Ventas/RegistroVentas';



if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
      <UserContextProvider>
        <BrowserRouter>
            <Routes>
              <Route path='/updsHospital' element = { <Main/> }>
                <Route  index element = { <ProtectedRoute allowedRoles={['admin']}><AdminDashboard/></ProtectedRoute>  }/>
                       
                <Route path='registroPersona' element={
                  <ProtectedRoute allowedRoles={['admin']}>                                                                                                                                                                                                                                                                                
                    <PersonaForm/>
                </ProtectedRoute> }/>
                <Route path='ListPersona' element={<ListPersona/>}/>
                <Route path='AsociarPersona/:id' element={ <ProtectedRoute allowedRoles={['admin']}>  <HolderAsociarPersonal /> </ProtectedRoute>}/>
                //rutas empleado
                <Route path='CrearUsuario/:id' element={<ProtectedRoute allowedRoles={['admin']}><HolderCrearUsuario/></ProtectedRoute>} />
                <Route path='ListarCategoria' element={<ProtectedRoute allowedRoles={['admin']}><ListaCategoria/></ProtectedRoute>} />
                <Route path='registroMeicamento' element={<ProtectedRoute allowedRoles={['admin']}><MedicamentoForm/></ProtectedRoute>}/>
              </Route>
              <Route path='/updsFarmacia' element={<Main />}>
                  <Route index element={<ProtectedRoute allowedRoles={['empleado']}><FarmaciaDasborad/></ProtectedRoute>} />
                  <Route path='sale' element={<RegistroVentas/>}/>
              </Route>
              <Route path='/' element={<Welcome/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='*' element={<NotFound/>}/>
              <Route path='/NotAuthorized' element={<NoAuthorized/>}/>
            </Routes>
        </BrowserRouter>
      </UserContextProvider>
    )
}
