import React, { Component } from 'react';
import ButtonAppBar from './components/ButtonAppBar.jsx'
import './style/App.css';

class App extends Component {
	
	constructor(props){
		super(props)

		this.state = {
			drawerOpen : false
		}
	}

	openDrawer(){

		const drawerOpen = this.state.drawerOpen ? false : true

		this.setState({ drawerOpen })
	}

	render() {

		return (
			<div className="App">
				<ButtonAppBar onclick={() => this.openDrawer()} />
			</div>
		);
	}
}

export default App;
