import React, { Component } from 'react'
import List from './List'

export default class Todo extends Component {
  constructor(props) {
		super(props)
		this.state = {
			todoItem: "",
			items: [],
		}
	}

	handleChange = (event) => {
		this.setState({
			todoItem: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		if (this.state.todoItem !== "") {
			this.setState({
				todoItem: "",
				items: [...this.state.items, this.state.todoItem],
			})
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						onChange={this.handleChange}
						value={this.state.todoItem}
					/>
					<button type="submit">Add</button>
				</form>

				<List items={this.state.items} />
			</div>
		)
	}
}
