import React from "react";

export type ButtonProps = {
    label: Aubergine;
    onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};