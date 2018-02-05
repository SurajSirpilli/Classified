import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
          <div className={css(styles.seperator)}> </div>
          <div className={css(styles.addLink)}>
            Place a classified add >>>
    		  </div>
        </div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'absolute',
    bottom: '0px',
    width: '100%',
    padding: '5px 0',
    textAlign: 'center'
  },
  seperator: {
    width: '90%',
    marginLeft: '5%',
    border: '1px solid grey'
  },
  addLink: {
    position: 'relative',
    color: 'blue',
    fontSize: 14,
    padding: '5px'
  }
})


export default Footer;