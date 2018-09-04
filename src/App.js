import React, { Component } from 'react';
import SideDrawer from './components/SideDrawer.jsx'
import ButtonAppBar from './components/ButtonAppBar.jsx'
import MapBuilder from './components/MapBuilder.jsx'
import './style/App.css';

class App extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			drawerOpen : false,
			map : null

		}

		// bind the openDrawer even handler
		this.openDrawer = this.openDrawer.bind(this)
	}

	openDrawer(){

		const drawerOpen = this.state.drawerOpen ? false : true

		this.setState({ drawerOpen })
	}

	componentDidMount(){

		// if(typeof google !== 'undefined' && window.mapTrig === false){

		// 	console.log('app.js')
		// }

		// initialize the google map
		this.setState({
			map : new window.google.maps.Map( 
					// map element
					window.document.getElementById("map-canvas"),
					// map options
					{
						center: {lat: 30.2672, lng: -97.7431}, 
						zoom: 13 
					}
		    	  )
		})
	}

	render() {

		return (
			<div className="App">
        		<div id="map-canvas"></div>
				<SideDrawer openDrawer={this.openDrawer} drawerOpen={this.state.drawerOpen}/>
				<ButtonAppBar openDrawer={this.openDrawer}/>
				<MapBuilder map={this.state.googleMap} />
			</div>
		);
	}
}

export default App;
