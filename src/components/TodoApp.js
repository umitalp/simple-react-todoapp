import React from 'react';
import './Task.css';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

var taskList = [];

export default class TodoApp extends React.Component {
	
	constructor(){
		super();
		this.state = { tasks: taskList };		
		}

	updateList(input) {
		var updatedList = this.state.tasks;
		if(updatedList.indexOf(input)===-1)	{
				updatedList.push(input);
				this.setState({ tasks: updatedList });
			}
		}

	render() {		
		return (
			<div>
				<TaskForm updateList={this.updateList.bind(this)} />
				<TaskList taskList={this.state.tasks} />							
			</div>
		);			
	}

}
