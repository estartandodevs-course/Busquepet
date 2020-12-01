import React from "react";
import Seta from "../../assets/images/seta.svg";
import Text from "../Text/Text";
import "./Header.scss";

function Header(props) {
  const { title } = props;

  return (
    <header className="header">
      <img src={Seta} alt="seta"></img>

      <Text type="titleheader">{title}</Text>
    </header>
  );
}

export default Header;
