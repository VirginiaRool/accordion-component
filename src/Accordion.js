import React, { useState } from "react";
import "./Accordion.css";

export default function Accordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);

  return (
    <div className="container">
      {sections.map((section, index) => {
        let contentClass = index === activeIndex ? "content active" : "content";
        return (
          <div className="section" key={index}>
            <div
              className="title"
              onClick={() => {
                setActiveIndex(index);
              }}
            >
              {section.title}
            </div>
            <div className={contentClass}>
              <p>{section.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// no voy a hacer mutipull ni hook
