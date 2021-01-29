import React, {useState, useEffect} from 'react';
import './Textbox.css'

const Textbox = () => {
    const [text, setText] = useState('');
    const [cursorIndex, setCursorIndex] = useState(0);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            console.log(e.key);
        })

        setText('hello how there many world post the how panic time very accurate pour drink world more the can you please lost life always a world');
    }, [])

    return (
        <div className="text-box">{text.split(' ').map((word, index) => {
            //return the word in a div then a space
            return (
                <React.Fragment key={index}>
                <div className="word">{
                    word.split('').map((letter, index) => {
                        return (<div key={index} className="letter">{letter}</div>)
                    })
                }</div>
                <div className="letter">&nbsp;</div>
                </React.Fragment>
            )
        })}</div>
    )
}

export default Textbox;