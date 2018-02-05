import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class AdModal extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
           AdModal
           Used for Advertising 
           this can include images and other 
           stuff.
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    padding: '10px',
    border: '1px solid grey',
    borderTop: '2px solid black',
    borderLeft: '2px solid black'
  }
})


export default AdModal;