import React from "react"
import '../index.css'

export default function Header() {
   

    return (
        <header className="header--style ">
            <div className="d-flex bd-highlight">
                {/* //flex items-center flex-shrink-0 text-white mr-6"> */}
               <span className=" p-2 flex-grow-1 bd-highlightt"> REACT CRUD APP</span>
    
               {/* <button className="button--style  p-2 bd-highlight" >
               <SignOut/> 
               </button> */}
               </div>              
        </header>
    )
}
