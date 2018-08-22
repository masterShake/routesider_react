import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MapSearchInput from './MapSearchInput.jsx'

const styles = theme => ({
	drawerWrap: {
		zIndex: 900,
	},
	drawer: {
		maxWidth: 260,
	}
});

class SideDrawer extends React.Component{

	render() {
	    const { classes } = this.props;

	    return (
	    	<Drawer anchor="right" open={this.props.drawerOpen} onClose={this.props.openDrawer} className={classes.drawerWrap}>
	         	<div
		            tabIndex={0}
		            role="button"
		            className={classes.drawer}
	          	>
	            	<MapSearchInput />
	          	</div>
	        </Drawer>
	    );
	}
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideDrawer);