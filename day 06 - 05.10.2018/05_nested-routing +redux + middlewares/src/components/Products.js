import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {SingleProduct} from './SingleProduct';
import products from './../models/products';
class Products extends Component {

   

    render() {
        return (
            <div>
                <div className="container-fluid bg-2 text-center">
                    <h1 className="margin">Product list</h1>
                    <h3>All products in one store </h3>
                     <div className="container text-center">
                        <div>
                            {products.map(({ name, id }) => (
                                <Link key={id} type="button" 
                                    className="col-sm-4 btn btn-default btn-lg" 
                                    to={`${this.props.match.url}/${id}`}
                                >
                                    {name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <hr />

                <Route path={`${this.props.match.path}/:productId`}
                    component={SingleProduct} />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

const connectedApp = connect(mapStateToProps)(Products);
export { connectedApp as Products }; 
