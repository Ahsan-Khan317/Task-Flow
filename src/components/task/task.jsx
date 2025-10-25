import Bar from './bar/bar.jsx'
import Add from './add/add.jsx'
import Todo from './todo/todo.jsx'
import { useEffect, useRef, useState } from 'react'
import Popup  from '../popup/pop.jsx'
function Task(){
    const [work,setwork] =useState(()=>{
        const data = JSON.parse(localStorage.getItem("key"));
  return (data)?data:[];}
    );

    const [query,setquery]=useState("");
    const qry = useRef();

  const toggle=(idx)=>{
    const update = work.map((e,i)=>{
    return (i==idx)?{...e,done:!e.done}:e
    })
    setwork(update)
  }
   


       const deletes =(idx)=>{
        const  update =  work.filter((_,i)=>  i !==idx )
        setwork(update);
        alert("Click ok for Delete your task....");
    }
    const eref = useRef(null);
const [modify,setmodify]=useState(false);
const [idxs,setidx]=useState()
     const popup =(idx)=>{
setmodify(true);
setidx(idx);
     }
const depopup =()=>{
setmodify(false);
     }

    const edit =(idx)=>{
      const z = eref.current.value;
      if(z !== null && z.trim() !== ""){
const edits = z;
        const update = [...work];
        update[idx]={...update[idx],text:edits};
        setwork(update); 
         depopup();
      }
  
    }
    useEffect(()=>{
 localStorage.setItem("key",JSON.stringify(work));

    },[work])
     
    return (
    
             <div className=" h-full bg  w-full not-sm:gap-1 not-sm:pb-16   flex flex-col justify-between items-center  pb-5 overflow-y-hidden">
    {modify && <Popup depopup ={depopup} edit={edit} eref={eref} idx={idxs} /> }
<Bar />
<div className='w-[90vw] sm:w-[45vw] rounded-2xl bg-white/60  text-center  text-gray-400
 m-auto mt-4 mb-4 '>
    <input 
    type="text"
     className='w-full text-2xl text-centers text-black p-2 rounded-2xl shadow-2xl shadow-gray-700'
      placeholder='Search your tasks...'
      ref={qry}
      onChange={(e)=>{
        setquery(e.target.value)}} 
      
      />
        </div>
<Add work={work} setwork ={setwork} />
<Todo work={work.filter((e)=>(e.text.toLowerCase().includes(query.toLowerCase()) ))} deletes = {deletes}  toggle={toggle} popup ={popup} depopup={depopup}  />
  <div className='w-full text-center text-2xl text-gray-400'>
    <h1>You have {work.filter((e)=>!e.done ).length} tasks left.</h1></div>
        </div>
    )
}

export default Task