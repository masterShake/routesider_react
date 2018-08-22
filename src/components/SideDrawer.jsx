import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
};

class SideDrawer extends React.Component{

	render() {
	    const { classes } = this.props;

	    return (
	    	<Drawer anchor="right" open={this.props.drawerOpen} onClose={this.props.openDrawer}>
	         	<div
		            tabIndex={0}
		            role="button"
		            onClick={this.props.openDrawer}
		            onKeyDown={this.props.openDrawer}
	          	>
	            	menue stuff
	          	</div>
	        </Drawer>
	    );
	}
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideDrawer);