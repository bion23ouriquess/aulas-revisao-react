import React from 'react';
import './Demo1.css';
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import { Gamepad2 } from 'lucide-react';

function Demo1() {
    function responderClique() {
        alert('Você clicou, Parabéns!')
    }

    const tratarEntrada = () =>{

    };

    return (
        <div className='container-demo1'>
            <button onClick={responderClique}>Clique Aqui</button>
            <button onClick={() => { alert('Eu nasci de um Arrow Function!') }}> 😊 </button>

            <img src="programmer.gif" />
            <BsFillEmojiSunglassesFill size={20} />
            <Gamepad2 size={20} />

        </div>
    )
};

export default Demo1;