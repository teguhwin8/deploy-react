import React, { Component } from "react"

export default class Toggle extends Component {
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
