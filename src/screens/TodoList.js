import React, { useState } from "react";
import { EntryForm } from "../components/EntryForm";
import { Todo } from "../components/Todo";

export const TodoList = () => {
  const [inputList, setInputList] = useState([]);

  return (
    <div className="main-container">
      <EntryForm inputList={inputList} setInputList={setInputList} />
      <Todo inputList={inputList} setInputList={setInputList} />
    </div>
  );
};
