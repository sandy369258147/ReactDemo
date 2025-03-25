
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';

function App() {
  const [swchBtn,swchBtnSet]=useState('light');
    
    const switchBtn=()=>{
     
      if(swchBtn ==='light')
      {
        console.log("Dark mode enabled");
        swchBtnSet('dark');
        document.body.style.backgroundColor='#042743';
        document.body.style.color='white';
      }
      else{
        console.log("light mode enabled");
        swchBtnSet('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
      }
    }
  return (
    <>
    
    <Navbar mode={swchBtn} toogleMode ={switchBtn}/>
       <div className="container">
       <Textform mode={swchBtn} toogleMode ={switchBtn} heading='Enter the Text Util'/>
       {/* <About></About> */}
    
        </div>
    
    </>
  );
}

export default App;
