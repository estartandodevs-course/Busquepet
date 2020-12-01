import "./style.scss";


export function InputField(props) {
  const { placeholder, label, type} = props;

  return (
    <div className="input-field">
      <label className="label">
        {label} <span>*</span>
      </label>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
}

