import "./RadioButton.scss";
import Text from "../Text";

export default function RadioButton(props) {
  const { text, name, id, onChange } = props;
  return (

    <label
      className="radioContainer"
      htmlFor={id}
      onChange={(event) => onChange(event.target.id)}>
      <input type="radio" name={name} id={id} />
      <div className="circle-area">
        <span className="circle" />
      </div>
      <div>
        <Text type="textform">{text}</Text>
      </div>
    </label>
  );
}
