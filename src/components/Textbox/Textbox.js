import React, {useState, useEffect, useCallback} from 'react';
import './Textbox.css'

const Textbox = () => {
    const [text, setText] = useState(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`);
    const [cursorIndex, setCursorIndex] = useState(0);

    const keyDownListener = useCallback((e) => {
        console.log(e.key);
        // cases to think about
        // backspacing
        // correct key down
        // incorrect key down
        if (e.key === 'Backspace' && cursorIndex > 0) {
            setCursorIndex(cursorIndex - 1);
            console.log(cursorIndex);
        }
        if (e.key === text[cursorIndex]) {
            setCursorIndex(cursorIndex + 1);
            console.log(cursorIndex);
        }
    }
        , [cursorIndex]);

    useEffect(() => {
        document.addEventListener('keydown', keyDownListener);

        return () => {
            document.removeEventListener('keydown', keyDownListener);
        };
    }, [cursorIndex]);

    return (
        <div className="text-box">
            {text.split('').map((letter,index) => {
                return (
                    (letter === ' ') ? 
                        <div key={index} className={(index === cursorIndex) ? '.letter .active' : '.letter'}>&nbsp;</div> :
                        <div key={index} className={(index === cursorIndex) ? '.letter .active' : '.letter'}>{letter}</div>
                )
            })}
        </div>
    );
}

export default Textbox;