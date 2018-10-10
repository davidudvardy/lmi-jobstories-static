import React from 'react';

function Card() {
    return (
        <div className="card text-white bg-primary mb-3" style={{maxWidth: 20 + 'rem'}}>
            <div className="card-header">Context</div>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    )
}

export default Card;