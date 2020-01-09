import React from 'react';
import './App.css';
import ActionButton from './ActionButton';
import Message from './Message';
import ThemeSelector from './ThemeSelector';
import GeneralList from "./GeneralList";
import SortedList from "./SortedList";
import ProFeature  from "./ProFeature";
import ProController from "./ProController";
import ProFeatureRender from "./ProFeatureRender";
import ProModeContext from "./ProModeContext";
import ErrorBoundary from "./ErrorBoundary";

const ProList = ProFeature(SortedList);
const ProList2 = ProController(SortedList);

export default class Main extends React.Component{

    constructor(props){
	super(props);
	this.state = {
	    counter: 0,
	    names: ["Zoe", "Bob", "Alice", "Dora", "Joe"],
	    cities: ["London", "New York", "Paris", "Milan", "Boston"],
    	    proMode:false,
	    proContextData:{
		proMode: false
	    },
	};

    }

    incrementCounter = ()=>{
	this.setState({ counter: this.state.counter+1 });
    }

    toggleProMode = ()=>{
	this.setState({
	    proMode: !this.state.proMode,
	    proContextData:{
		proMode: !this.state.proContextData.proMode
	    }
	})
	
    }

    render(){
	return (
	    <div className="container-fluid">
		<div className="row">
		    <div className="col">
			<div className="m-2 text-center">
			    <ThemeSelector>
				<Message theme="primary"
					 message={`Counter: ${this.state.counter}`}/>
				<ActionButton theme="secondary"
					      text="Increment"
					      callback={ this.incrementCounter }/>
			    </ThemeSelector>
			</div>
		    </div>
		</div>
		<div className="row">
		    <div className="col-12 text-center p-2">
			<div className="form-check">
			    <input type="checkbox" className="form-check-input"
				   value={this.state.proMode} onChange={this.toggleProMode}/>
			    <label className="form-check-label">Pro Mode</label>
			</div>
		    </div>
		</div>
		<div className="row">
		    <div className="col-3">
			<GeneralList list={this.state.names} theme="primary"/>
		    </div>
		    <div className="col-3">
			<ProList list={ this.state.names} pro={this.state.proMode}/>
		    </div>
		    <div className="col-3">
			<ErrorBoundary>
			    <ProModeContext.Provider value={ this.state.proContextData}>
				<SortedList list={this.state.cities} theme="secondary"/>
			    </ProModeContext.Provider>
			</ErrorBoundary>
		    </div>
		    <div className="col">
			<ProList list={ this.state.cities} pro={this.state.proMode}/>
		    </div>
		</div>

		<div className="row">
		    <div className="col-6">
			<ProList2 list={ this.state.names} theme="warning"/>
		    </div>
		    <div className="col-6">
			<ProList2 list={ this.state.cities} theme="info"/>
		    </div>
		</div>
		
		<div className="row">
		    <div className="col-6">
			<ProFeatureRender pro={true}  render={()=><ProList2 list={this.state.names} theme="warning"/>}/>
		    </div>
		</div>

	    </div>
	);
    }
}
