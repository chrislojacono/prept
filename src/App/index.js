import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import fbConnection from '../helpers/data/connection';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

fbConnection();
class App extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { user } = this.state;
    return (
      <>
      <div className="App">
        <Router>
        <NavBar/>
        <Routes user={user}/>
        </Router>
      </div>
      </>
    );
  }
}

export default App;
