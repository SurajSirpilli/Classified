import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class Auto extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
           Auto
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    color: 'blue',
    fontSize: 24,
    padding: '10px'
  }
})


export default Auto;