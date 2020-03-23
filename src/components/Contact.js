import React from 'react';
import './CSS.css';



class Contact extends React.Component {
    constructor() {
        super()
        this.state = {
            online: false
        }
    }



    render() {
        return (
            <div className="Contact">
                <img src={this.props.user.avatar} alt={this.props.user.name} />
                <div className="Contact-info">
                    <h2>{this.props.user.name}</h2>
                    <div className="status">
                        <button onClick={() => {
                            this.setState({ online: !this.state.online })
                        }}>Change</button>
                        <p className={this.state.online ? 'status-online' : 'status-offline'}>{this.state.online ? 'ONLINE' : 'OFFLINE'}</p>
                    </div>
                </div>
            </div >
        );
    }
}
export default Contact;