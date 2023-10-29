import React from 'react';
import { MdClose } from 'react-icons/md';

class Account extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPassword:false,
    }
  }

  togglePasswordVisibility = () => {
    this.setState((prevState) => ({
      passwordVisible: !prevState.passwordVisible,
    }));
  };
  render() {
    const { passwordVisible } = this.state;
    const buttonStyles = {
      height: '68px', 
    };
    const registrStyles = {
      width: '121px',
      height: '32px',
    };

    return (
      <div className="user-profile">
        <style>
          {
            `
#overlay {
  position: fixed;
  top:0%;
  left:0%;
  width: 100%;
  height: 100%;
  background-color: rgba(252, 213, 186, 0.8); 
  z-index: 500; 
}            `
          }
        </style>
        <div className="authorization">
            <button onClick={this.props.closeAccount}className="close-auth"><MdClose /></button>
            <form className="auth-form">
              <div className="input-group">
                <label htmlFor="number" className="number-label">Number</label>
                <input type={passwordVisible ? 'text' : 'password'} className="auth-number" id="number" placeholder="+1 912" />
                <button type="button" onClick={this.togglePasswordVisibility} className="visible-button">{passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
              <button style={buttonStyles} className="auth-submit" type="submit">Enter</button>
            </form>
            <div className="user-actions">
              <button className="registr" style={registrStyles} href="#">Registration</button>
              <a className="reset" href="#">Forgot password?</a>
            </div>
          </div>
        </div>
    );
  }
}



export default Account;



