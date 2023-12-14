import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import "../App.css";

const Editor = ({ setValue, config }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      onChange={(content) => setValue(content)}
      config={config}
      style={{ flex: 1 }}
    />
  );
};

export default Editor;
