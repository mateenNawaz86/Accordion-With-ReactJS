import React, { useState } from "react";
import Card from "../UI/Card";
import { Questions } from "../Questions/Questions";
import AccordionRes from "./AccordionRes";

import "./Accordion.css";

const Accordion = () => {
  const [questionData, setQuestionData] = useState(Questions);

  return (
    <Card>
      <div className="main__container">
        <h1>React Interview Questions</h1>

        {questionData.map((curItem, index) => {
          return <AccordionRes key={index} {...curItem} />;
        })}
      </div>
    </Card>
  );
};

export default Accordion;
