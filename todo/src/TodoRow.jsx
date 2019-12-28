import React from 'react'

export default class TodoRow extends React.Component {
    render = () => {
	return (
	    <tr>
		<td>{this.props.item.action}</td>
		<td>
		    <input type="checkbox" checked={ this.props.item.done }
			   onChange={ ()=>this.props.callback(this.props.item) }/>
		</td>
	    </tr>
	)
    }
}
