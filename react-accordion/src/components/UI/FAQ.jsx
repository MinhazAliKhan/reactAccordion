import React, { useState } from "react";

const FAQ = ({ curData, onHandleButton, isActive }) => {
  const { question, answer } = curData;

  //   const handleButton = () => {
  //     setActiveId(!activeId);
  //   };
  return (
    <>
      <li>
        <div className="accordion-grid">
          <p>{question}</p>
          <button
            onClick={onHandleButton}
            className={isActive ? "active-btn" : ""}
          >
            {isActive ? "Close" : "Show"}
          </button>
        </div>
        <p>{isActive && answer}</p>
      </li>
    </>
  );
};

export default FAQ;
