import Text from '../hero/text.jsx'
import Button from '../hero/button.jsx'

function Hero (){
    return (
        <div className='p-6 bg-white/30 not-sm:w-[96vw] w-[40vw] mx-auto flex flex-col text-center justify-ceneter items-center gap-14 not-sm:gap-15 rounded-xl shadow-gray-300 backdrop-blur-lg  shadow-2xl'>
<Text title="TaskFlow" para="Organize your day, effortlessly." />
<Button name = "Get Started" />

        </div>
    )
}
export default Hero