import React from "react";

interface ButtonProps {
  buttonText: string;
  buttonColor?: string;
}

const Button: React.FC<ButtonProps> = ({ buttonText }: ButtonProps) => {
  return (
    <button>
      <span>{buttonText}</span>
    </button>
  );
};

export default Button;
