import { useRef, useState } from 'react';
import Btn from './btn.jsx'

function Add({work,setwork}){

    const inref = useRef(null)
    
    const add=()=>{
        const input = inref.current.value;
        if(input !== null && input.trim() !==""){
            setwork([...work,input]);
        }
       inref.current.value ="";

    }

 


    return( 
        <div className="bg-white/90 backdrop-blur-sm w-[46vw] shadow-2xl shadow-gray-400  rounded-3xl flex justify-between items-center  not-sm:w-[96vw]  m-auto  py-4  px-6">


<input type="text"placeholder="Add a new Task..." ref={inref} className="w-[76%] text-2xl outline-none" />
<Btn name="+" add={add} />

        </div>
    )
}
export default Add;