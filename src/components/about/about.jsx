
import Navs  from "./navs/navs";
import Abcnt  from "./navs/abcnt/abcnt";
import Footer  from "./footer/footer.jsx";
function About(){
    return(

         <div className=" h-screen bg  w-full    m-auto gap-20   flex flex-col not-sm:gap-24">

<Navs />
<Abcnt />
<Footer />
        </div>
    )
}
export default About;