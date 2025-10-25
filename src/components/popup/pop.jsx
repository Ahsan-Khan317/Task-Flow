import Btn from "../task/add/btn"

function Popup({depopup,edit,eref,idx}){
return(
    <div onClick={depopup} className="fixed inset-0 bg-white/30  backdrop-blur-md z-50 flex gap-10  justify-center items-center">

        <div onClick={(e)=>{e.stopPropagation()}} className="w-[40vw] not-sm:w-[90vw] rounded-2xl   bg p-2 flex flex-col justify-around items-center h-[200px]">

<input type="text" placeholder="Edit your Task Here..." ref={eref} className="w-full text-2xl text-center outline-none"/>
<div className="flex justify-between items-center  w-[full] gap-19 ">
    <Btn name="Edit" add={()=>{edit(idx)}} /> 

<Btn name="Cancel" add={depopup}  />
</div>


    </div></div>
)

}
export default Popup