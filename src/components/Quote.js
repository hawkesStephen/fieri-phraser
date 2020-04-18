import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import '../App.css'

let apiUrl = 'https://4ozc0qiiec.execute-api.us-east-1.amazonaws.com/prod/quote'

const Quote = () => {
    const [quote, setQuote] = useState('What am I gonna say?')

    const getPhraseFromApi = async () => {
        const response = await fetch(apiUrl)
        const { quote } = await response.json()
        setQuote(quote)
    }

    const displayPhrase = () => {
        setQuote('Waiting...')
        getPhraseFromApi()
    }

    return (
        < div className='App-body' >
            <h2>{quote}</h2>
            <Button onClick={displayPhrase}>Click to Find Out</Button>
        </div >
    )
}

export default Quote