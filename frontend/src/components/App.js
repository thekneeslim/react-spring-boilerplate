import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: "Without anything"
        }
    }

    componentDidMount() {
        setInterval(this.hello, 250)
    }

    hello = () => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => this.setState({data: message}))
            .catch(err => {
                this.setState({data: err})
            })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {this.state.data}
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
