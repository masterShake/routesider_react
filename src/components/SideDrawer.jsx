import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MapSearchInput from './MapSearchInput.jsx'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Map from '@material-ui/icons/Map'
import GetApp from '@material-ui/icons/GetApp'
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
	drawerWrap: {
		zIndex: 900,
	},
	drawer: {
		maxWidth: 260,
	},
	listroot: {
		paddingLeft: 12,
	    width: '100%',
	    maxWidth: '260px',
	    backgroundColor: theme.palette.background.paper,
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
	            	<div className={classes.listroot}>
			        	<List component="nav">
							<ListItem button>
								<Map />
								<ListItemText primary="Map Builder" />
							</ListItem>
							<Divider />
							<ListItem button divider>
								<GetApp />
								<ListItemText primary="Installation" />
							</ListItem>
							<ListItem button>
								<AccountCircle />
								<ListItemText primary="Resume" />
							</ListItem>
			      		</List>
			      	</div>
	          	</div>
	        </Drawer>
	    );
	}
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideDrawer);