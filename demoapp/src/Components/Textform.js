import React from "react";

export default function Textform(props) {
    const [text, setText] = React.useState("");
    const onBtnLowClick =()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const onBtnUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onTextChange = (event) => {
        console.log("Text Change");
        setText(event.target.value)
    }
    const clearText =()=>{
        setText('')
    }
    const getEmail =()=>{
        
        let emails='';
        text.split(" ").filter((element) => {
            if (element.includes('@')) {
                emails += element + ' ';
            }
            return element.includes('@');
        })
        setText(emails);
        console.log(emails);
        
    }
    const removeExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-5">

                <textarea className="form-control" value={text} onChange={onTextChange} id="floatingTextarea2" ></textarea>
            </div>


       
            <button type="button" className="btn btn-primary my-3 mx-2" onClick={onBtnUpClick}>Upper</button>
            <button  type="button" className="btn btn-primary mx-2 " onClick={onBtnLowClick}>lower</button>
            <button  type="button" className="btn btn-primary mx-2 " onClick={clearText}>clear</button>
            <button  type="button" className="btn btn-primary mx-2  " onClick={getEmail}>Email</button>
            <button  type="button" className="btn btn-primary " onClick={removeExtraSpaces}>Remove spaces</button>
            
            <div className="container my-3">
                
                <h2>Your text summary</h2>
                <p>text words {text.split(" ").length} and text length is {text.length}</p>
                <p>time taken to read thi text {0.08*text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text}</p>
               
            </div>

        </div>
    );
}
