import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () =>{
    return(
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="card text-center shadow" style={{ width: "20rem" }}>
                <div className="card-body">
                  <h5 className="card-title">¡Bienvenido!</h5>
                  <p className="card-text">Gracias por unirte a nuestra aplicación. Estamos emocionados de tenerte aquí.</p>
                  <button className="btn btn-primary">Comenzar</button>
                </div>
              </div>
            </div>
    )
}
export default App;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
