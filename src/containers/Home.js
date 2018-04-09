import React from 'react';

export default class Home extends React.Component {

  state= {

  }

	render() {		
		return (
			<div className="col-md-8" >
        <div className="row">
          <TaskInput />
        </div>
        <div className="row">
          <div className="col-md-8" >
            <TaskList />
          </div>
        </div>
			</div>
		);			
	}

}
