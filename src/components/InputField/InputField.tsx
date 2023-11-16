// InputField.jsx

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface InputFieldProps {
  label: string;
  type: string;
}
const InputField = ({ label, type }: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    {
      setIsFocused(false);
    }
  };

  return (
    <div className={`input-div ${isFocused ? "focus" : ""}`}>
      <div className="i">
        <FontAwesomeIcon icon={type === "password" ? "lock" : "user"} />
      </div>
      <div className="div">
        <h5>{label}</h5>
        <input
          type={type}
          className="input"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default InputField;
