import React from "react"
import {ValidatedForm } from "../forms/ValidatedForm"

export class Checkout extends React.Component{

    constructor(props){
	super(props);
	console.log(this.props)
	this.defaultAttrs = { type: "text", required: true };
	this.formModel = [
	    { label: "Name" },
	    { label: "Emails", attrs: { type: "email" } },
	    { label: "Address" },
	    { label: "City" },
	    { label: "Zip/Post Code", attrs: { type: "zip" } },
	    { label: "Country" }
	]
    }

    handleSubmit = (formData)=>{
	const order = { ...formData,
			products: this.props.cart.map( item=>
			    ({ quantity: item.quantity, product_id: item.product_id }))}
	this.props.placeOrder(order);
	this.props.clearCart();
	this.props.history.push("/shop/thanks");
    }

    handleCancel = ()=>{
	this.props.history.push("/shop/cart");
    }

    render(){
	return (
	    <div className="container-fluid">
		<div className="row">
		    <div className="col bg-dark text-white">
			<div className="navbar-brand">SPORTS STORE</div>
		    </div>
		</div>
		<div className="row">
		    <div className="col m-2">
			<ValidatedForm formModel={ this.formModel }
				       defaultAttrs={ this.defaultAttrs }
				       submitCallback={ this.handleSubmit }
				       cancelCallback={ this.handleCancel }
				       submitText="Place Order"
				       cancelText="Return to Cart"/>
		    </div>
		</div>
	    </div>
	)
    }
}
