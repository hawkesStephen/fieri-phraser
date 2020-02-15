import React from 'react';
import './App.css';
import networkCaller from './utils/network'
import Button from '@material-ui/core/Button'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        quote: 'What am I gonna say?'
      }
    }
  }


  async getPhraseFromApi() {
    const returnedQuote = await networkCaller('https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote')
    this.setState({ data: returnedQuote })
  }

  render() {
    let standardText = this.state.data.quote
    return (
      <>
        <body className='App-header'>
          <div>
            <h1>Welcome to The Fieri Phraser</h1>
            <img className='App-logo' src="https://media.gq.com/photos/59dfc6d9d61cb80476584e18/16:9/w_1280,c_limit/guy-fieiri-flame.jpg" alt="Guy Fieri"></img>
          </div>
          <div className='App-body'>
            <h2>{standardText}</h2>
            <Button onClick={this.getPhraseFromApi.bind(this)}>Click to Find Out</Button>
          </div>
        </body>
      </>
    )
  }
}

export default App;
