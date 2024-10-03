import React from "react";

function Button({name, backgroundColor, handleClick}) {
    return (  
        <>
            <div 
                className={"button"}
                style={{backgroundColor: {backgroundColor}}}
                onClick={handleClick}
            >
                {name}
            </div>
        </>
    );
}

export default Button
