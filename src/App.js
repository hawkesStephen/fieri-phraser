import React from 'react';
import './App.css';
import Quote from './components/Quote';


class App extends React.Component {
  render() {
    return (
      <>
        <body className='App-header'>
          <div>
            <h1>Welcome to The Fieri Phraser</h1>
            <img className='App-logo' src="https://media.gq.com/photos/59dfc6d9d61cb80476584e18/16:9/w_1280,c_limit/guy-fieiri-flame.jpg" alt="Guy Fieri"></img>
          </div>
          <Quote />
        </body>
      </>
    )
  }
}

export default App;
