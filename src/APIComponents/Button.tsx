import React from "react";

interface ButtonProps {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return <button className="button" onClick={onClick}>Отправить</button>;
};

export default Button;