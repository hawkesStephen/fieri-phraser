import React from 'react'

class Login extends React.Component {
    render() {
        return(
            <div>
                <button
                onClick={this.props.login}
                >Click Me
                </button>
            </div>
        )
    }
}

export default Login