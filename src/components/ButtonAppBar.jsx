import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { OPEN_DRAWER } from '../actions';

// const styles = theme => ({
//   root: {
//     padding: theme.spacing.unit,
//     [theme.breakpoints.down('sm')]: {
//       backgroundColor: theme.palette.secondary.main,
//     },
//     [theme.breakpoints.up('md')]: {
//       backgroundColor: theme.palette.primary.main,
//     },
//     [theme.breakpoints.up('lg')]: {
//       backgroundColor: green[500],
//     },
//   },
// });

const styles = theme => ({
	root: {
		[theme.breakpoints.down('sm')]: {
			maxWidth: 56,
			position: "absolute",
			right: 12,
			top: 12
		}
	},
	flex: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
});

class ButtonAppBar extends React.Component {


	openDrawer(){
		this.props.openDrawer()
	}
	
	render(){
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton className={classes.menuButton} onClick={() => this.props.openDrawer()} color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

ButtonAppBar.propTypes = {
	classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    rootReducer: state
  }
}

export default withStyles(styles)(ButtonAppBar);