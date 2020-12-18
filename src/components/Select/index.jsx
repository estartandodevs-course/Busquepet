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
      { value: "Acre", text: "Acre" },
      { value: "Alagoas", text: "Alagoas" },
      { value: "Amapá", text: "Amapá" },
      { value: "Amazonas", text: "Amazonas" },
      { value: "Bahia", text: "Bahia" },
      { value: "Ceará", text: "Ceará" },
      { value: "Distrito Federal", text: "Distrito Federal" },
      { value: "Espírito Santo", text: "Espírito Santo" },
      { value: "Goiás", text: "Goiás" },
      { value: "Maranhão", text: "Maranhão" },
      { value: "Mato Grosso", text: "Mato Grosso" },
      { value: "Mato Grosso do Sul", text: "Mato Grosso do Sul" },
      { value: "Minas Gerais", text: "Minas Gerais" },
      { value: "Pará", text: "Pará" },
      { value: "Paraíba", text: "Paraíba" },
      { value: "Paraná", text: "Paraná" },
      { value: "Pernambuco", text: "Pernambuco" },
      { value: "Piauí", text: "Piauí" },
      { value: "Rio de Janeiro", text: "Rio de Janeiro" },
      { value: "Rio Grande do Norte", text: "Rio Grande do Norte" },
      { value: "Rio Grande do Sul", text: "Rio Grande do Sul" },
      { value: "Rondônia", text: "Rondônia" },
      { value: "Roraima", text: "Roraima" },
      { value: "Santa Catarina", text: "Santa Catarina" },
      { value: "São Paulo", text: "São Paulo" },
      { value: "Sergipe", text: "Sergipe" },
      { value: "Tocantins", text: "Tocantins" },
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
