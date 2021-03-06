import Button from 'antd/lib/button/index';
import Row from 'antd/lib/row/index';
import axios from 'axios'
import { useEffect, useState } from 'react'
import {
	Link,
	useParams
} from "react-router-dom";
const UserDetails = (props) => {

	const [user, setUser] = useState({})
	let { id } = useParams();

	function getUserDetails(id) {
		axios.get('https://jsonplaceholder.typicode.com/users/' + id)
			.then(res => {
				setUser(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}

	function convertToString(obj) {
		let tempStr = ""
		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				convertToString(obj[key])
			}
			else {
				tempStr = tempStr + obj[key] + ' '
			}
		}
		return tempStr
	}
	useEffect(() => {
		getUserDetails(id)
	}, [])


	return (
		<div>
			<Row justify="space-between">
				<h1>User Details for {user.name}</h1>
				<Link to="/">
					<Button id="back-button">Back</Button>
				</Link>
			</Row>
			<ul id="user-details">
				{
					Object.entries(user).map((obj) => (
						<li key={obj[0]}>{obj[0]} : { typeof (obj[1]) === 'object' ? convertToString(obj[1]) : obj[1]}</li>
					))
				}
			</ul>
		</div>
	)
}

export default UserDetails