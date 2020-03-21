import React from 'react';
import './CSS.css';
import PropTypes from 'prop-types';

const Contact = (props) => {
    return (
        <div className="Contact">
            <img src={props.nameavatar} alt={props.name} />
            <div className="Contact-info">
                <h2>{props.firstName + " " + props.lastName}</h2>
                <h2>Age:{props.age}</h2>
                <div className="status">
                    <p className={props.status ? 'status-online' : 'status-offline'}>{props.status ? 'online' : 'offline'}</p>
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