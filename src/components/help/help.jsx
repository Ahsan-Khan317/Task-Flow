import Navs from "../about/navs/navs.jsx";
import Text from "../home/hero/text.jsx";
import Footer from "../about/footer/footer.jsx";

function Help(){

    const  li = [{
        tit:"Step 1: Adding Tasks",
        body:"imply type your task into the input box at the top of the app page that says 'Add a new task...' and either press 'Enter' or click the plus (+) button. Your new task will instantly appear at the top of your list."
    },
    {
        tit:"Step 2: Editing Tasks",
        body:"To edit an existing task, click the pencil (✏️) icon on the right side of the task card. A popup will appear where you can change the text. Click 'Save Changes' to update it."
    },
    {
        tit:"Step 3: Deleting Tasks",
        body:"If you want to remove a task completely, click the trash can (🗑️) icon on the right side of the task card. The task will be permanently deleted from your list."
    },
    {
        tit:"Step 4: Tracking Habits",
        body:"Visit our 'Habit Guide' page from the main menu to learn valuable tips on how to build consistency and use TaskFlow to effectively set goals and monitor your progress towards a more productive life."
    },
]
    return(
    
    


         <div className=" h-auto  bg  w-full    m-auto gap-20   flex flex-col not-sm:gap-24">

<Navs />
 <div className="w-full text-center ">
<Text title="Need Help?" para="Step-by-step guidance to get the most out of TaskFlow." />
        </div>





{
    li.map((e,idx)=>(
        
<div key={idx} className=" flex justify-center items-start gap-4 flex-col text-center pl-2 not-sm:w-[90vw]  w-[50vw] m-auto shadow-2xl shadow-gray-500 h-auto p-3 bg-white/90 rounded-4xl wrap">
<h1 className="text-start text-2xl font-bold">{e.tit}</h1>
<h3 className="text-start text-gray-800">{e.body}</h3>

</div>
    ))
}


<div></div>



<Footer /></div>


   


    )
}
export default Help;