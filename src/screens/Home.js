import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home">
      <Link to="/todoList" className="goto-todo">
        Todoへ進む
      </Link>
    </div>
  );
};
