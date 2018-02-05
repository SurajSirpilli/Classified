import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class SlideShow extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
      /* Requires Adding Slide Show Functionality*/
    	return (
    		<div className={css(styles.container)}>
          SlideShow (Click to Open SlideShow)
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
    color: '#55a3d4',
    fontWeight: 'bold',
    fontSize: 14, 
  }
})


export default SlideShow;