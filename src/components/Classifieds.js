import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import NavHeader from './NavHeader';
import Content from './Content';

class Classifieds extends Component {
	constructor(...args) {
        super(...args);
        this.state = {
        	selected: 'real estate'
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(tab) {
    	this.setState({selected: tab})
    }


    render() {
    	const tabs = ['real estate', 'jobs', 'autos', 'all classifieds'];
    	const {selected} = this.state;
    	return (
    		<div className={css(styles.container)}> 
    			<div className={css(styles.header)}> New York Times Classifieds </div>
    			<div className={css(styles.classifieds)}>  
    				<NavHeader 
    					tabs= {tabs}
    					onChange= {this.onChange}
    				/>
    				<Content 
    					selected= {selected}
    				/>
    			</div>  
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	backgroundColor: '#f7f8ff',
  	position: 'relative'
  },
  header: {
  	position: 'relative',
  	margin: '0 25%',
  	padding: '25px 0',
  	fontSize: 36,
    fontWeight: 'bold',
  },
  classifieds: {
  	position: 'relative',
  	boxSizing: 'border-box',
    backgroundColor: '#f7f8ff',
    height: '100vh',
    width: '50%',
    margin: '0 25%'
  }

})


export default Classifieds;