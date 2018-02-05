import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class AdDesc extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
          Description of the Ad, 
          on the right is here 
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    color: 'blue',
    fontSize: 18,
    textOverflow: 'elipsis'
  }
})


export default AdDesc;