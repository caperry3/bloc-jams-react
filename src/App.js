import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
        <footer>
          <nav className="nav-bar">
            <div className="main-page-link">
              <button className="button-large"><Link to="/">MUSEK</Link></button>
            </div>
            <div className="choose-muse-link">
              <button className="button-large"><Link to="/library">choose muse</Link></button>
            </div>
          </nav>
        </footer>
      </div>
    );
  }
}

export default App;
