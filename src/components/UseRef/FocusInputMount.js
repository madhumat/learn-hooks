import React, { useRef, useEffect } from 'react';

const FocusInputOnMount = () => {
    const inputRef = useRef(null); // Create a ref for the input

    useEffect(() => {
        // Focus the input when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <input
                ref={inputRef} // Attach the ref to the input
                type="text"
                placeholder="Type here..."
            />
        </div>
    );
};

export default FocusInputOnMount;
