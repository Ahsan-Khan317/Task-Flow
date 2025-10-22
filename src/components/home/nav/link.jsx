import { useState } from "react"

function Link({name}){
 
    return(
    

        <div className="hover:text-blue-400 hover:border-b-2 hover:border-blue-400
        active:text-blue-400 active:border-b-2 active:border-blue-400
        transition-colors duration-200 ease-in-out
        cursor-pointer text-xl not-sm:text-[18px] font-semibold text-red-950">{name}</div>
               
   )
}
export default Link