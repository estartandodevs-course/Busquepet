import Text from "../Text";
import "./styles.scss";

const RadioButton = ({ text, name, id, onChange }) => (
  <label
    className="radioContainer"
    htmlFor={id}
    onChange={(event) => onChange(event.target.id)}
  >
    <input type="radio" name={name} id={id} />
    <div className="circle-area">
      <span className="circle" />
    </div>
    <div>
      <Text type="textform">{text}</Text>
    </div>
  </label>
);

export default RadioButton;
