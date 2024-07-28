import { About,Footer,Header,Skills,Work } from './containers'
import Resume from './components/Resume/Resume'
import { FaLaptopCode } from "react-icons/fa6";
import Navbar from './components/Navbar/Navbar';
import './App.scss'

function App() {


  return (
    <div className="app">
      
      <Navbar/>
      {/* <Resume/> */}
      



      <Header/>
      <About></About>
      <Work></Work>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
