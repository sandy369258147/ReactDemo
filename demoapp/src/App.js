
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [swchBtn,swchBtnSet]=useState('light');
  const [msgAlert,msgSet]=useState(null);
 
  const showAlert=(msg,typ)=>{

    msgSet({
      message:msg,
      type:typ
    });
  }
  
    
 
  
    const switchBtn=()=>{
     debugger;
      if(swchBtn ==='light')
      {
        console.log("Dark mode enabled");
        swchBtnSet('dark');
        document.body.style.backgroundColor='#042743';
        document.body.style.color='white';
        showAlert("Dark Mode Enabled!","success");
         // msgSet("Dark Mode Enabled!");
        //  msgSet("Dark Mode Enabled!","success");
      }
      else{
        console.log("light mode enabled");
        swchBtnSet('light');
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
        showAlert("light Mode Enabled!","success");
       // msgSet("light Mode Enabled!");
       // msgSet("light Mode Enabled!","success");
      }
    }
  return (
    <>
    
    <Router>
     <Navbar mode={swchBtn} toogleMode ={switchBtn}/>
      <div className="container my-2">
        <Alert alert={msgAlert} type="success"></Alert>
      </div>
      
       <div className="container">
       
       <Routes>
            <Route path="/" element={<Textform mode={swchBtn} toogleMode={switchBtn} heading="Enter the Text Util" />} />
            <Route path="/about" element={<About />} />
      </Routes>
      
    
        </div>
    </Router>
    </>
  );
}

export default App;
