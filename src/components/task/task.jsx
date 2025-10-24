import Bar from './bar/bar.jsx'
import Add from './add/add.jsx'
import Todo from './todo/todo.jsx'
import { useEffect, useState } from 'react'
function Task(){
    const [work,setwork] =useState(()=>{
        const data = JSON.parse(localStorage.getItem("key"));
  return (data)?data:[];}
    );

  const toggle=(idx)=>{
    const update = work.map((e,i)=>{
    return (i==idx)?{...e,done:!e.done}:e
    })
    setwork(update)
  }
   


       const deletes =(idx)=>{
        const  update =  work.filter((_,i)=>  i !==idx )
        setwork(update);
    }

    const edit =(idx)=>{
        const edits = prompt("Edit your task....");
        const update = [...work];
        update[idx]={...update[idx],text:edits};
        setwork(update)

    }
    useEffect(()=>{
 localStorage.setItem("key",JSON.stringify(work));

    },[work])
     let count =0;
    return (
    
             <div className=" h-full bg  w-full not-sm:gap-1 not-sm:pb-15    flex flex-col justify-between items-center  pb-5 overflow-y-hidden">
<Bar />
<Add work={work} setwork ={setwork} />
<Todo work={work} deletes = {deletes} edit = {edit} toggle={toggle}  />
  <div className='w-full text-center text-2xl text-gray-400'>
    <h1>You have {work.filter((e)=>!e.done ).length} tasks left.</h1></div>
        </div>
    )
}

export default Task