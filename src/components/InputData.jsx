import React from "react";

const InputData = ({
  label,
  type,
  placeholder,
  actionOnChange,
  actionOnClick,
  value,
  idlabel,
  name,
}) => {
  return (
    <div className='inputData'>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={idlabel}
        value={value}
        onChange={actionOnChange}
        onClick={actionOnClick}
        name={name}
      />
    </div>
  );
};

export default InputData;
