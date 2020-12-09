import "./TextArea.scss";

export default function TextArea(props) {
  const { placeholder, label} = props;

  return (
    <div className="textarea-field">
      <label className="label">
        {label} <span className="asterisk">*</span>
      </label>
      <textarea
        className="textarea"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
