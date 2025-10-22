function Text({title,para}){
    return(
        <div className="flex flex-col justify-center gap-8 items-center ">
             <h1 className="text-black font-bold text-7xl not-sm:text-4xl ">{title}</h1>
        <h2 className="text-gray-400  text-xl">{para}</h2>
        </div>
        
        
    )
}
export default Text