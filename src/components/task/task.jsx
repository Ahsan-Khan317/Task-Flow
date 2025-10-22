import Bar from './bar/bar.jsx'
import Add from './add/add.jsx'
import Todo from './todo/todo.jsx'
import { useEffect, useState } from 'react'
function Task(){
    const [work,setwork] =useState(()=>{
        const data = JSON.parse(localStorage.getItem("key"));
        return (data)?setwork(data):[];}

    );
       const deletes =(k)=>{
        const  update =  work.filter((e)=>  e!==k )
        setwork(update);
    }

    const edit =(idx)=>{
        const edits = prompt("Edit your task....");
        const update = [...work];
        update[idx]=edits;
        setwork(update)

    }
    useEffect(()=>{
 localStorage.setItem("key",JSON.stringify(work));

    },[work])
    
    return (
    
             <div className=" h-screen bg  w-full    m-auto gap-6   flex flex-col justify-around items-start not-sm:gap-8 pt-2">
<Bar />
<Add work={work} setwork ={setwork} />
<Todo work={work} deletes = {deletes} edit = {edit}  />
  <div className='w-full text-center text-2xl text-gray-400'><h1>You have 6 tasks left.</h1></div>
        </div>
    )
}

export default Task