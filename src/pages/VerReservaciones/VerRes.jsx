import React from "react";

const VerReservacion = () =>{
    return(
        
        <React.Fragment>
            <div className="container">
          
             

        <form>

        <fieldset>
        <legend className="text-center card-header fw-bolder"><h1>Ver reservaciones realizadas</h1></legend>
            <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name"/>
  <label for="floatingInput">Nombre de quien hizo la reserva</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Correo con el que hizo la reserva</label>
</div>
<div className="container">
    <button type="submit" className="btn btn-primary" >Ver reserva</button>

</div>
<div className="container p-4">
<table class="table table-dark table-hover">
<thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Lugar de Reserva</th>
      <th scope="col">Fecha reservada</th>
      <th scope="col">Personas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">nombre 1</th>
      <td>Lugar</td>
      <td>Fecha</td>
      <td>personas</td>
      
    </tr>
    {/* <tr>
      <th scope="row"> nombre 1 </th>
      <td>lugar 2</td>
      <td>fecha</td>
      <td>personas</td>
    </tr>
    <tr>
      <th scope="row">nombre 1</th>
      <td >lugar</td>
      <td></td>
      <td></td>
    </tr> */}
   
  </tbody>
</table>
</div>

</fieldset>
</form>       
 </div>


        


        </React.Fragment>
        
       
      
    )
    
}
export default VerReservacion;