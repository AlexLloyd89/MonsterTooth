import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faExternalLinkSquareAlt
} from "@fortawesome/free-solid-svg-icons";

export default function NoAnchorCard(props) {
  const {
    index,
    onClick,
    cardClass,
    cardBackground,
    cardTitle,
    designHeader,
    designText,
    developHeader,
    developText,
    siteLink,
    resetCards
  } = props;
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        className="closeButton"
        style={{ display: "inline" }}
        onClick={resetCards}
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
          <h1 style={{ textShadow: "3px 3px 5px #00000057" }}>
            {" "}
            <a target="_blank" href={siteLink}>
              {cardTitle}

              <FontAwesomeIcon
                icon={faExternalLinkSquareAlt}
                size="2x"
                style={{ fontSize: "40", paddingLeft: 20 }}
              />
            </a>
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
