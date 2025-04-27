import React, {useState} from 'react'

export default function TextForm(props) {

    const handleupClick = () =>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () =>{
        //console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleReClick = () =>{
        //console.log("reverse" + text);
        let newText = text.split("").reverse().join("");
        setText(newText);
    }
    const handleClClick = () =>{
        //console.log("clear" + text);
        let newText='';
        setText(newText);
        props.showAlert(": clear!","Success ");
    }

    const handleCoClick = () =>{
        //console.log("I am copy" + text);
        let text = document.getElementById("myBox")
         text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(":copy!","Success ");
        
    }

    const handleOnChange =(event)=>{
      //  console.log("changed")
        setText(event.target.value)
       
    }
    


    const[text,setText] = useState('');


    //text="enter the pre text";
   // setText="enter the curr text";

  return (
<div className='container'>
    <h1>{props.tit}</h1>
     <div className="mb-3">
         <textarea className="form-control" id="exampleFormControlTextarea1"  value={text} onChange={handleOnChange}  Id="myBox" rows="8" placeholder='enter the text'></textarea>
         <button disabled={text.length===0} className="btn  btn-primary  btn-lg mt-2 mx-2" onClick={handleupClick}>click the uppercase</button>
         <button  disabled={text.length===0}  className="btn  btn-primary  btn-lg mt-2 mx-2 " onClick={handleLoClick}>click the lowercase</button>
         <button  disabled={text.length===0}  className="btn  btn-primary  btn-lg mt-2 mx-2 " onClick={handleClClick}>Clear text</button>
         <button   disabled={text.length===0} className="btn  btn-primary  btn-lg mt-2 mx-2 " onClick={handleReClick}>Reverse String</button>
         <button  disabled={text.length===0}  className="btn  btn-primary  btn-lg mt-2 mx-2 " onClick={handleCoClick}>handlecopy</button>
         
         <div className='summary-container'>
            <h2>Your text Summary </h2>
            <p>{text.split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Mintues read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview!"}</p>
         </div>
     </div>
      
</div>
  )
}
