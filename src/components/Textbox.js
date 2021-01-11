import React, {useState, useEffect} from 'react';

const Textbox = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            console.log(e.key);
        })
    }, [])

    return (
        <div className="text-box">{text}</div>
    )
}

export default Textbox;