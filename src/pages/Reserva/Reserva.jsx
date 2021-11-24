import React from "react";

const ReservaViaje = () =>{
    return (
        <React.Fragment>
            <div className="container">
<form>
  <fieldset>
    <legend className="text-center card-header fw-bolder"><h1>Por favor ingrese la información solicitada</h1></legend>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Nombre de la persona que realiza la reservación:  </label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Nombre completo"/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Correo electrónico:  </label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Correo"/>
    </div>
    <div class="mb-3">
      <label for="disabledSelect" class="form-label">Escoge un lugar para tu aventura: </label>
      <select id="disabledSelect" class="form-select">
      <option> </option>
        <option>Lugar 1</option>
        <option>Lugar 2 </option>
        <option>Lugar 3</option>
        <option>Lugar 4</option>
        <option>Lugar 5</option>
        <option>Lugar 6</option>
        <option>Lugar 7</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Fecha de reservacion:  </label>
      <input type="date" id="disabledTextInput" class="form-control" placeholder="Fecha"/>
    </div>
    <div class="mb-3">
      <label for="disabledTextInput" class="form-label">Dias de reservarcion:  </label>
      <input type="number" id="disabledTextInput" class="form-control" placeholder="Número de dias"/>
    </div>
   
    
    {/* <div class="mb-3">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" />
        <label class="form-check-label" for="disabledFieldsetCheck">
          
        </label>
      </div>
    </div> */}
    <button type="submit" class="btn btn-primary">Ingresar informacion</button>
  </fieldset>
</form>
</div>


        </React.Fragment>

    
    )
}
export default ReservaViaje;