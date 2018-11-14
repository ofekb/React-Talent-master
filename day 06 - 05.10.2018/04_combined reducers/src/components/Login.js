import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    login = () => {
        let userName = this.refs.userName.value;
        let password = this.refs.userPassword.value;
        this.props.dispatch(
             {
                 type:"LOGIN",
                 payload:{userName,password}
             }
        );
      
    }

    logout = () => {
        this.props.dispatch({"type":"LOGOUT"});
    }

    render() {
        if (this.props.name === "Guest")
            return (
                <div className="jumbotron text-center">
                    <h1>Welcome to this site</h1>

                    <div className="input-group">
                        <p>Name:</p>
                        <input type="text" className="form-control" size="50" ref="userName" />
                    </div>


                    <div className="input-group">
                        <p>Password</p>
                        <input type="password" className="form-control" size="50" ref="userPassword" />
                    </div>
                    <br />
                    <div className="input-group">
                        <button className="btn btn-danger" onClick={this.login}>Login</button>
                    </div>

                </div>)

        return (
            <button className="btn btn-danger" onClick={this.logout}>Logout</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.user.userName
    };
}


const reduxLogin = connect(mapStateToProps)(Login);
export default reduxLogin;
