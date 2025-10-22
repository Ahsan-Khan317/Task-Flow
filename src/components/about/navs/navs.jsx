import Link  from "../../home/nav/link.jsx";

function Navs(){
    return(
<div  className='flex items-center  p-5      not-sm:p-4 w-full bg-white/40 backdrop:blur-2xl justify-center gap-5  mx-auto h-auto  shadow-2xl shadow-gray-400 '>

  <Link name="Home"/>
        <Link name="About"/>
        <Link name="Habit Guide"/>
        <Link name="Help"/>
</div>
    )
}
export default Navs;