import React from 'react'
import './Header.css';
import Button from '../components/Button';

class Header extends React.Component {

    render() {
        return (
            <div className = 'header'>
                <div className = 'header-color-box'/>
                <div className = 'header-buttons'>
                    <Button txt = 'Login' />

                    <Button txt = 'Sign up!'/>
                </div>
            </div>

        );
    }
}

export default Header