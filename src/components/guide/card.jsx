
import Text from '../home/hero/text.jsx'
function Card ({data}){
    return(<>
{
    data.map((val,idx)=>{
        return(
        <div key={idx} className=" flex justify-around items-center gap-10 not-sm:flex-col text-center pl-2 not-sm:pl-0 w-[90vw] m-auto shadow-2xl shadow-gray-500 h-auto py-3 bg-white/90 rounded-4xl">
    <div className='text-9xl not-sm:text-6xl text-blue-500 '>{val.text}</div>
    <div> <Text title={val.title} para={val.para} /></div>
</div>  
        )
    })
}
</>
    )
}

export default Card