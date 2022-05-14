import React from "react";
import Card from "./Card"
import Doctors from"./Data";
 const Menu =()=>{
     return(
         <>
        <h1 className="text-center text-info my-3"> DOCTOR LIST </h1>
        <div className="container ">
            <div className="row">
               {Doctors.map((values,index)=>{
                   return(
                       <>
                       <Card  key={index} titile={values.title} image={values.image} Name={values.Name} price={values.price}/>
                       </>
                   )
               })}
</div>
</div>
</>
         
     )
 }
  export default Menu;