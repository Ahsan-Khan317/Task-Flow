function Addtask({taskoo,done,deletes,idx,toggle ,popup}){
    return(
            <div key={idx} className="bg-white/90 backdrop-blur-sm w-[46vw] shadow-2xl shadow-gray-400  rounded-3xl flex flex-col justify-between items-center  not-sm:w-[98vw]  m-auto  py-4  px-1" >
<div className="flex justify-around not-sm:gap-3  gap-10 items-center">
    
    <input type="checkbox" className="size-5 cursor-pointer" checked={done} onChange={()=>toggle(idx)} />

<h1 className={`sm:text-2xl not-sm:w-[50vw] w-[25vw] text-2xl overflow-x-auto ${(done)?"line-through text-gray-500":"text-black"}`}>{taskoo}</h1>
<button className=" hover:shadow-3xl  font-bold not-sm:text-xl text-3xl 
     active:scale-90 transition-transform duration-200 ease-in-out
     text-center
     shadow-gray-800 shadow-2xl cursor-pointer " onClick={()=>{popup(idx)}} ><i className="ri-pencil-ai-2-fill"></i></button>
<button  className=" hover:shadow-3xl font-bold
     active:scale-90 transition-transform duration-200 ease-in-out text-3xl
     text-center
     shadow-gray-800 shadow-2xl cursor-pointer " 
     onClick={()=>{deletes(idx)}}
     ><i className="ri-delete-bin-2-fill"></i></button></div>


     
        </div>
      
    )
}
export default Addtask