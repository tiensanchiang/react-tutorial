import React from "react";

export default function ProFeatureRender(props){


    console.log(props)
    if(props.pro){
	return props.render()
    }else{
	return (
	    <h5 className="bg-warning text-white text-center">
		This is Pro Feature Render
	    </h5>
	)
    }

}
