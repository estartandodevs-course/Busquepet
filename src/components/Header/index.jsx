import React from "react";
import Seta from "../../assets/images/seta.svg";
import Text from "../Text/";
import "./Header.scss";

export default function Header(props) {
  const { title, subTitle, goBack } = props;

  return (
    <header className="header">
      <img onClick={goBack} className="arrow" src={Seta} alt="seta"></img>
      <div className="textform">
        <Text className="titulo" type="titleheader">
          {title}
        </Text>
        <Text type="subtitleheader">{subTitle}</Text>
      </div>
    </header>
  );
}
