import React from 'react';

export default function (ComposedComponent) {
    class Authentication extends React.Component {
        render() {
            let isAuth = localStorage.getItem("isAuth") === "true" ? true : false;
            return isAuth ? <ComposedComponent {...this.props} /> : null;
        }
    }

    return Authentication;
}