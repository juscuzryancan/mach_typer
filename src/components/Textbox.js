import React, {useEffect, useRef} from 'react';

const Textbox = () => {

    const div = useRef(null);

    useEffect(() => {
        window.addEventListener('keydown', div, () => {
            console.log('use effect log');
        })
    }, [])

    const handleKeyDown = () => {
        console.log('key pressed');
    }

    return (
        <div ref={div} className="text-box" onKeyDown={handleKeyDown}>Random Text</div>
    )
}

export default Textbox;