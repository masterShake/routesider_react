import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../style/App.css';

const styles = theme => ({
	card: {
		minWidth: 275,
		position: 'absolute',
		bottom: 'calc(100% + 12px)',
		left: 0,
		overflow: 'visible'
	},
	header: {
		flexGrow: 1,
		textAlign: 'center'
	},
	ptitle: {
		display: 'table-cell',
		margin: 'auto',
		verticalAlign: 'middle'
	},
	button: {
	    margin: theme.spacing.unit,
	    height: 30,
	    width: 30
	},
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
});

class Popover extends React.Component{

	render(){
		const { classes } = this.props;
		const bull = <span className={classes.bullet}>•</span>;

		return (
			<Card className={classes.card}>
				<div className={classes.header}>
					<Grid container spacing={0}>
						<Grid item xs={2}>
							<IconButton className={classes.button} aria-label="Close">
					        	<Icon>close</Icon>
					      	</IconButton>
						</Grid>
						<Grid item xs={8} className={classes.ptitle}>
							{this.props.title}
						</Grid>
						<Grid item xs={2}>
							<IconButton className={classes.button} aria-label="Contract">
					        	<Icon>expand_more</Icon>
					      	</IconButton>
						</Grid>
					</Grid>
				</div>
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
}

Popover.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Popover);