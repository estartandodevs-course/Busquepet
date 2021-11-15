import "./InputField.scss";

export const InputField = ({
  placeholder,
  label,
  type,
  onChange,
  value,
  idendifier,
}) => (
  <div className={idendifier}>
    <label className="label">
      {label} <span className="asterisk">*</span>
    </label>
    <input
      className="input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </div>
);

export default InputField;
