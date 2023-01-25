import React from "react";

export const Todo = ({ inputList, setInputList }) => {
  // todoの削除
  const todoDelete = (id) => {
    // 自身のidと一致した場合list配列から取り除く
    setInputList(inputList.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list">
      {/* map関数でListから一つ一つのTodoに分解 */}
      {inputList.map((todo, index) => (
        <div className="todo" key={index}>
          <div className="todo-text">{todo.text}</div>
          {/* 分解したtodoのidをtodoDeleteの引数に入れる */}
          <div className="delete" onClick={() => todoDelete(todo.id)}>
            <i className="fa-regular fa-trash-can"></i>
          </div>
        </div>
      ))}
    </div>
  );
};
