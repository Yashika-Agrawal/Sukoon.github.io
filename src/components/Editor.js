import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import "../App.css";

const Editor = ({ onChange, config }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      onChange={onChange}
      config={config}
      style={{ flex: 1 }}
    />
  );
};

export default Editor;
