import React, { useState } from "react";

export const InputForm = ({ addTodos }) => {
  const [inputText, setInputText] = useState("");

  const getInputText = (e) => {
    // e.preventDefault()で再レンダリングを回避
    e.preventDefault();
    // // テキストボックスが空白なら処理は終了
    if (inputText === "") return;
    // TodoList.jsのaddTodosにinputTextを渡す
    addTodos(inputText);
    setInputText("");
  };

  return (
    <div className="input">
      {/* onSubmitでEnterキーでも使えるようにする */}
      <form className="input-form" onSubmit={getInputText}>
        <input
          className="text-box"
          type="text"
          value={inputText}
          placeholder="テキストを入力"
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="add-button" onClick={getInputText}>
          <i className="fa-solid fa-circle-plus"></i>
        </div>
      </form>
    </div>
  );
};
