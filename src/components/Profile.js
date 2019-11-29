import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getProfileDetails} from '../actions';

class Profile extends React.Component{

    componentDidMount(){
        this.props.getProfileDetails();
    }
    
    render(){
        const {profile} = this.props;
        return profile.data ? <div className="profile">
            <div>Name: {profile.data.name || ""}</div>
            <div>Email: {profile.data.email || ""}</div>
            <div>Gender: {profile.data.gender || ""}</div>
            <div>Birthday: {profile.data.birthday || ""}</div>
        </div> : null
    }
}

function mapStateToProps(state) {
    return {
        profile : state.profile
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getProfileDetails: getProfileDetails
        }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Profile);