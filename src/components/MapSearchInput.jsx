import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Search from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Map from '@material-ui/icons/Map'
import GetApp from '@material-ui/icons/GetApp'
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
	container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	}
})

class MapSearchInput extends React.Component{

  	componentDidMount(){

  		new window.google.maps.places.Autocomplete(document.getElementById('search-map'));
  	}

  	render(){

  		const { classes } = this.props

	  	return (
	  		<form className={classes.container} noValidate autoComplete="off">
	        	<Grid container spacing={8} alignItems="flex-end">
		          	<Grid item>
		            <Search />
		          	</Grid>
	          		<Grid item>
	            		<TextField id="search-map" label="Search Map" />
	          		</Grid>
	        	</Grid>
	        	<Divider />
	      	</form>
	  	)
	}

}

MapSearchInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapSearchInput);