import React, { useState, useEffect } from 'react';

const HookMouse = () => {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);
   
    const handleMouseMove = (event) => {  
             console.log("Hello")
            setMouseX(event.clientX);
            setMouseY(event.clientY);
      
    };

    useEffect(() => {
      
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            console.log("component unmount is called ")
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

   

    return (
        <div>
        
                    Mouse Position: ({mouseX}, {mouseY})
                   
            
        </div>
    );
};

export default HookMouse;
