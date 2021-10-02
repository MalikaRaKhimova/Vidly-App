import React, { Component } from 'react'

class LoginForm extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
    }
    render() { 
        return <div className="container">
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username"></label>
                    <input id="username" type="text" className="form-control" />Username</div>
                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input id="password" type="text" className="form-control" />Password</div>
                <button className="btn btn-primary mt-4">Login</button>
            </form>
        </div>;
    }
}
 
export default LoginForm;