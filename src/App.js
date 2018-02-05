import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Router, Route } from 'react-router-dom';
import history from './lib/history';
import Classifieds from './components/Classifieds';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className={css(styles.container)}>
          <Route exact path="/" component={Classifieds} />
        </div>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f8ff',
    height: '100vh'
  }
})


export default App;
