import React from 'react';
import './Task.css';

export default class TaskList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { taskList: this.props.taskList};
		this.listItems = this.listItems.bind(this);
	}

	taskDone (i) {
		document.getElementById(i).classList.remove('popup');
		if(document.getElementById(i).className === 'done') {
			document.getElementById(i).classList.remove('done');
		}
		else{
			document.getElementById(i).classList.add('done');
		}
	}

	deleteTask (i) {
		var array = this.state.taskList;
		array.splice(i,1);
		this.setState({taskList: array});
	}

	listItems(items) {
			var output=[];
			for(var i = 0; i < items.length; i++) {
				output.push(<li className='popup' key={i} id={i} onClick={this.taskDone.bind(this, i)}>{items[i]}<button onClick={this.deleteTask.bind(this, i)}>Delete</button></li>);
			}
			return output;
	}

	render() {		
		return (
			<ul>
				{this.listItems(this.props.taskList)}
			</ul>
		);			
	}

}