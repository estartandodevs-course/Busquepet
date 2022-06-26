import typeMap from "@/_mock/typeMap";
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
    >
      {typeMap[restProps.typeMap].map((element, index) => {
        return (
          <option key={index} value={element.value}>
            {element.text}
          </option>
        );
      })}
    </select>
  </div>
);

export default Select;
