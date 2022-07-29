import React from "react";
import CreateUser from "./Create";
export default function Nav(){
   return (
    
                 <div className="d-flex bd-highlight" >
                <span className=" p-2 flex-grow-1 bd-highlightt Nav--style " >    Users List
</span>
            
                <div className= " p-2 bd-highlight" >
<CreateUser/>         
</div>      
 </div>

                


   )
}