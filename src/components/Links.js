import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class Links extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
          <div className={css(styles.header)}> Find Properties </div>
          <ul className={css(styles.list)}>
            <li> Go to Real Estate Section </li>
            <li> Search for Properties </li>
            <li> Download the Real Estate App </li>
            <li> Commercial Real Estate </li>
            <li> Video ShowCase Real Estate </li>
            <li> Post an Ad </li>
          </ul>
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    fontSize: 14,
    textOverflow: 'elipsis'
  },
  header: {
    fontSize: 14,
    color: 'black',
    textTransform: 'uppercase',
    textOverflow: 'elipsis'
  },
  list: {
    marginLeft: '-15px',
    color: '#55a3d4'
  }
})


export default Links;