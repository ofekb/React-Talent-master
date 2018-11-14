import React, { Component } from 'react';
import { connect } from 'react-redux';


import products from './../models/products';
import { cornAction } from './../models/cornAction';
import { saladAction } from './../models/saladAction';
import { milkAction } from './../models/milkAction';

class SingleProduct extends Component {
    clickHandler(productId, isAddState) {

        var typeParam;

        switch (productId) {
            case "milk": typeParam = milkAction; break;
            case "salad": typeParam = saladAction; break;
            case "corn": typeParam = cornAction; break;
        }

        if (isAddState) {

            //adding a product is an async task
            // step 1: ADD_REQUEST
            // srep 2: ADD_SUCCESS (after 4 sec)
            this.props.dispatch(
                (d) => {
                    console.log(d);
                    d({
                        type: typeParam["ADD_REQUEST"],
                        counter: this.props[productId].counter
                    });
                    setTimeout(
                        () => {
                            d({
                                type: typeParam["ADD_SUCCESS"],
                                counter: this.props[productId].counter
                            })
                        }
                        , 5000)
                });

        }
        else {
            //removing a product is non - async task
            // single step : REMOVE
            this.props.dispatch({
                type: typeParam["REMOVE"],
                counter: this.props[productId].counter
            })
        }

    }

    render() {

        const product = products.find(({ id }) => id === this.props.match.params.productId)

        return (
            <div className="container-fluid bg-3 text-center">
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                {(this.props.corn.isAdding || this.props.salad.isAdding || this.props.milk.isAdding)
                    && (<div className="spinner"></div>)}

                <div>
                    <button onClick={() => this.clickHandler(product.id, true)}>add {product.name}</button>
                    <button onClick={this.clickHandler.bind(this, product.id, false)}>remove {product.name}</button>
                </div>

            </div>
        )
    }

}


function mapStateToProps(state) {
    return state;
}

const connectedApp = connect(mapStateToProps)(SingleProduct);
export { connectedApp as SingleProduct };

