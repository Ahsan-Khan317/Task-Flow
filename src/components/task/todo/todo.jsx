
import Addtask from "./addtask/addtask"

function Todo({work,deletes,edit,toggle}){
  

    return(
            <div className=" backdrop-blur-sm w-[50vw] shadow-2xl h-auto not-sm:h-[60vh] max-h-[80vh] overflow-y-auto  shadow-gray-400  rounded-3xl flex flex-col gap-1  items-start justify-items-start  not-sm:w-full  m-auto  py-4  overflow-x-hidden" >

         



{work.map((e,idx)=>(
    
        <Addtask taskoo={e.text} toggle={toggle} key={idx} idx={idx} deletes ={deletes}  edit ={edit}   done={e.done}  />
    
))}
        </div>
    )
}
export default Todo