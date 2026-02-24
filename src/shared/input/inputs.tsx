import { useField } from "formik";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import type { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  disabled = false,
  className = "",
  autoComplete,
  maxLength,
  showCharacterCount = false,
  //   leftIcon,
  //   rightIcon,
  required = false,
  value,
  borderless = false,
  rows,
  buttomBorder = false,
  logo,
  hasLogo = false,

  //   hintText = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const [showPassword, setShowPassword] = useState(false);
  const hasError = meta.touched && meta.error;
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  useEffect(() => {
    if (value !== undefined) {
      helpers.setValue(value);
    }
  }, [value, helpers]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // console.log(toggleShowPassword);

  //   const getDefaultIcon = () => {
  //     if (leftIcon) return leftIcon

  //     switch (type) {
  //         case
  //     }
  //   }

  return (
    <div className={twMerge("mb-2 w-full", className)}>
      {label && (
        <label
          htmlFor={name}
          className="flex items-center gap-2 text-12 font-medium text-offBlack mb-1.5 relative"
        >
          {hasLogo && (
            <div className="flex gap-2">
              <img className="w-6 h-6" src={logo} alt="" />
            </div>
          )}
          {label}
          {required && (
            <span className="font-medium text-[13px] absolute text-dangerWarning">
              *
            </span>
          )}
          {maxLength && showCharacterCount && (
            <span className="text-xs text-gray-500 ml-1 border-8">
              ({(value !== undefined ? value : field.value)?.length || 0}/
              {maxLength})
            </span>
          )}
        </label>
      )}

      {type === "textarea" ? (
        <textarea
          id={name}
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          maxLength={maxLength}
          value={value !== undefined ? value : field.value}
          rows={rows || 7}
          className={`
              block w-full px-2 text-14 ${
                borderless ? "" : "border shadow-sm"
              } rounded-md font-light
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed

              ${
                hasError
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }
              ${className}
            `.trim()}
        />
      ) : (
        <input
          id={name}
          type={inputType}
          {...field}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          value={value !== undefined ? value : field.value}
          maxLength={maxLength}
          className={`
              block w-full px-2 h-[40px] text-14 lg:h-12 rounded-12 ${borderless ? "" : ""}
                ${buttomBorder ? "border-b border-b-borderButton shadow-none" : "border shadow-sm"}
               font-light
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
              disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
              ${
                hasError
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300"
              }
              ${className}
            `.trim()}
        />
      )}

      {maxLength && showCharacterCount && !hasError && (
        <p className="mt-1 text-xs text-gray-500 text-right">
          {(value !== undefined ? value : field.value)?.length || 0} /{" "}
          {maxLength} characters
        </p>
      )}

      {hasError && (
        <p className="mt-1 text-12 text-red-600 " role="alert">
          {meta.error}
        </p>
      )}
    </div>
  );
};

export default Input;
