import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import SampleRouting from './components/SampleRouting';
import App from './components/App';
import NotFound from './components/NotFound'


const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/anotherPage">Another Page</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/anotherPage" component={SampleRouting} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
