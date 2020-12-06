import React from 'react';
import Pushup from '../Pushup';
import Pullup from '../Pullup';

function Counter(props) {
    return (
        <div>
            <div>
                <Pullup currentState={props.currentState}/>
                <button onClick={() => {props.dispatch({"type": "add-pull"}) }}>Add Pullup</button>
                <button onClick={() => {props.dispatch({"type": "sub-pull"}) }}>Subtract Pullup</button>
            </div>
            <div>
                <Pushup currentState={props.currentState}/>
                <button onClick={() => {props.dispatch({"type": "add-push"}) }}>Add Pushup</button>
                <button onClick={() => {props.dispatch({"type": "sub-push"}) }}>Subtract Pushup</button>
            </div>
        </div>
    )
}

export default Counter;
