import React , {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import products from './../models/products';

class singleProduct extends Component {
render(){

    const product = products.find(({ id }) => id === this.props.match.params.x)

    return (
        <div className="container-fluid bg-3 text-center">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    )
}
    
}




export default singleProduct;