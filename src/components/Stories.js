import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import SlideShow from './SlideShow';

class Stories extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
    		<div className={css(styles.container)}>
          <div className={css(styles.header)}> 
              International Real Estate
          </div>
          <div>
            <div className={css(styles.title)}>
              House Hunting in London
            </div>
            <div className={css(styles.text)}> 
              This part can include related text with relevant images
            </div>
          </div>
         <div className={css(styles.slideShowContainer)}> 
            <SlideShow />
          </div>
    		</div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    textOverflow: 'elipsis',
    display: 'flow',
    flexDirection: 'column'
  },
  header: {
    fontSize: 14,
    color: 'black',
    textTransform: 'uppercase',
    paddingBottom: '14px'
  },
  title: {
    fontSize: 18,
    color: '#55a3d4',
    fontWeigt: 'bold',
    paddingBottom: '10px'
  },
  text: {
    fontSize: 14,
    color: 'black',
    fontWeigt: 'bold'
  },
  slideShowContainer: {
    padding: '20px 0'
  }
})


export default Stories;