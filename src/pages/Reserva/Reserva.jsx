import React from "react";



const ReservaViaje = () =>{
    return (
        <React.Fragment>
            <div className="container">
<form>
  <fieldset>
  
    <legend className="text-center card-header fw-bolder"><h1>Por favor ingrese la información solicitada</h1></legend>
    {/* <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Nombre de la persona que realiza la reservación:  </label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Nombre completo"/>
    </div> */}
    <div class="form-floating mb-3">
  <input type="name" class="form-control" id="floatingInput" placeholder="name"/>
  <label for="floatingInput">Nombre de la persona que realiza la reservación:</label>
</div>
<div class="form-floating">
  <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com"/>
  <label for="floatingInput">Correo electrónico:</label>
</div>
    {/* <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Correo electrónico:  </label>
      <input type="text" id="disabledTextInput" className="form-control" placeholder="Correo"/>
    </div> */}

    <div className="mb-3" >
      <label for="disabledSelect" className="form-label">Escoge un lugar para tu aventura: </label>
      <select id="disabledSelect" className="form-select">
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
      <input type="date" id="disabledTextInput" className="form-control" placeholder="Fecha"/>
    </div>
    <div className="mb-3">
      <label for="disabledTextInput" className="form-label">Dias de reservación:  </label>
      <input type="number" id="disabledTextInput" className="form-control" placeholder="Número de dias"/>
    </div>
  
    
    {/* <div className="mb-3">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
        <label className="form-check-label" for="disabledFieldsetCheck">
          
        </label>
      </div>
    </div> */}
    
 <button type="submit" className="btn btn-primary" >Enviar Reserva</button> 

 



  </fieldset>
</form>
</div>


        </React.Fragment>

    
    )
}
export default ReservaViaje;