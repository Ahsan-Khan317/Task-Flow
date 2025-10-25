function Btn({name,add}){
return(
<>
     <button onClick={add} className="bbg py-2 px-3 not-sm:text-2xl text-4xl rounded-full  hover:shadow-3xl text-white font-bold
     active:scale-90 transition-transform duration-200 ease-in-out
     text-center
     shadow-gray-800 shadow-2xl cursor-pointer 
      w-[10vw] not-sm:w-auto">{name}</button>
</>

)
}
export default Btn