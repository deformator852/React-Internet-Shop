import React from 'react';
import { MdClose } from 'react-icons/md';

class Account extends React.Component {
  closeAccountAndRedirectToHome = () => {
    window.location.href = '/'; 
  }
  render() {
    const buttonStyles = {
      height: '68px', 
    };
    const registrStyles = {
      width: '121px',
      height: '32px',
    };

    return (
      <div className="user-profile">
        <div className="authorization">
            <button onClick={this.closeAccountAndRedirectToHome}className="close-auth"><MdClose /></button>
            <form className="auth-form">
              <div className="input-group">
                <label htmlFor="number" className="number-label">Number</label>
                <input className="auth-number" id="number" placeholder="+1 912" />
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

