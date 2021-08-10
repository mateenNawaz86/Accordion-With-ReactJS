import React, { useState } from "react";

const AccordionRes = ({ question, ans }) => {
  const [showAns, setShowAns] = useState(false);

  const clickHandler = () => setShowAns(!showAns);

  return (
    <>
      <div className="inner__container">
        <i
          onClick={clickHandler}
          className={showAns ? "fas fa-minus-circle" : "fas fa-plus-circle"}
        />
        <h3>{question}</h3>
      </div>

      {showAns && (
        <div className="answer">
          <p>{ans}</p>
        </div>
      )}
    </>
  );
};

export default AccordionRes;
