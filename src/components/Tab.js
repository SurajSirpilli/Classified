import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';

class Tab extends Component {
  constructor(...args) {
        super(...args);
  }

  render() {
    const {tab, isSelected, onclick} = this.props;
    const className = css(
      isSelected ? styles.selected: styles.notSelected,
      styles.tab
    );

  	return (
            <div className={className} onClick={onclick.bind(null,tab)}> {tab} </div>
          );
  }
}

const styles = StyleSheet.create({
  notSelected: {
    color: 'grey',
    backgroundColor: '#d1d9e1',
    fontSize: 16,
    padding: '5px 10px',
    textTransform: 'uppercase',
    border: '1px solid grey',
    borderLeft: 'none',
    borderBottom: 'none',
    ':first-of-type': {
      borderLeft: '1px solid grey'
    }
  },
  selected: {
    color: 'grey',
    backgroundColor: '#fff',
    fontSize: 16,
    padding: '5px 10px',
    textTransform: 'uppercase',
    border: '1px solid grey',
    borderLeft: 'none',
    borderBottom: 'none',
    ':first-of-type': {
      borderLeft: '1px solid grey'
    }
  }
})


export default Tab;