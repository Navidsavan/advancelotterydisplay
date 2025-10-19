import React from "react";
import '../styles/InputField.css';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="input-field">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`input-box ${error ? "input-error" : ""}`}
        />
        {error && <span className="error-text">{error}</span>}
      </div>
    </div>
  );
};

export default InputField;
