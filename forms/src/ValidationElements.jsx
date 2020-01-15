import React from "react";
import ValidationEditor from "./ValidationEditor";
import Display from "./Display";

export default class ValidationElements extends React.Component{

    constructor(props){

	super(props);
	this.state = {
	    formData: {}
	}
    }

    submitData = (newData)=>{
	this.setState({
	    formData: newData
	})
    }

    render(){
	return	<div className="container-fluid">
	    <div className="row p-2">
		<div className="col-6">
		    <ValidationEditor submit={this.submitData}/>
		</div>
		<div className="col-6">
		    <Display data={ this.state.formData }/>
		</div>
	    </div>
	</div>
    }
}
