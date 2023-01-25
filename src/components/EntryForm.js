import React, { useState } from "react";

export const EntryForm = ({ inputList, setInputList }) => {
  const [inputText, setInputText] = useState("");

  // inputTextをinputListに追加する
  const addList = (e) => {
    // e.preventDefault()で再レンダリングを回避
    e.preventDefault();

    // テキストボックスが空白なら処理は終了
    if (inputText === "") return;

    // スプレッド構文でaddListを呼ぶたびにオブジェクト配列を追加
    setInputList([
      ...inputList,
      {
        text: inputText,
        id: inputList.length,
      },
    ]);

    // 入力が終わった後はテキストフォームを空にする
    setInputText("");
  };

  console.log(inputText);
  return (
    <div className="input">
      {/* onSubmitでEnterキーでも使えるようにする */}
      <form className="entry-form" onSubmit={addList}>
        <input
          className="text-box"
          type="text"
          value={inputText}
          placeholder="テキストを入力"
          onChange={(e) => setInputText(e.target.value)}
        />
        <div className="add-button" onClick={addList}>
          <i className="fa-solid fa-circle-plus"></i>
        </div>
      </form>
    </div>
  );
};
