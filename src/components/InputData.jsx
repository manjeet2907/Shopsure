import React from "react";

const InputData = ({
  label,
  type,
  placeholder,
  actionOnChange,
  actionOnClick,
  value,
  idlabel,
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
      />
    </div>
  );
};

export default InputData;
