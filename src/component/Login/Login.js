import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import './Login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            isError: ''
        };
        this.change = (e, param) => {
            switch (param) {
                case 'username':
                    this.setState({ username: e.target.value });
                    break;
                case 'password':
                    this.setState({ password: e.target.value });
                    break;
                    default:
                    break;
            }
        };
        this.submit = () => {
            const uName = this.state.username;
            const pwd = this.state.password;
            if (!uName){
                this.setState({isError:'Please enter username'});
            }
            else if (!pwd){
                this.setState({isError:'Please enter password'});
            }
            else if (typeof Storage !== 'undefined') {
              sessionStorage.setItem("username", this.state.username);
            this.props.history.push('/app');
               // this.props.history.push('/productlist');
            }
        };
        this.onEnterPress = (e) => {
            if (e.which === 13){
               this.submit();

            }
        };
    }
    render() {
        return (

            <main className="login">
            <div class="container">
                <section id="content">
                    <form action="">
                        <h1>Login Form</h1>
                        <div>
                            <input type="text" placeholder="Username" required="" id="username"
                            autoFocus
                            value={this.state.username}
                            onChange={(e) => this.change(e, 'username')}
                            onKeyPress={this.onEnterPress}
                             />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" required="" id="password"
                            value={this.state.password}
                            onChange={(e) => this.change(e, 'password')}
                            onKeyPress={this.onEnterPress}

                            />
                        </div>
                        <div className="login_error">{ this.state.isError }</div>
                        <div>
                            <button className="form_butt" type="button" onClick={(e) => this.submit(e)} value="Log in">Log in</button>
                            </div>
                            <div className="forgot_pass">
                    <ul className="register">
                        <li><Link to="/forgot">Forgot Password</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                        </div>
                    </form>

                </section>
            </div>
            </main>
        );
    }
}

export default Login;
