import React from 'react';

class Account extends React.Component {
  render() {
    const buttonStyles = {
      height: '68px', // Устанавливаем высоту кнопки в 60 пикселей
    };

    return (
      <div className="user-profile">
        <div className="authorization">
            <form className="auth-form">
              <div className="input-group">
                <label htmlFor="number" className="number-label">Number</label>
                <input className="auth-number" id="number" placeholder="+1 912" />
              </div>
              <button style={buttonStyles} className="auth-submit" type="submit">Enter</button>
            </form>
          </div>
        </div>
    );
  }
}



export default Account;

