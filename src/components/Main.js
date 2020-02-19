import React from 'react'
import Quote from './Quote'
import Header from './Header'
import '../App.css'

class Main extends React.Component {
    render() {
        return (
            <body className='App-header'>
                <Header />
                <Quote />
            </body>
        )
    }
}

export default Main