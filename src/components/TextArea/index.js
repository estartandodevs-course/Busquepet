import "styles.scss";

const TextArea = ({ placeholder, label, onChange }) => (
  <div className="textarea-field">
    <label className="label">
      {label} <span className="asterisk">*</span>
    </label>
    <textarea
      className="textarea"
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      required
    />
  </div>
);

export default TextArea;
