import React from 'react'
import './Button.css'

class Button extends React.Component {

    render() {
        return <button type="button" className = 'button'>{this.props.txt}</button>;
    }

}



export default Button