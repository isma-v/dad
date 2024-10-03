import React from "react";


function MyImage({imagePath, alt}) {
    return (  
        <>

            <img
                src={imagePath}
                alt={alt}
            />
        </>
    );
}

export default MyImage;

