import React from "react";
import "codemirror/lib/codemirror.css";

import "codemirror/theme/dracula.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import { Controlled } from "react-codemirror2";
import "./editor.css";

function Editor({ language, value, onChange }) {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="actual-editor">
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          mode: language,
          lint: true,
          theme: "dracula",
          lineNumbers: true,
          matchBrackets: true,
        }}
      />
    </div>
  );
}

export default Editor;
