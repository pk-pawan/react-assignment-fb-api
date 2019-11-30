import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';
import Navbar from './Navbar';
import {appId} from '../config';

export default class Layout extends Component {

    state = {
        auth: false,
        name: '',
        picture: ''
    };

    componentDidMount(){
        const {auth} = this.state;
        localStorage.setItem("isAuth", auth);
    }

    responseFacebook = response => {
        if(response.status !== 'unknown'){
        localStorage.setItem("isAuth", true);
        this.setState({
            auth: true,
            name: response.name,
            picture: response.picture.data.url,
        });
    }
    }

    render(){
        let facebookData;
        this.state.auth ?
        facebookData = (
                <div style={{
                    width: '400px',
                    margin: 'auto',
                    background: '#f4f4f4',
                    padding: '20px',
                    color: '#000'
                }}>
                    <div className="header">
                        <img src={this.state.picture} alt={this.state.name} />
                        <div className="name">{this.state.name}</div>
                    </div>
                    <Navbar />
                </div>
            ) : 
            facebookData = (<div className="alignCenter">
                <FacebookLogin
                appId={appId}
                autoLoad={true}
                fields="name,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} /></div>);

        return (
            <>
                {facebookData} 
                {this.props.children}   
            </>
        );
    }
}