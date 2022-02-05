import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import germanFlag from '../../Images/germanFlag.png'
import './Reg.css'

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
    },
  }

  state = {
    German: false
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  handleGermanTitle = () => {
    this.setState({
      German: !this.state.German
    })
  }

  render() {
    return (
      <section className='reg'>
        <div className='banner'>
          <div className="Overlay">
            <div>
              <h1>Learn <span id='german' onClick={this.handleGermanTitle}>{this.state.German ? <span>Deutsch</span> : <span>German</span>}</span> from the best.</h1>
              <p id="spaced">Practice learning a language with the spaced reptition revision technique.</p>
              <div id="demo-credentials">
                <p id="spaced">Demo this app using:</p>
                <p id="spaced">Username: daniel61</p>
                <p id="spaced">Password: Password123!</p>
              </div>
            </div>
            <div className='sign_up'>
              <h2>Sign up</h2>
              <RegistrationForm
                onRegistrationSuccess={this.handleRegistrationSuccess}
              />
            </div>
          </div>
          <img id='flag' src={germanFlag} alt='german flag' />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute
