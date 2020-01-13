import React from "react";

export default class Editor extends React.Component{
    constructor(props){
	super(props);
	this.state={
	    name: "",
	    flavor: ["Vanilla"],
	    toppings: ["Strawberries"],
	    order: "",
	};

	this.flavors = ["Chocolate", "Double Chocolate",
			"Tripple Chocolate", "Vanilla"];
	this.toppings = ["Sprinkles", "Fudge Sauce",
			 "Strawberries", "Maple Syrup"];
    }

    updateFormValue = (event)=>{
	this.setState({
	    [event.target.name]: event.target.value
	}, ()=>{
	    this.props.submit(this.state);
	});
    }

    updateFormValueOptions = (event)=>{
	let options = [...event.target.options]
	    .filter(o=>o.selected).map(o=>o.value);
	this.setState({
	    [event.target.name]: options
	},()=>{
	    this.props.submit(this.state);
	});
    }

    updateFormValueCheck = (event)=>{
	event.persist();
	this.setState((state)=>{
	    if(event.target.checked){
		state.toppings.push(event.target.name)
	    }else{
		let index = state.toppings.indexOf(event.target.name);
		state.toppings.splice(index,1);
	    }
	},()=>{
	    this.props.submit(this.state);
	});
    }

    updateFormValueRadio = (event)=>{
	console.log(event)
	if(event.target.checked){
	    this.setState({
		[event.target.name]: event.target.value
	    }, ()=>{
		this.props.submit(this.state);
	    })
	}
    }
    
    render(){
	return(
	    <div className="h5 bg-info text-white p-2">
		<div className="form-group">
		    <label>Name</label>
		    <input className="form-control"
			   name="name"
			   type="text"
			   value={ this.state.name }
			   onChange={ this.updateFormValue } />
		</div>
		<div className="form-group">
		    <label>Flavors</label>
		    <select className="form-control"
			onChange={this.updateFormValueOptions}
			value={ this.state.flavor}
			    name="flavor">
			{
			    this.flavors.map(f=>
				<option key={f} value={f}>{f}</option>
			    )
			}
		    </select>
		</div>
		<div className="form-group">
		    <div>Ice Cream Flavors</div>
		    {
			this.flavors.map(f=>
			    <div className="form-check" key={f}>
				<input className="form-check-input"
				       type="radio"
				       name="flavor"
				       value={f}
				       checked={this.state.flavor.indexOf(f)>-1}
				       onChange={ this.updateFormValueRadio }				
				/>
				<label className="form-check-lavel">{f}</label>
			    </div>
			)
		    }
		</div>
		    
		<div className="form-group">
		    <label>Toppings</label>
		    <select className="form-control"
			name="toppings"
			multiple={true}
			value={ this.state.toppings }
			onChange={this.updateFormValueOptions}>
			{
			    this.toppings.map(t=>
				<option key={t} value={t}>
				    {t}
				</option>
			    )
			}
		    </select>
		</div>
		<div className="form-group">
		    <div>Ice Cream Toppings</div>
		    {
			this.toppings.map(t=>
			    <div className="form-check" key={t}>
				<input className="form-check-input"
				       type="checkbox"
				       name={t}
				       value={ this.state[t] }
				       checked={ this.state.toppings.indexOf(t) > -1 }
				       onChange={ this.updateFormValueCheck }/>
				<label className="form-check-label">{t}</label>
			    </div>
			)
		    }			
		</div>
		<div className="form-group">
		    <label>Order</label>
		    <textarea className="form-control"
			name="order"
			value={this.state.order}
			onChange={this.updateFormValue}>
		    </textarea>
		</div>
	    </div>
	)
    }
}
