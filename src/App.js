import React from "react";
import img from "./assets/imagenes.js";
import Form from "./components/Form.jsx";
import Navbar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <div>
          <h6>Bienvenido a</h6>
          <h1>La Dolce Vita Ristorante</h1>
          <h4>Donde la calidad es nuestra mas grande prioridad</h4>
          <h4>asientos disponibles en el jardín trasero climatizado</h4>
          <button>DESCUBRE MAS</button>
        </div>
        <img src={img.ejemplo1} alt="" />
        <div id="acerca">
          <img src={img.spaguethi} alt="" />
          <h1>Sobre nosotros</h1>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            dolorum consequuntur aliquid distinctio aliquam quaerat ipsa quam
            facilis quidem, laboriosam quod ipsum est hic voluptatem illum
            rerum, explicabo mollitia asperiores.
          </p>
          <p>
            Manejamos gran variedad de pastas pero nuestras especialidades son:
          </p>
        </div>
        <img src={img.ejemplo2} alt="" />

        <div id="menu">
          <img src={img.plato1} alt="" />
          <h1>Visita nuestro grandioso Menú</h1>
          <h3>Tenemmos grandes sorpresas preparadas para ti</h3>
          <button>Ir al menu</button>
        </div>
        <div>
          <h1>Datos curiosos</h1>
          <h3>Manejamos gran variedad de pastas y platillos</h3>
          <h2>¿SABIAS QUE?</h2>
          <img src={img.fetuchinni} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            nihil dignissimos, rem commodi molestias qui neque, corrupti enim
            doloremque aliquid.
          </p>
          <img src={img.tubos} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            nihil dignissimos, rem commodi molestias qui neque, corrupti enim
            doloremque aliquid.
          </p>
          <img src={img.mac} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            nihil dignissimos, rem commodi molestias qui neque, corrupti enim
            doloremque aliquid.
          </p>
        </div>
        <img src={img.ejemplo3} alt="" />
        <div id="contacto">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
