import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function WorkCard(props) {
  const {
    index,
    onClick,
    cardClass,
    cardBackground,
    isMobile,
    mobileCard
  } = props;
  return isMobile ? (
    <div
      style={{
        position: "relative",
        justifyContent: "center"
      }}
    >
      <img src={mobileCard} className="card" alt="mobile" />
      <div className="mobileCard">
        <h1>Example Text</h1>
        <div className="flavor" style={{ paddingBottom: 0 }}>
          <h3>Header Text</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flavor">
          <h3>Header Text</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center"
      }}
    >
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
            <p style={{ textAlign: "left", color: "#313131" }}>{designText}</p>
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
            <p style={{ textAlign: "left", color: "#313131" }}>{developText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
