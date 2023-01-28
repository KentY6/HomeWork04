import React, { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { FooterArea } from "../components/FooterArea";
import { Todo } from "../components/Todo";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      text: "本を買う",
      id: 0,
    },
    {
      text: "本を読む",
      id: 1,
    },
    {
      text: "本を売る",
      id: 2,
    },
    {
      text: "魚を捌く",
      id: 3,
    },
    {
      text: "食べたい、魚が",
      id: 4,
    },
    {
      text: "魚の本を読む",
      id: 5,
    },
  ]);

  const todoDelete = (id) => {
    // 自身のidと一致した場合list配列から取り除く
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // inputTextをinputListに追加する
  // 引数でEntryFormからinputTextをもらってくる
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

  // フィルターしたいワードを含むもののみ配列にする
  const filterTodos = (filterText) => {
    setTodos(todos.filter((todo) => todo.text.indexOf(filterText) !== -1));
  };

  return (
    <div className="todo-list-layout">
      <EntryForm addTodos={addTodos} />
      <Todo todos={todos} todoDelete={todoDelete} />
      <FooterArea filterTodos={filterTodos} />
    </div>
  );
};
