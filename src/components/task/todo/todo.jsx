
import Addtask from "./addtask/addtask.jsx"

function Todo({work,deletes,edit,toggle ,popup,}){
  

    return(
            <div className=" backdrop-blur-sm w-[50vw] shadow-2xl  not-sm:h-[60vh] max-h-[60vh] h-[40vh] overflow-y-auto  shadow-gray-400  rounded-3xl flex flex-col gap-1  not-sm:w-full    justify-start mx-auto overflow-x-hidden" >

         



{work.map((e,idx)=>(
    
        <Addtask taskoo={e.text} toggle={toggle} key={idx} idx={idx} deletes ={deletes}  edit ={edit}     done={e.done} popup={popup}  />
    
))}
        </div>
    )
}
export default Todo
