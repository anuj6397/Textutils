import Navbar from './components/Navbar';
 import './App.css';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
    const[mode,setMode]=useState('light')

    const[alert,setAlert]= useState(null)


    const showAlert = (message,type)=>{
      setAlert({
        message:message,
        type:type,
      })
      setTimeout(() => {
        setAlert(null)
           
      },2000);
    }

   const togglemode = ()=>{ 
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background= 'linear-gradient(135deg,rgb(211, 162, 162),#31e8cd)'
      showAlert(": Dark mode has been enable"," Success ");
     // document.title = 'Textutil-Lightgreen Mode'
     }else{
      setMode('light')
      document.body.style.background ='white'
      showAlert(": Light mode has been enable","   Success ");
     // document.title = 'Textutil- Light Mode'
     }

   }
  
  return (
    <>
    <Router>
        <Navbar title="MagicText" mode={mode}  togglemode={togglemode}/> {/* value pass krta hain*/}

        <Alert alert={alert}/>
    
  
        <div className='container my-5'>
    
          <Routes >
             <Route path="/about" element={<About/>}></Route>
             <Route path="/" element={<TextForm showAlert={showAlert} tit ="TEXT TRANSFORMER"/>}></Route>

             </Routes> 
       </div>
    </Router>    
   

  </>
  );
}

export default App;
