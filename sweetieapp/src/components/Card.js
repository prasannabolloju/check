import React from "react";
import Doctors from"./Data";
 const Card=({title,image,Name,price})=>{
     return(
<>
        
           <h1 className="text-center text-info my-3"> DOCTOR LIST </h1>
           <div className="container ">
               <div className="row">
                   <div className="col-xs-12.col-sm-6.col-md-4.my-4">
                   <div class="card">
  <img src={image}class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <h5 class="card-title">{Name}</h5> 
    <h5 class="card-title">{price}</h5>
    
    <a href="#" class="btn btn-primary">Book Appointment</a>
  </div>
</div>
                   </div>

               </div>
        </div>
     </>
     );
     
 }
 export default Card;