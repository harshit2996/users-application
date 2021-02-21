import Button from 'antd/lib/button/index';
import Row from 'antd/lib/row/index';
import Col from 'antd/lib/col/index';
import Table from 'antd/lib/table/index';
import { useState } from 'react';
import {
	Link
} from "react-router-dom";

const { Column, ColumnGroup } = Table;

const AllUsers = (props) => {

	const [pageSize, setPageSize] = useState(5)

	function flatten(obj) {
		let tempStr = ""
		for (const key in obj) {
			if (typeof obj[key] === 'object') {
				flatten(obj[key])
			}
			else {
				tempStr = tempStr + obj[key] + ' '
			}
		}
		return tempStr
	}

	return (
		<div>
			<Row justify="space-between">
				<h1>List of All Users</h1>
				<Col>
					<label htmlFor="page-size"  > Page Size </label>
					<input value={pageSize} type="number" id="page-size" onInput={(e) => { if (e.target.value < 51 && e.target.value > 0) { setPageSize(e.target.value) } }}></input>
				</Col>
			</Row>
			<Table dataSource={props.users}
				rowKey={user => user.id}
				pagination={{ pageSize: pageSize, showQuickJumper: true }}
				showSorterTooltip={true}
			>
				{
					(props.users[0]) ? Object.keys(props.users[0]).map((column, index) => (
						(column==='email'||column==='name')?
							<Column title={column} dataIndex={column} key={index} sorter={(a, b)=>a[column].localeCompare(b[column])}>{column}</Column>
							:<Column title={column} dataIndex={column} key={index} 
									render={(text, user) => (
										(typeof (user[column]) !== 'object') ? user[column] : flatten(user[column])
									)}
							/>
					)) : null
				}
				<ColumnGroup
					title="Actions"
					colSpan={2}
				>
					<Column
						colSpan={0}
						key="actions"
						render={(text, user) => (
							<Link to={"/user/" + user.id}><Button className="open-button">Open</Button></Link>
						)}
					/>
					<Column
						colSpan={0}
						render={(text, user) => (
							<Button onClick={() => props.dUser(user)} className="delete-button">Delete</Button>
						)}>
					</Column>
				</ColumnGroup>
			</Table>
		</div>
	)
}

export default AllUsers