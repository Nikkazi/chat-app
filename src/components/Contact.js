import React from 'react';
import './CSS.css';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img src={props.nameavatar} alt={props.name} />
            <div className="Contact-info">
                <h2>{props.name}</h2>
                <div className="status">
                    <p className={props.status ? 'status-online' : 'status-offline'}>{props.status ? 'online' : 'offline'}</p>
                </div>
            </div>
        </div >
    );
}

export default Contact;