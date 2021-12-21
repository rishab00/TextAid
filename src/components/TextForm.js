import React, {useState} from "react";

export default function TextForm(props){
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", 'success');
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", 'success');
  }
  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", 'success');
  }
  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", 'success');
  }
  const handleOnChange = (event) =>{
    setText(event.target.value);
  }
  const[text, setText] = useState('Enter text here');
    return(
      <>
     <div className="container" style={{color: props.mode==='light'?'light':'dark'}}>
     <h1>{props.heading} </h1>
   <div className="mb-3">
     <label for="myBox" className="form-label"></label>
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'dark':'light'}} id="myBox" rows="10"></textarea>
   </div>
     <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
     <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
     <button className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
     <button className="btn btn-primary mx-2 my-1" onClick={removeExtraSpaces}>Remove Extra Space</button>
     </div>
     <div className="container my-2">
     <h2>Your Text Summary</h2>
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
     <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Average minutes to read.</p>
     </div>
     </>
    );
}