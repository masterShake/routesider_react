import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Search from '@material-ui/icons/Search'
import Divider from '@material-ui/core/Divider'

const styles = {
	container: {
	    display: 'flex',
	    flexWrap: 'wrap',
	}
}

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