import React from "react";
import ProFeature from "./ProFeature";

export default function ProController(FeatureComponent){

    let ProtectedFeature = ProFeature(FeatureComponent);
    return class extends React.Component{

	constructor(props){
	    super(props);
	    this.state = {
		proMode: false
	    }
	}

	toggleProMode = ()=>{
	    this.setState({ proMode : !this.state.proMode });
	}

	render(){
	    return (
		<div className="container-fluid">
		    <div className="row">
			<div className="col  text-center p-2">
			    <div className="form-check">
				<input type="checkbox" className="form-check-input"
				       value={ this.state.proMode } onChange={ this.toggleProMode }/>
				<label className="form-check-label">Pro Mode</label>
			    </div>
			</div>
		    </div>
		    <div className="row">
			<div className="col">
			    <ProtectedFeature {...this.props} pro={this.state.proMode} />
			</div>
		    </div>
		</div>
	    )
	}
    }
}
