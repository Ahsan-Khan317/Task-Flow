import Link from './link.jsx'

function Nav(){
return(
    <div className='flex items-center  p-4   not-sm:w-[90vw]   not-sm:p-2  bg-white/30 backdrop:blur-2xl justify-evenly w-[30vw] mx-auto h-auto rounded-full shadow-2xl shadow-gray-400 '>
        <Link name="Home"/>
        <Link name="About"/>
        <Link name="Habit Guide"/>
        <Link name="Help"/>
    </div>
)
}

export default Nav;