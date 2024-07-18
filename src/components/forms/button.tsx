import React from "react";
import buttonType from "@/types/buttonType";

const Button: React.FC<buttonType> = ({ texto, classe, onclick = () => { }, type = 'button' }) => {
    return (
        <button onClick={onclick} className={classe} type={type}>
            {texto}
        </button>
    );
}

export default Button;
