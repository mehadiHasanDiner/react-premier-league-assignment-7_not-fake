import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import './Player.css';

const Player = (props) => {
    const {name, image, salary} = props.info;
    const handlePlayerAdd = () => {console.log('added')};
    return (
        <div className ="player-container">
            <div className ="player-info">
            <h4> Cricketer Name : {name} </h4>
            <img src={image} alt=""/>
            <h5> Salary : {salary} </h5>
            <button className ="btn btn-success"><FontAwesomeIcon icon={faUserCheck} /> Hair Player</button>
            </div>
        </div>
    );
};

export default Player;