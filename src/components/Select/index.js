import "./styles.scss";

export const Select = ({ identifier, id, onChange, ...restProps }) => (
  <div className="select-container">
    <label className="label" id={id}>
      {restProps.label} <span className="asterisk">*</span>
    </label>
    <select
      className={identifier}
      name="Select"
      id=""
      placeholder="Selecione um estado"
      onChange={(event) => onChange(event.target.value)}
    ></select>
  </div>
);

export default Select;
