import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import './Login.css'

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section className='banner_login'>
        <div className='Overlay_login'>
          <h2>Login</h2>
          <p>Demo</p>
          <p>Username: daniel61</p>
          <p>password: Pass123!</p>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </div>
      </section>
    );
  }
}

export default LoginRoute
