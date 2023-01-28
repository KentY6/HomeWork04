import React, { useState } from "react";

export const EntryForm = ({ addTodos }) => {
  const [inputText, setInputText] = useState("");

  const getText = (e) => {
    // e.preventDefault()で再レンダリングを回避
    e.preventDefault();
    // // テキストボックスが空白なら処理は終了
    if (inputText === "") return;
    addTodos(inputText);
    setInputText("");
  };

  return (
    <div className="input">
      {/* onSubmitでEnterキーでも使えるようにする */}
      <form className="entry-form" onSubmit={getText}>
        <input
          className="text-box"
          type="text"
          value={inputText}
          placeholder="テキストを入力"
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="add-button" onClick={getText}>
          <i className="fa-solid fa-circle-plus"></i>
        </div>
      </form>
    </div>
  );
};
