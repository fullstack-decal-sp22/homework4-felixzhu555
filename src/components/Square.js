import React from "react";
import './styles/Square.css';

function Square(props) {

    return (
        <button className="square" index={props.index} onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Square;