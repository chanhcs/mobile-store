import React, { Component } from 'react';
import Product from "./Product";
import { storeProducts } from '../data';
import { ProductConsumer } from '../Context';
import Aside from './Aisde/Aside'


class ProductList extends Component {
    state = {
        products: storeProducts
    };

    render() {
    
        return (
            <React.Fragment>
                <div className="py-3">


                    <div className="container">

                        <div className='row'>

                            <div className='col-md-3 col-lg-3 mx-auto my-3'>
                                <Aside />

                            </div>
                            <div className='col-md-9 col-lg-9'>

                                <div className="row">


                                    <ProductConsumer>
                                        {value => {
                                            return value.products.map(product => {
                                                return <Product key={product.id} product={product} />;
                                            })
                                        }}
                                   </ProductConsumer>


 
           
 

                                </div>


                            </div>



                        </div>
                    </div>

                </div>

            </React.Fragment>
        );
    }
}




export default ProductList;