import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


const styles = {
  root: {
    width: 500,
    position: 'absolute',
    top: 'calc(100vh - 100px)',
    left: '50%',
    marginLeft: -250
  },
};

class MapBuilder extends React.Component {
  state = {
    value: 'recents',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Drop Pin" value="pin" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Draw Polygon" value="polygon" icon={<Icon>category</Icon>} />
        <BottomNavigationAction label="Frame View" value="frame" icon={<Icon>zoom_out_map</Icon>} />
        <BottomNavigationAction label="Code" value="code" icon={<Icon>code</Icon>} />
      </BottomNavigation>
    );
  }
}

MapBuilder.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MapBuilder);