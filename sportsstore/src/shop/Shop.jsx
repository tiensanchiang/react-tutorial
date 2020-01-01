import React from "react"
import { ProductList } from "./ProductList"
import { CategoryNavigation } from "./CategoryNavigation"
import { CartSummary } from "./CartSummary";
import { PaginationControls } from "../PaginationControls"
import { ProductPageConnector } from "./ProductPageConnector"

const ProductPages = ProductPageConnector(PaginationControls)

export class Shop extends React.Component{

    handleAddToCart = (...args) => {
	this.props.addToCart(...args);
	this.props.history.push("/shop/cart");
    }
    
    render(){
	return (
	    <div className="container-fluid">
		<div className="row">
		    <div className="col bg-dark text-white">
			<div className="navbar-brand">SHOP STORE</div>
			<CartSummary { ...this.props} />
		    </div>
		</div>
		<div className="row">
		    <div className="col-3 p-2">
			<CategoryNavigation baseUrl="/shop/products"
					    categories={ this.props.categories } />
		    </div>
		    <div className="col-9 p-2">
			<ProductPages />
			<ProductList {...this.props}  products={ this.props.products }
			addToCart={this.handleAddToCart}/>
		    </div>
		</div>
	    </div>
	)
    }
}
