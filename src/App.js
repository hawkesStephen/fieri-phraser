import React from 'react'
import './App.css'
import Quote from './components/Quote'
import AddPhrase from './components/AddPhrase'
import { BrowserRouter, Route } from 'react-router-dom'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <body className='App-header'>
            <div>
              <h1>Welcome to The Fieri Phraser</h1>
              <img className='App-logo' src="https://media.gq.com/photos/59dfc6d9d61cb80476584e18/16:9/w_1280,c_limit/guy-fieiri-flame.jpg" alt="Guy Fieri"></img>
            </div>
            <Route path='/' exact component={Quote} />
            <Route path='/add' component={AddPhrase} />
          </body>
      </BrowserRouter>
    )
  }
}

export default App;
