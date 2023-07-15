// ``from https://blog.samdaryl.dev/create-a-reusable-button-component-in-react

import React from "react";
import './Button.css'

export type ButtonProps = {
    label: string;
    onClick?: () => void;
    style?: string;
    className?: string;
};

export const Button: React.FC<ButtonProps> = ({
    label,
    style,
    className,
    onClick
}) => {
/*     // Always set the compatibility styles
    let buttonClasses = ["button-compatibility-styles"];

    // If className is provided, append it
    if (className) buttonClasses.push(className);

    // If no styles are provided, provide base styles
    if (!style && !className) buttonClasses.push("button-base-styles"); */

    return (
        <button
            style={style}
           // className={buttonClasses.join(" ")}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
