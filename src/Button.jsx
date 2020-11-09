import React from 'react';

const Button = ({ whatColor, setColor }) => {
    return (
        <button
            style={{color: "white", backgroundColor: whatColor}}
            onClick={() => setColor(whatColor)}
        >
            押してね!
        </button>
    )
}

export default Button; 