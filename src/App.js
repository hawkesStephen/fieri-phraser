import React from 'react'
import './App.css'
import Main from './components/Main'
import Login from './components/Login'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }
  

  switchLogin() {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() {
    return (
      this.state.isLoggedIn ? <Main /> : <Login login={this.switchLogin.bind(this)}/>
    )
  }
}

export default App;
