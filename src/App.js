import React, { Component } from 'react';
import SideDrawer from './components/SideDrawer.jsx'
import ButtonAppBar from './components/ButtonAppBar.jsx'
import './style/App.css';

class App extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			drawerOpen : false
		}

		// bind the openDrawer even handler
		this.openDrawer = this.openDrawer.bind(this)
	}

	openDrawer(){

		const drawerOpen = this.state.drawerOpen ? false : true

		this.setState({ drawerOpen })

		console.log(this.state)
	}

	render() {

		return (
			<div className="App">
				<SideDrawer openDrawer={this.openDrawer} drawerOpen={this.state.drawerOpen}/>
				<ButtonAppBar openDrawer={this.openDrawer}/>
			</div>
		);
	}
}

export default App;
