import React from 'react'
import Button from '@material-ui/core/Button'
import networkCaller from '../utils/network'
import '../App.css'

class Quote extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                quote: "What am I gonna say?"
            }
        }
    }

    async getPhraseFromApi() {
        const returnedQuote = await networkCaller('https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote')
        this.setState({ data: returnedQuote })
    }

    waiting() {
        this.setState({
            data: {
                quote: 'waiting...'
            }
        })

        this.getPhraseFromApi()
    }

    render() {
        let standardText = this.state.data.quote
        return (
            <div className='App-body'>
                <h2>{standardText}</h2>
                <Button onClick={this.waiting.bind(this)}>Click to Find Out</Button>
            </div>
        )
    }
}

export default Quote