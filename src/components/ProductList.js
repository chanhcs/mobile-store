import React, { Component } from 'react';
import Product from "./Product";
import Title from './Title';


class ProductList extends Component {
    state = {
        products: []
    }

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="cotainer">
                        <Title name="my" title="product"/>
                        <div className="row">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
   }
}

export default ProductList;