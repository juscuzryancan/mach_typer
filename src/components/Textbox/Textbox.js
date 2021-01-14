import React, {useState, useEffect} from 'react';

const Textbox = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            console.log(e.key);
        })

        setText('hello how there many world post the how panic time very accurate pour drink world more the can you please lost life always a world');
    }, [])

    return (
        <div className="text-box">{text}</div>
    )
}

export default Textbox;