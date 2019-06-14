import React from "react";

import NoAnchorCard from "./NoAnchorCard";
import AnchorCard from "./AnchorCard";

export default function WorkCard(props) {
  const {
    index,
    onClick,
    cardBackground,
    siteLink,
    cardClass,
    isMobile,
    mobileCard,
    cardTitle,
    designHeader,
    designText,
    developHeader,
    developText
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
        <h1 style={{ textShadow: "3px 3px 5px #00000057" }}>{cardTitle}</h1>

        <div className="flavor" style={{ paddingBottom: 0 }}>
          <h3 style={{ color: "#5a4361" }}>{designHeader}</h3>
          <p style={{ textAlign: "left", color: "#313131" }}>{designText}</p>
        </div>
        <div className="flavor">
          <h3 style={{ color: "#5a4361" }}>{developHeader}</h3>
          <p style={{ textAlign: "left", color: "#313131" }}>{developText}</p>
        </div>
      </div>
    </div>
  ) : cardClass === "cardBig" ? (
    <NoAnchorCard
      resetCards={props.resetCards}
      index={index}
      onClick={onClick}
      cardClass={cardClass}
      cardBackground={cardBackground}
      cardTitle={cardTitle}
      designHeader={designHeader}
      designText={designText}
      developHeader={developHeader}
      developText={developText}
      siteLink={siteLink}
    />
  ) : (
    <AnchorCard
      index={index}
      onClick={onClick}
      cardClass={cardClass}
      cardBackground={cardBackground}
      cardTitle={cardTitle}
      designHeader={designHeader}
      designText={designText}
      developHeader={developHeader}
      developText={developText}
      siteLink={siteLink}
    />
  );
}
