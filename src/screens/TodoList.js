import React, { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { Todo } from "../components/Todo";

export const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const todoDelete = (id) => {
    // 自身のidと一致した場合list配列から取り除く
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // inputTextをinputListに追加する
  const addTodos = (text) => {
    // スプレッド構文でaddListを呼ぶたびにオブジェクト配列を追加
    setTodos([
      ...todos,
      {
        text: text,
        id: todos.length,
      },
    ]);
  };

  return (
    <div className="todo-list-layout">
      <EntryForm
        inputList={todos}
        setInputList={setTodos}
        addTodos={addTodos}
      />
      <Todo inputList={todos} todoDelete={todoDelete} />
    </div>
  );
};
