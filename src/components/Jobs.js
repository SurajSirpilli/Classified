import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class Jobs extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
           Jobs
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    color: 'green',
    fontSize: 24,
    padding: '10px'
  }
});


export default Jobs;