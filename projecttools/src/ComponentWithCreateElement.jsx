import React from "react"

export default class ComponentWithCreateElement extends React.Component{
    render = ()=>
	React.createElement("h4",
			    { className: "bg-primary text-white text-center p-3"},
			    "This is an HTML element")
}
			      
