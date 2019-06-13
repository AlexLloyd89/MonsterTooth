import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function WorkCard(props) {
  const {
    index,
    onClick,
    cardClass,
    cardBackground,
    cardTitle,
    designHeader,
    designText,
    developHeader,
    developText
  } = props;
  return (
    <div style={{ position: "relative" }}>
      <div
        className="closeButton"
        style={{ display: props.isClicked ? "inline" : "none" }}
        onClick={props.resetCards}
      >
        <FontAwesomeIcon icon={faTimes} size="3x" />
      </div>

      <div
        id="card"
        onClick={() => onClick(index)}
        style={{ backgroundImage: `url(${cardBackground})` }}
        className={`card ${cardClass}`}
      >
        <div className="cardContent">
          <h1 style={{ marginBottom: 30, textShadow: "3px 3px 5px #00000057" }}>
            {cardTitle}
          </h1>
          <div
            className="flavor"
            style={{
              width: "43%",
              padding: 30,
              paddingTop: 0,
              float: "left"
            }}
          >
            <h3 style={{ color: "#5a4361" }}>{designHeader}</h3>
            <p style={{ textAlign: "left" }}>{designText}</p>
          </div>
          <div
            style={{
              width: "43%",
              padding: 30,
              paddingTop: 0,
              float: "left"
            }}
          >
            <h3 style={{ color: "#5a4361" }}>{developHeader}</h3>
            <p style={{ textAlign: "left" }}>{developText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
