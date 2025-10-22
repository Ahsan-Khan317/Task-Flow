function Button({name}){
return(
<>
     <button className="bbg py-2 px-4 text-xl rounded-full  hover:shadow-3xl text-white font-bold
     active:scale-90 transition-transform duration-200 ease-in-out
     shadow-gray-800 shadow-2xl cursor-pointer
      w-[20vw] not-sm:w-[50vw]">{name}</button>
</>

)
}
export default Button