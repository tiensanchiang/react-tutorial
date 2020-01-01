import React from 'react';
//import logo from './logo.svg';
import './App.css';

export default class App extends React.Component{
    constructor(props){
	super(props)
	this.state = {
	    count: 2
	}
    };

    isEven = (val) => { return this.state.count % 2 === 0}
    
    getClassName = (val) =>{
	return this.isEven(val)?
	       "bg-primary text-white text-center p-2 m-1":
	       "bg-secondary text-white text-center p-2 m-1"
    }

    handleClick = () => this.setState({ count: this.state.count+1})
        
    render = ()=>{
	return (
	    <div className="container-fluid p-4">
		<div className="row bg-info text-white p-2">
		    <div className="col font-weight-bold">Value</div>
		    <div className="col-6 font-weight-bold">Even?</div>
		</div>
		<div className="row bg-light p-2 border">
		    <div className="col">{ this.state.count }</div>
		    <div className="col-6">{ this.isEven( this.state.count )?"Even":"Odd" }</div>
		</div>
		<div className="row">
		    <div className="col">
			<button className="btn btn-info m-2"
				onClick={this.handleClick}>
			    Click Me
			</button>
		    </div>
		</div>

		<table className="table table-striped table-bordered table-sm">
		    <thead className="bg-info text-white">
			<tr><th>Value</th><th>Even?</th></tr>
		    </thead>
		    <tbody>
			<tr>
			    <td>{ this.state.count }</td>
			    <td>{ this.isEven(this.state.count)?"Even":"Odd"}</td>
			</tr>
		    </tbody>
		    <tfoot className="text-center">
			<tr>
			    <td colSpan="2">
				<button className="btn btn-info m-2"
					onClick={ this.handleClick}>
				    Click Me
				</button>
			    </td>
			</tr>
		    </tfoot>
		</table>

		<div className="m-2">
		    <div className="form-group">
			<label>Name:</label>
			<input className="form-control"/>
		    </div>
		    <div className="form-group">
			<label>City:</label>
			<input className="form-control"/>
		    </div>
		</div>
	    </div>
	)
	
    }
}

    
