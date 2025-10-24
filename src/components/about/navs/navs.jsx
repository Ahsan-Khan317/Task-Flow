import { Link } from "react-router-dom";

function Navs(){
    return(


<div  className='flex items-center  p-5      not-sm:p-4 w-full bg-white/40 backdrop:blur-2xl justify-center gap-5  mx-auto h-auto  shadow-2xl shadow-gray-400 '>

<Link
        to="/"
        className=" hover:border-blue-700 hover:text-blue-700 hover:border-b-2 active:border-blue-700 *:
        active:text-blue-700 active:border-b-2 text-2xl  not-sm:text-[21px]
        " 
      >
        Home
      </Link>

      <Link
        to="/about"
        className="hover:border-blue-700 hover:text-blue-700 hover:border-b-2
        active:border-blue-700 *:
        active:text-blue-700 active:border-b-2 text-2xl  not-sm:text-[21px]
        "
      >
        About
      </Link>

      <Link
        to="/guide"
        className="hover:border-blue-700 hover:text-blue-700 hover:border-b-2
        active:border-blue-700 *:
        active:text-blue-700 active:border-b-2 text-2xl   not-sm:text-[21px]
        "
      >
        Habit Guide
      </Link>

      <Link
        to="/help"
        className="hover:border-blue-700 hover:text-blue-700 hover:border-b-2
        active:border-blue-700 *:
        active:text-blue-700 active:border-b-2 text-2xl not-sm:text-[21px]
        "
      >
        Help
      </Link>
</div>










    )
}
export default Navs; 
      
     