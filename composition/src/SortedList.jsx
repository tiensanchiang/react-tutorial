import React from "react";
import GeneralList from "./GeneralList";
import ProActionButton from "./ProActionButton";

export default class SortedList extends React.Component{

    constructor(props){
	super(props);
	this.state = {
	    sort: false
	}
    }

    getList = ()=>
	this.state.sort?[...this.props.list].sort():this.props.list;

    toggleSort = ()=>
	this.setState({
	    sort: !this.state.sort
	})

    render(){
	return (
	    <div>
		<GeneralList list={ this.getList() } theme="info"/>
		<div className="text-center m-2">
		    <ProActionButton theme="primary" text="Sort"
				  callback={ this.toggleSort }/>
		</div>
	    </div>
	)
    }

}
