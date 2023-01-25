import React, { useState } from "react";

export const EntryForm = ({ inputList, setInputList }) => {
  const [inputText, setInputText] = useState("");
  //   useRefの宣言

  //   入力フォームへ打った文字を取得する
  //   const refValue = setInputText(textRef.current.value);

  //  submitした際にtextをlistに追加する
  const addList = (e) => {
    // e.preventDefault()で再レンダリングを回避
    e.preventDefault();

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
      <form className="entry-form">
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
