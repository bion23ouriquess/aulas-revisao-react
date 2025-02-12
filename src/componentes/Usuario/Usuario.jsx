import React from 'react';

function Usuario(props) {
    return (
        <div>
            {console.log(props)}
            Nome de Usuário: {props.username}
        </div>
    )
}

export default Usuario;