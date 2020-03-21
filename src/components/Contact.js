import React from 'react';
import './CSS.css';
import PropTypes from 'prop-types';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img src={props.user.avatar} alt={props.user.name} />
            <div className="Contact-info">
                <h2>{props.user.name}</h2>
                <div className="status">
                    <p className={props.user.online ? 'status-online' : 'status-offline'}>{props.user.online ? 'online' : 'offline'}</p>
                </div>
            </div>
        </div >
    );
}

Contact.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};

export default Contact;