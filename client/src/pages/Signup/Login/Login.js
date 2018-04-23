import React, { Component } from 'react';
import API from "../../../utils/API";
import Auth from '../../../utils/Auth';
import Background from './bg.jpg';
import { Input } from "../../../components/Form";
import './Login.css';

var styles = {
    backgroundImage: 'url('+Background+')'
};

class Login extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  componentDidMount() {
  }

  authenticate = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    API.authenticateUser(userData)
      .then(res => {
        // clear error message
        this.setState({ errorMessage: null });
        console.log(res);
        Auth.authenticateUser(res.data.token);

        // hard redirect to / to reload all the state and nav
        window.location.href = "/nominated";
      })
      .catch(err => {this.setState({ errorMessage: err.response.data.message }); });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFocus = event => {
    event.target.select();
  };

  handleLogin = event => {
    event.preventDefault();
    if (this.state.email && this.state.password && this.state.password.length >= 8) {
      this.authenticate();
    } else {
      this.setState({ errorMessage: "Please enter valid username and password to sign in."})
    }
  };

  render() {
    return (
        <div className="container" >
          <div className="login" style={ styles } align="center">
            <div className="row">
              <div className="col-md-3" />
              <div className="col-md-6">
                <div className="col align-self-center box">
                  <div>{this.state.errorMessage}</div>
                  <form>
                    <div className="form-group">
                    <Input inputProps={{
                      value:this.state.email,
                      onChange:this.handleInputChange,
                      onFocus:this.handleFocus,
                      name:"email",
                      placeholder:"Email (required)",
                      className:"form-control",
                      required:"",
                      autoFocus:true}}
                      label="Email"
                    />
                    </div>
                    <div className="form-group">
                    <Input
                      inputProps={{value:this.state.password,
                      onChange:this.handleInputChange,
                      name:"password",
                      type:"password",
                      placeholder:"Password (required)",
                      className:"form-control",
                      minlength:8,
                      required:true}}
                      label="Password"
                    />
                    </div>
                    <p className="lead">
                    <button
                      disabled={!(this.state.email && this.state.password && this.state.password.length >= 8)}
                      onClick={this.handleLogin}
                      className="btn btn-primary btn-block"
                    >
                      Login
                    </button>
                    </p>
                    <p className="backButton"><a href="/signup" className="btn btn-success">Register</a></p>
                  </form>
                </div>
              </div>
              <div className="col-md-3" />
              </div>
          </div>
        </div>
    );
  }
}

export default Login;
