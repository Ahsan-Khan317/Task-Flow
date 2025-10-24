

import './App.css'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Guide from './components/guide/guide.jsx'
import Task from './components/task/task.jsx'
import Help from './components/help/help.jsx'
import './index.css'
import { Routes, Route } from 'react-router-dom'

function App() {



  return (
    <div className='h-screen w-full bg ' >

<Routes >
<Route path='/' element={<Home />} />
<Route path='/guide' element={<Guide />} />
<Route path='/about' element={<About />} />
<Route path='/task' element={<Task />} />
<Route path='/help' element={<Help />} />



</Routes>




    </div>
  )
}

export default App
