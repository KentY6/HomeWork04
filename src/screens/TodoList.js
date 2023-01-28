import React, { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { Todo } from "../components/Todo";

export const TodoList = () => {
  const [inputList, setInputList] = useState([]);
  console.log("inputList", inputList);

  return (
    <div className="todo-list-layout">
      <EntryForm inputList={inputList} setInputList={setInputList} />
      <Todo inputList={inputList} setInputList={setInputList} />
    </div>
  );
};
