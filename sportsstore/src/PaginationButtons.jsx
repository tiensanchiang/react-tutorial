import React from "react"

export class PaginationButtons extends React.Component{

    getPageNumbers = () => {
	if(this.props.pageCount < 4){
	    return [...Array(this.props.pageCount + 1 ).keys()].slice(1);
	}else if(this.props.currentPage <= 4){
	    return [1,2,3,4,5];
	}else if(this.props.currentPage > this.props.pageCount - 4){
	    return [...Array(5).keys()].reverse().map(v=>this.props.pageCount-v);
	}else{
	    return [this.props.currentPage-1, this.props.currentPage,
		    this.props.currentPage+1];
	}
    }

    render() {
	const current = this.props.currentPage;
	const pageCount = this.props.pageCount;
	const navigate = this.props.navigate;

	return (
	    <React.Fragment>
		<button onClick={()=>navigate(current-1) }
			diabled={ current === 1 }
			className="btn btn-secondary mx-1">
		    Previous
		</button>
		{
		    (current > 4) &&
			(
			    <React.Fragment>
				<button className="btn btn-primary mx-1"
				    onClick={()=>navigate(1) }>
				    1
				    <span className="h4">...</span>
				</button>
			    </React.Fragment>
			)
		}
		{
		    this.getPageNumbers().map( num=>{
			return (
			    <button className={`btn mx-1 ${num===current?"btn-primary":"btn-secondary"}`}
				    onClick={ ()=> navigate(num) } key={num}>
				{ num }
			    </button>
			)
		    })
		}

		{
		    (current<=(pageCount - 4)) && 
			(
			    <React.Fragment>
				<span className="h4">...</span>
				<button className="btn btn-secondary mx-1"
				    onClick={()=>{ navigate(pageCount)} }>
				    {pageCount}
				</button>
			    </React.Fragment>
			)
		}

		<button onClick={ ()=>{ navigate(pageCount+1)} }
			disabled={ current ===pageCount }
			className="btn btn-secondary mx-1">
		    Next
		</button>
	    </React.Fragment>
	)
    }
}
