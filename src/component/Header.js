import React from "react"
import '../index.css'

export default function Header() {
    return (
        <header className="header--style ">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
               <span className="text--sytle ">REACT CRUD APP</span>
           </div>          
           <div>
               <button className="button--style">
                   Home
               </button>
           </div>
          
        </header>
    )
}