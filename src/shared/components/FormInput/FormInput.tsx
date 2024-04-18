import React from "react";
import { InputContainer } from "./Form.styled";

export const FormInput = ({
  hasError,
  isLast,
  label,
  showPassword,
  togglePasswordVisibility,
  children,
}: {
  hasError: boolean;
  isLast?: boolean | undefined;
  label: string;
  showPassword?: boolean | undefined;
  togglePasswordVisibility?: () => void | undefined;
  children?: React.ReactNode;
}) => {
  return (
    <InputContainer hasError={hasError} isLast={isLast}>
      {children}
      <div>
        <label>{label}</label>
      </div>
    </InputContainer>
  );
};
