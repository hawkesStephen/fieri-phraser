import React from 'react';
import './App.css';
import networkCaller from './utils/network'
import Button from '@material-ui/core/Button'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {},
      text: 'What am I gonna say?'
    }
  }

  async componentDidMount() {
    const returnedQuote = await networkCaller('https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote')
    this.setState({ data: returnedQuote })
  }

  changeText() {
    this.setState({
      text: this.state.data.quote
    })
  }

  reset() {
    this.setState({
      text: 'What am I gonna say?'
    })
    this.componentDidMount()
  }

  render() {
    let standardText = this.state.text
    return (
      <>
        <body className='App-header'>
          <div>
            <h1>Welcome to The Fieri Phraser</h1>
            <img className='App-logo' src="https://media.gq.com/photos/59dfc6d9d61cb80476584e18/16:9/w_1280,c_limit/guy-fieiri-flame.jpg" alt="Guy Fieri"></img>
          </div>
          <div className='App-body'>
            <h2>{standardText}</h2>
            <Button onClick={this.changeText.bind(this)}>Click to Find Out</Button>
            <Button onClick={this.reset.bind(this)}>Reset</Button>
          </div>
        </body>
      </>
    )
  }
}

export default App;
