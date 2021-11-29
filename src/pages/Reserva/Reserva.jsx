import axios from "axios";
import React from "react";
import { useState } from "react";

const ReservaViaje = () =>{
  const [input, setInput]= useState({
    nombre: '',
    correo:'',
    lugar: '',
    fecha:'',
    personas: '',
    dias:'',

  })
  function handleChange(event) {
    const {name, value} = event.target
    setInput(prevInput=> {
      return{
        ...prevInput,
        [name]: value
      }
    })
  }
  
  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    const newFormulario ={
      nombre: input.nombre,
      correo:input.correo,
      lugar: input.lugar,
      fecha:input.fecha,
      personas: input.personas,
      dias:input.dias,
    }

    axios.post("http://localhost:5000/api/formulario/", newFormulario)
  }

    return (
        <React.Fragment>
            <div className="container">
<form  >
  <fieldset>
  
    <legend className="text-center card-header fw-bolder"><h1>Por favor ingrese la información solicitada</h1></legend>
    {/* <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Nombre de la persona que realiza la reservación:  </label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Nombre completo"/>
    </div> */}
    <div class="form-floating mb-3">
  <input onChange={handleChange} name="nombre" value={input.nombre} type="name" class="form-control" id="floatingInput" placeholder="name" autocomplete="off"/>
  <label for="floatingInput">Nombre de la persona que realiza la reservación:</label>
</div>
<div class="form-floating">
  <input onChange={handleChange} name="correo" value={input.correo} type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" autocomplete="off"/>
  <label for="floatingInput">Correo electrónico:</label>
</div>
    {/* <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Correo electrónico:  </label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Correo"/>
    </div> */}

    <div className="mb-3" >
      <label for="disabledSelect" className="form-label">Escoge un lugar para tu aventura: </label>
      <select id="disabledSelect" onChange={handleChange} name="lugar" value={input.lugar} className="form-select">
      <option> </option>
        <option>Catedral de sal</option>
        <option>Laguna de Guatavita </option>
        <option>Salto del Tequendama</option>
        <option>Fundación Parque Jaime Duque</option>
        <option>Monumento Campesino</option>
        <option>Mina De Sal De Nemocón</option>
      </select>
    </div>
    <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Fecha de reservación:  </label>
      <input onChange={handleChange} name="fecha" value={input.fecha} type="date" id="disabledTextInput" className="form-control" placeholder="Fecha"/>
    </div>
    <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Numero de personas:  </label>
      <input onChange={handleChange} name="personas" value={input.personas} type="number" id="disabledTextInput" className="form-control" placeholder="Número de personas"/>
    </div>
    <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Numero de días de la reservación:  </label>
      <input onChange={handleChange} name="dias" value={input.dias} type="number" id="disabledTextInput" className="form-control" placeholder="Número de dias"/>
    </div>
  
    
    {/* <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
        <label className="form-check-label" for="disabledFieldsetCheck">
          
        </label>
      </div>
    </div> */}
    
 <button onClick={handleClick} type="submit" className="btn btn-primary" >Enviar Reserva</button>  




  </fieldset>
</form>
</div>


        </React.Fragment>

    
    )
}
export default ReservaViaje;