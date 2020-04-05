import React from 'react';
import Users from './components/users'

class App extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/show-all-users')
            .then(response => response.json())
            .then((data) => {this.setState({ users: data })})
            .catch(console.log)
    }

    render () {
        return (
         <Users users = {this.state.users}/>
        );
    }
}

export default App;
