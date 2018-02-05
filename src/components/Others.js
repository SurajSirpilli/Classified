import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class Others extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
           Others
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    color: 'yellow',
    fontSize: 24,
    padding: '10px'
  }
})


export default Others;