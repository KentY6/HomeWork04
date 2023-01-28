import React, { useState } from "react";

export const FooterArea = ({ filterTodos }) => {
  const [filterText, setFilterText] = useState("");

  const getFilterText = (e) => {
    e.preventDefault();
    if (filterText === "") return;
    filterTodos(filterText);
  };

  return (
    <div className="footer-area">
      <form className="filter-tools">
        <input
          className="filter-text"
          type="text"
          value={filterText}
          placeholder="検索したい値を入力"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <div className="filter-button" onClick={getFilterText}>
          <i className="fa-solid fa-filter"></i>
        </div>
      </form>
    </div>
  );
};
