import React from "react";
import "./Select.scss";

export const Select = (props) => {
  const { identifier, identificador, onChange } = props;
  const typeMap = {
    idade: [
      { value: "", text: "" },
      { value: "1 3 meses", text: "1 - 3 meses" },
      { value: "1 3 meses", text: "1 - 3 meses" },
      { value: "4 6 meses", text: "4 - 6 meses" },
      { value: "7 9 meses", text: "7 - 9 meses" },
      { value: "10 12 meses", text: "10 - 12 meses" },
      { value: "10 12 anos", text: "2 - 3 anos" },
      { value: "10 12 anos", text: "4 - 5 anos" },
      { value: "10 12 anos", text: "6 - 7 anos" },
      { value: "10 12 anos", text: "8 anos +" },
      { value: "não sei", text: "Não sei" },
    ],
    estado: [
      { value: "", text: "" },
      { value: "brasil", text: "Acre" },
      { value: "chile", text: "Alagoas" },
      { value: "japão", text: "Amazonas" },
      { value: "japão", text: "Bahia" },
      { value: "japão", text: "Ceará" },
      { value: "japão", text: "Espírito Santo" },
      { value: "japão", text: "Goiás" },
      { value: "japão", text: "Maranhão" },
      { value: "japão", text: "Mato Grosso" },
      { value: "japão", text: "Mato Grosso do Sul" },
      { value: "japão", text: "Minas Gerais" },
      { value: "japão", text: "Pará" },
      { value: "japão", text: "Paraíba" },
      { value: "japão", text: "Paraná" },
      { value: "japão", text: "Pernambuco" },
      { value: "japão", text: "Piauí" },
      { value: "japão", text: "Rio de Janeiro" },
      { value: "japão", text: "Rio Grande do Norte" },
      { value: "japão", text: "Rio Grande do Norte" },
      { value: "japão", text: "Rondônia" },
      { value: "japão", text: "Roraima" },
      { value: "japão", text: "Santa Catarina" },
      { value: "japão", text: "São Paulo" },
      { value: "japão", text: "Sergipe" },
      { value: "japão", text: "Tocantins" },
      { value: "japão", text: "Distrito Federal" },
    ],
  };

  return (
    <div className="select-container">
      <label className="label" id={identificador}>
        {props.label} <span className="asterisk">*</span>
      </label>
      <select
        className={identifier}
        name="Select"
        id=""
        placeholder="Selecione um estado"
        onChange={(event)=> onChange(event.target.value)}
      >
        {typeMap[props.typeMap].map((element, index) => {
          return (
            <option key={index} value={element.value}>
              {element.text}
            </option>
          );
        })}
      </select>
    </div>
  );
};
