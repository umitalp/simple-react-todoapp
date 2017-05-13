import React from 'react';
import './Task.css';

export default class TaskForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit(event)	{
		event.preventDefault();
		if(this.state.value !== ''){
			this.props.updateList(this.state.value);
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
  			<label>
  				Task:  <input type="text" placeholder="Enter task here.." value={this.state.value} onChange={this.handleChange} />
  			</label>  <input type="submit" value="Add" />
			</form>
		);
	}

}