import React from "react";
import Text from "../Text";
import "./Button.scss";

export default function Button({ identifier, icon, name, onClick, disabled }) {
  return (
    <div>
      <button className={identifier} onClick={onClick} disabled={disabled}>
        <div className="button-Dad">
          <Text type="textbutton">{name}</Text>
          {icon && <img className="Icons" src={icon} alt="icon" />}
        </div>
      </button>
    </div>
  );
}
