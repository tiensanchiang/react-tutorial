import React from "react";
import SimpleButton from "./SimpleButton";
import PropTypes from "prop-types";

export default function CallbackButton(props){
    let { theme, ...childProps } = props;
    return (
//	<SimpleButton className={`btn btn-${props.theme} btn-sm m-1`}
//		callback={props.callback} text={props.text} />
//		<SimpleButton { ...props } className={`btn btn-${props.theme} btn-sm m-1`}/>
	<SimpleButton {...childProps} className={`btn btn-${props.theme} btn-sm m-1`}/>
    )
}

CallbackButton.defaultProps = {
    theme: "warning",
    callback: ()=>{},
    disabled: false
}

CallbackButton.propTypes = {
    text: PropTypes.string.isRequired,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    callback: PropTypes.func
}

    
    
