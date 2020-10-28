import React, { Component } from "react"

export default class UsersApi extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			isLoading: true,
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((data) => this.setState({ users: data, isLoading: false }))
	}

	render() {
		const { users, isLoading } = this.state

		if (isLoading) {
			return <p>Loading...</p>
		}

		return (
			<ul>
				{users.map((item, index) => (
					<li key={index}>{item.name}</li>
				))}
			</ul>
		)
	}
}
