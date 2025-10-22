
import Addtask from "./addtask/addtask"

function Todo({work,deletes,edit}){
  

    return(
            <div className=" backdrop-blur-sm w-[50vw] shadow-2xl h-auto max-h-[80vh] overflow-y-auto  shadow-gray-400  rounded-3xl flex flex-col gap-2  items-center  not-sm:w-full  m-auto  py-4  overflow-x-hidden" >

         



{work.map((e,idx)=>(
    
        <Addtask taskoo={e} key={idx} idx={idx} deletes ={deletes} edit ={edit}  />
    
))}
        </div>
    )
}
export default Todo