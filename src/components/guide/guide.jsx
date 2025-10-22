
import Navs  from "../about/navs/navs.jsx";
import Text from '../home/hero/text.jsx'
import Footer  from "../about/footer/footer.jsx";
import Card from './card.jsx'
import { useState } from "react";
function Guide(){
    const data = [{
        text:"✓",
        title:"Set Small, Achievable Goals",
        para:"Start with tasks that are easy to complete. The momentum from small wins makes it easier to tackle bigger challenges. TaskFlow lets you break down large projects into simple steps."
    },
    
    {text:"📈",
        title:"Track Your Progress Visibly",
        para:"Checking off tasks provides a visual confirmation of your hard work. This simple action reinforces your habits and motivates you to keep going. Watch your list shrink as your productivity grows."},
        
        {text:"🔄",
        title:"Replace Bad Habits, Don't Just Remove",
        para:"Instead of trying to stop a bad habit, replace it with a good one. When you feel the urge to procrastinate, open TaskFlow and complete one small task instead. This rewires your brain for productivity."}]
    return(

         <div className=" h-auto  bg  w-full    m-auto gap-20   flex flex-col not-sm:gap-24">

<Navs />
 <div className="w-full text-center ">
<Text title="Build Good Habits, Break Bad Ones" para="Learn how TaskFlow helps you stay productive and consistent." />
        </div>

<Card data = {data} />

<Footer />
        </div>
    )
}
export default Guide;
//