import React from 'react';

function Card(props) {
    return (
        <div className={"card text-white bg-primary mb-3 " + props.type.toLowerCase()} style={{maxWidth: 20 + 'rem'}}>
            <div className="card-header" style={{textTransform: 'capitalize'}}>{props.type}</div>
            <div className="card-body">
                <p className="card-text">{props.text || 'Empty card'}</p>
            </div>
        </div>
    )
}

export default Card;