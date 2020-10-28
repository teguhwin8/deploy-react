import React, { Component } from "react"
import "./App.css"

// Timer Component
class Timer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			time: props.start,
		}
	}

	componentDidMount() {
		this.addInterval = setInterval(() => this.increase(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.addInterval)
	}

	increase() {
		this.setState((state, props) => ({
			time: parseInt(state.time) + 1,
		}))
	}

	render() {
		return (
			<div>
				<h1>{this.state.time} Detik</h1>
			</div>
		)
	}
}

// Handle Event with Function (Clicker)
function Clicker() {
	function handleClick(e) {
		alert("Halo saya berhasil klik")
		e.preventDefault()
	}

	return <button onClick={handleClick}>Klik Saya</button>
}

// Handle Event with Class (Toggle)
class Toggle extends Component {
	constructor(props) {
		super(props)
		this.state = {
			toggleStatus: false,
		}

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState((state) => ({
			toggleStatus: !state.toggleStatus,
		}))
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.toggleStatus ? "Hidup" : "Mati"}
			</button>
		)
	}
}

export class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <Timer start="0" /> */}
				{/* <Clicker /> */}
				<Toggle />
			</div>
		)
	}
}

export default App
