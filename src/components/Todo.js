import React from "react";

export const Todo = ({ todos, todoDelete }) => {
  // todoの削除

  return (
    <div className="todo-list">
      {/* map関数でListから一つ一つのTodoに分解 */}
      {todos.map((todo, index) => (
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
