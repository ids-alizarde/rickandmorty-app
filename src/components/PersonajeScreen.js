import React from 'react';

export const PersonajeScreen = ({ history }) => {

    const handleReturn = () => {
        
        if( history.length <= 2 ){
            history.push('/')
        } else{
            history.goBack();
        }
    }

    return (
        <div>
            <div >
                <img src="" alt=""/>
            </div>
            <div >
                <h3>{  }</h3>
                <ul>
                    <li><b>name </b>{  }</li>
                    <li><b>id: </b>{  }</li>
                </ul>
                <h5>Characters</h5>
                <p>{ }</p>
                <button onClick={ handleReturn }>Return</button>
            </div>
        </div>
    )
}
