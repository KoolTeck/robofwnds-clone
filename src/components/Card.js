import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className= 'bg-light-green dib br3 pa2 ma1 grow bw6 shadow-3 tc'>
           <img alt='robots' src={`https://robohash.org/${id}?`} />

            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;