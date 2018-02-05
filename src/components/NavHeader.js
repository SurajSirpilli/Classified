import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { NavLink } from 'react-router-dom';
import Tab from './Tab';

class NavHeader extends Component {
	constructor(...args) {
      super(...args);
      this.state = {
        selected: 'real estate'
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick (tab) {
    const {onChange} = this.props;
    this.setState({selected:tab});
    onChange(tab);
  }

  render() {
    const {tabs} = this.props;
    const {selected} = this.state;
  	return (
  		<div className = {css(styles.container)}> 
  			 {tabs.map( (tab, index) => (
            <Tab
              key = {index} 
              tab = {tab}
              isSelected = {tab === selected}
              onclick = {this.onClick}
            />
         ))}
  		</div>
  	);
  }
}

const styles = StyleSheet.create({
  container: {
  	position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  }
})


export default NavHeader;