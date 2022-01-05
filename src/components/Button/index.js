import Text from "../Text";
import "./Button.scss";

const Button = ({ icon, name, ...restProps }) => (
  <button {...restProps}>
    <div className="button-Dad">
      <Text type="textbutton">{name}</Text>
      {icon && <img className="Icons" src={icon} alt="icon" />}
    </div>
  </button>
);

export default Button;
