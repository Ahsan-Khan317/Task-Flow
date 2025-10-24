import { useNavigate } from 'react-router-dom';
import 'remixicon/fonts/remixicon.css'; 
function Bar(){
    const navigate = useNavigate()
    return(
        <div className="bg-white/90 backdrop-blur-sm w-[46vw] shadow-2xl shadow-gray-400  rounded-3xl flex justify-between items-center  not-sm:w-[96vw]  m-auto  py-4  px-6" >
<h1 className='text-4xl font-bold'>My Task</h1>

           
<button onClick={()=>{navigate("/")}} className='text-4xl cursor-pointer active:scale-[0.8]  transition-transform duration-200 ease-in-out'><i class="ri-arrow-left-s-line "></i></button>
         


        </div>
    )
}
export default Bar