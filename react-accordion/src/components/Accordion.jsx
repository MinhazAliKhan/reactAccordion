import React, { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./UI/FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [activeId, setActiveId] = useState(false);
  useEffect(() => {
    setData(faq);
  }, []);

  const handleButton = (id) => {
    setActiveId((prevId) => (prevId === id ? false : id));
  };
  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ
              key={curElem.id}
              curData={curElem}
              isActive={activeId === curElem.id}
              onHandleButton={() => handleButton(curElem.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Accordion;
