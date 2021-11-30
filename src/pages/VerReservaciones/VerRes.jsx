import React from "react";
import { useState, useEffect } from "react";

const VerReservacion = () =>{

     const   [notes, setNotes] = useState([{
        nombre: '',
        correo:'',
        lugar: '',
        fecha:'',
        personas: '',
        dias:'',
     }])

     useEffect(()=>{
         fetch("/notes").then(res => {
             if (res.ok) {
                 return res.json()
             }
         }).then(jsonRes => setNotes(jsonRes))
     })


    return(
        
        <React.Fragment>
            <div className="container">
          
             

        <form>

        <fieldset>
        <legend className="text-center card-header fw-bolder"><h1>Ver reservaciones realizadas</h1></legend>
        <div class="form-floating mb-3">
  <input type="input" class="form-control" id="floatingInput" placeholder="name"/>
  <label for="floatingInput">Nombre de la persona que hizo la reserva</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Correo con el que hizo la reserva</label>
</div>
<div className="container">
    <button type="submit" className="btn btn-primary"  >Ver reserva</button>
    </div>
   

</fieldset>
</form> 
</div>
 

{notes.map(note => 
<div>
    <h4> {VerReservacion.nombre} </h4>
      <h4>{VerReservacion.lugar}</h4>
      <h4>{VerReservacion.fecha}</h4>
      <h4>{VerReservacion.personas}</h4>
      
</div>)
    } 
{/* </div>
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
      
    </tr> */}
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
    </tr> */
    }
   

     



        


</React.Fragment>
        
       
      
    )
    
}
export default VerReservacion;