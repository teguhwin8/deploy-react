import React from "react"

export default function Clicker() {
	function handleClick(e) {
		alert("Halo saya berhasil klik")
		e.preventDefault()
	}

	return <button onClick={handleClick}>Klik Saya</button>
}
