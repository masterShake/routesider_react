import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import MapSearchInput from './MapSearchInput.jsx'

const styles = theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			maxWidth: 56,
			position: "absolute",
			right: 12,
			top: 12
		},
		[theme.breakpoints.up('md')]: {
			position: "absolute",
			right: '6%'
		}
	},
	toolbar: {
		[theme.breakpoints.between('xs','md')]: {
			minHeight: 56,
			paddingLeft: 16,
			paddingRight: 16
		},
		[theme.breakpoints.up('md')]: {
			minHeight: 64,
			paddingLeft: 24,
			paddingRight: 24,
			display: 'flex',
			justifyContent: 'flex-end'
		}
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
		// [theme.breakpoints.up('md')]: {
		// 	display: 'none'
		// }
	},
});

class ButtonAppBar extends React.Component {
	
	render(){
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar className={classes.toolbar}>
						<Hidden mdUp>
							<IconButton className={classes.menuButton} onClick={this.props.openDrawer} color="inherit" aria-label="Menu">
								<MenuIcon />
							</IconButton>
						</Hidden>
						<Hidden smDown>
							<Button className={classes.button}>Map Builder</Button>
							<Button className={classes.button}>Installation</Button>
							<Button className={classes.button}>Resume</Button>
							<MapSearchInput />
						</Hidden>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);