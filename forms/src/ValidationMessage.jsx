import React from "react";
import ValidationContext from "./ValidationContext";

export default class ValidationMessage extends React.Component{
    static contextType = ValidationContext;

    render(){
        console.log(this.context)
        return this.context.getMessagesForField( this.props.field ).map(err=>{
            return(
                <div className="small bg-danger text-white mt-1 p-1"
                     key={err}>
                    {err}
                </div>
            );
        })
    }
}
