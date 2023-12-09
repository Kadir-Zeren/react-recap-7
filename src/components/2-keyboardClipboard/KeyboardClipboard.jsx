import { useState } from "react";

const KeyboardClipboard = () => {
  const [content, setContent] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
      alert("please dont enter a number");
      e.preventDefault();
    }
  };

  const handlePaste = (e) => {
    console.log(e.target);
    e.target.className = "form-control border border-danger border-4";
    e.target.style.fontSize = "20px";
  };

  const handleCopy = (e) => {
    alert("coping illegal");
    e.preventDefault();
  };

  const handleCut = (e) => {
    alert("cut illegal");
    e.preventDefault();
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
        <p onCopy={handleCopy} onCut={handleCut}>
          {content.toLocaleLowerCase()}
        </p>
      </div>

      <textarea
        className="form-control"
        name=""
        id=""
        cols="30"
        rows="10"
        onPaste={handlePaste}
      ></textarea>
    </div>
  );
};

export default KeyboardClipboard;
