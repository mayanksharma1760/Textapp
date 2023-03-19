import React, { useState } from 'react';

export default function Textform(props) {
 
  const  handleupclick = ()=>{
    let newtext=text.toUpperCase();
    setText(newtext);
   props.aalert(' : converted to uppercase','success')

  }  
  const  handleloclick = ()=>{
    let newtext=text.toLowerCase();
    setText(newtext);
    props.aalert('  : converted to lowerrcase','success')

  }  
  const handlecopy = ()=>{
    navigator.clipboard.writeText(valueOf , text)
    props.aalert('  : Text copied','success')

  }  
 
//   const handleOnChange = (e) => {
//     setText(e.target.value);
// }
  // const [text, setText] = useState('Enter text here using state'); 
  const [text, setText] = useState('');
  return (
    <>
    <div style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3 ">
        <textarea className='form-control' style={{backgroundColor:props.mode==='light'?'white':'grey'}} rows='8' onChange={e => setText(e.target.value)}></textarea>
        </div>
<button className="btn btn-primary mx-1 " disabled={text.length===0} onClick={handleupclick}>convert to uppercase</button>
<button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handleloclick}>convert to lowercase</button>
<button className="btn btn-primary mx-1" disabled={text.length===0} onClick={handlecopy}>copy text</button>
    </div>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something int the textbox to preview here "}</p>
    </div>
    </>
  )
  }
