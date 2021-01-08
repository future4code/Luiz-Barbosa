import React from 'react';
import './CardIdioma.css'

function CardIdioma(props) {
    return (
        <div className="cardidioma">
            <img src={ props.imagem } />
            <div>
                <p>{ props.linguas }</p>
            </div>
        </div>
    )
}

export default CardIdioma;