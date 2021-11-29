import React from "react";
import swal from "sweetalert";
const VerReservacion = () =>{
    return(
        
        <React.Fragment>
            <h1 className ="text-center"> Ver Reservaciones realizadas</h1>
        <form action="traer" method="get">
            <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="name"/>
  <label for="floatingInput">Nombre de quien hizo la reserva</label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="floatingInput">Correo con el que hizo la reserva</label>
</div>
</form>
            

            

        


        </React.Fragment>
        
       
      
    )
    
}
export default VerReservacion;