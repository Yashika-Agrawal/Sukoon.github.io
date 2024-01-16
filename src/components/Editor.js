import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import "../App.css";

const Editor = ({ content, setContent , config }) => {
  
  const editor = useRef(null);
  console.log("onchange",content)
  return (

    
    <JoditEditor 
    
      value ={content}
      ref={editor}
      onChange={newContent=>{
        console.log("cont",content)
        // content=e.target.value
        setContent(newContent)
        
      }}
      config={config}
      style={{ flex: 1 }}
    />
  );
};

export default Editor;
