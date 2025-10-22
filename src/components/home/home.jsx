import Nav from './nav/nav.jsx'
import Hero from './hero/hero.jsx'
import '../../index.css'
function Home(){
    return(
        
        <div className=" h-screen  w-full bg  pt-10 m-auto gap-20  flex flex-col not-sm:gap-24">

<Nav />
<Hero />

        </div>
      

    )
}
export default Home;