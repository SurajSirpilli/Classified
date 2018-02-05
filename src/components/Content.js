import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import RealEstate from './RealEstate';
import Auto from './Auto';
import Jobs from './Jobs';
import Others from './Others';
import Footer from './Footer';

class Content extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
          { (selected === 'real estate') && <RealEstate />}
          { (selected === 'jobs') && <Jobs />}
          { (selected === 'autos') && <Auto />}
          { (selected === 'all classifieds') && <Others />}
          <Footer />
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    backgroundColor: 'white',
    border: '1px solid grey',
    height: '600px'
  }
})


export default Content;