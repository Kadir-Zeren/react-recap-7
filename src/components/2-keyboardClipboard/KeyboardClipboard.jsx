import { useState } from "react";

const KeyboardClipboard = () => {
  const [content, setContent] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("please dont enter a number");
      e.preventDefault();
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Keyboard-Clipboard</h2>

      <input
        type="text"
        className="form-control"
        onChange={(e) => {
          setContent(e.target.value.toLocaleUpperCase());
        }}
        onKeyDown={handleKeyDown}
        value={content}
      />

      <div>
        <h3>Copied Content</h3>
        <p>{content.toLocaleLowerCase()}</p>
      </div>
    </div>
  );
};

export default KeyboardClipboard;
