import { useEffect, useState } from 'react'
import { About,Footer,Header,Skills,Work } from './containers'
import Resume from './components/Resume/Resume'
import { FaLaptopCode } from "react-icons/fa6";


function App() {
 

  return (
    <div className="app">

      <Resume/>



      <Header/>
      <About></About>
      <Work></Work>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
