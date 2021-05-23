import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="header">
        <div className="type">{props.data.problemType}</div>
        <div className="title">{props.data.unitName}</div>
        {props.type === "problem" ?
          <button className={props.active ? "active" : ""} onClick={() => props.leftButtonAction(props.index)}>유사문항</button> :
          <button onClick={() => props.leftButtonAction(props.index)}>추가</button>
        }
        <button onClick={() => props.rightButtonAction(props.index)}>{props.type === "problem" ? "삭제" : "교체"} </button>
      </div>
      <div className="body">
        <div className="index">
          {props.index + 1}
        </div>
        <img src={props.data.problemURL} alt={props.data.unitName} />
      </div>
    </div>
  );
};

export default Card;
