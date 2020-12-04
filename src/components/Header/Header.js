import React from "react";
import Seta from "../../assets/images/seta.svg";
import Text from "../Text/Text";
import "./Header.scss";

function Header(props) {
  const { title, subTitle } = props;

  return (
    <header className="header">
      <img className="arrow" src={Seta} alt="seta"></img>
      <div className="textform">
        <Text className="titulo" type="titleheader">
          {title}
        </Text>
        <Text type="subtitleheader">{subTitle}</Text>
      </div>
    </header>
  );
}

function Arrow(props) {
  const {} = props;
  if ((props.arrow = true)) {
    return <img src={Seta} alt="seta"></img>;
  }

  return null;
}

export default Header;
