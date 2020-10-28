import React, { Component } from "react"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"

function Home() {
	return <h1>Home</h1>
}

function Users() {
	return (
		<div>
			<h1>Lists Users</h1>
			<ul>
				<li>
					<Link to="user/teguh">Teguh</Link>
				</li>
				<li>
					<Link to="user/widodo">Widodo</Link>
				</li>
			</ul>
		</div>
	)
}

function UserDetail({ match }) {
	return <h1>Detail User : {match.params.name}</h1>
}

function NoMatch() {
	return <h1>404, Halaman tidak ditemukan</h1>
}

export default class Routing extends Component {
	render() {
		return (
			<BrowserRouter>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/users">User</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/" exact component={Home}></Route>
					<Route path="/users" exact component={Users}></Route>
					<Route
						path="/user/:name"
						exact
						component={UserDetail}
					></Route>
					<Route component={NoMatch}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}
