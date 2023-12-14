import "./InputField.css";
import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  pass: "pass" | "user";
  value: string;
  inputValue: (e: string) => void;
}
const InputField = ({
  label,
  type,
  pass,
  value,
  inputValue,
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setIsFocused(false);
    }
  };
  return (
    <div className={`input-div input-div__${pass} ${isFocused ? "focus" : ""}`}>
      <div className="i">
        {type === "password" ? (
          <FaLock
            size="25"
            color={isFocused ? "#38d39f" : ""}
            className="icon"
          />
        ) : (
          <FaUser
            size="25"
            color={isFocused ? "#38d39f" : ""}
            className="icon"
          />
        )}
      </div>
      <div className="div">
        <h5>{label}</h5>
        <input
          type={type}
          className="input "
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          onChange={(e) => inputValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default InputField;
