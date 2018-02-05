import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import Stories from './Stories';
import Links from './Links';
import AdModal from './AdModal';
import AdDesc from './AdDesc';

class RealEstate extends Component {
	constructor(...args) {
        super(...args);
    }

    render() {
      const {selected} = this.props;
    	return (
        <div className={css(styles.container)}>
      		<div className={css(styles.topBox)}>
            <div className={css(styles.firstCol)}>
              <Stories />
            </div>
            <div className={css(styles.secondCol)}>
              <Links />
            </div>
      		</div>
          <div className={css(styles.seperator)}> </div>
          <div className={css(styles.bottomBox)}> 
            <div className={css(styles.firstCol)}>
              <AdModal />
            </div>
            <div className={css(styles.secondCol)}>
              <AdDesc />
            </div>
          </div>
        </div>
    	);
    }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    color: 'red',
    fontSize: 24,
    display: 'flex',
    flexDirection: 'column'
  },
  topBox: {
    float: 'left',
    display: 'flex',
    flexDirection: 'row',
    height: '55%',
    padding: '5%',
    width: '90%',
  },
  seperator: {
    width: '90%',
    marginLeft: '5%',
    border: '1px solid grey'
  },
  bottomBox: {
    height: '40%',
    padding: '5%',
    float: 'left',
    display: 'flex',
    flexDirection: 'row'
  },
  firstCol: {
    width: '65%',
    paddingRight: '5%'
  },
  secondCol: {
    width: '30%',
  }
})


export default RealEstate;