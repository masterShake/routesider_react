import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../style/App.css';

const styles = {
	card: {
		minWidth: 275,
		position: 'absolute',
		bottom: 'calc(100% + 12px)',
		left: 0,
		overflow: 'visible'
	},
	// arrowDown: {
	// 	width: 0, 
	// 	height: 0, 
	// 	borderLeft: '12px solid transparent',
	// 	borderRight: '12px solid transparent',
	// 	borderTop: '12px solid #fff',
	// 	position: 'absolute'
	// },
	// triangle: {
	// 	position: 'relative',
	// 	margin: 20,
	// 	padding: 10,
	// 	boxSizing: 'border-box',
	// 	background: '#bada55',
	// 	boxShadow: '0px 3px 3px 0 rgba(0, 0, 0, 0.4)',
	// 	'&:after': {
	// 	    content: "",
	// 	    position: 'absolute',
	// 	    width: 0,
	// 	    height: 0,
	// 	    marginLeft: -5,
	// 	    bottom: -20,
	// 	    left: '50%',
	// 	    boxSizing: 'border-box',
	// 	    border: '1em solid black',
	// 	    borderColor: 'transparent transparent #bada55 #bada55',
	// 	    transformOrigin: '0 0',
	// 	    transform: 'rotate(-45deg)',
	// 	    boxShadow: '-3px 3px 3px 0 rgba(0, 0, 0, 0.4)'
	// 	}
 //  	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		marginBottom: 16,
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
};

function Popover(props) {
	const { classes } = props;
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography className={classes.title} color="textSecondary">
					Word of the Day
				</Typography>
				<Typography variant="headline" component="h2">
					be
					{bull}
					nev
					{bull}o{bull}
					lent
				</Typography>
				<Typography className={classes.pos} color="textSecondary">
					adjective
				</Typography>
				<Typography component="p">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
			<div className="triangle"></div>
		</Card>
	);
}

Popover.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Popover);