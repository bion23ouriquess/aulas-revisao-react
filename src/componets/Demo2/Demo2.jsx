import { useState } from 'react';
import './Demo2.css';
import Usuario from '../Usuario/Usuario';

function Demo2() {
    const [valor, setValor] = useState(0);
    const [usuario, setUsuario] = useState('');

    const aumentar = () => {
        setValor(valor + 1)
    };
    const diminuir = () => {
        setValor(valor - 1)
    };
    // const nomePessoa = () => {
    //     setUsuario(prompt('Digite o seu nome:'))
    // };

    return (
        <div className='container-demo2'>
            <h2>UseState</h2>
            <button className='aumentar-botao' onClick={aumentar}>+</button>
            {valor}
            <button className='diminuir-botao' onClick={diminuir}>-</button>
            <button onClick={() => {setUsuario(prompt("Username:"))}}>Fazer login</button>
            {/* {usuario && <p>Olá {usuario}!</p>} */}

            {usuario ? <p> Olá. {usuario}</p> : <p>Faça login</p>}

            <Usuario username={usuario} />

            {usuario && <Usuario username={usuario} />}
        </div>
    );
};

export default Demo2;