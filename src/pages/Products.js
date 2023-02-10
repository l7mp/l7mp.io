import React from 'react';

// import components
import Stunner from '../components/Stunner';
import StunnerVideo from '../components/StunnerVideo';
import ProductDescription from '../components/ProductDescription'
// import StunnerOperator from '../components/StunnerOperator';

const Products = () => {
    return (
        <section className='mt-[100px]'>
            <Stunner />
            <StunnerVideo />
            <ProductDescription />
            {/* <StunnerOperator /> */}
        </section>
    );
};

export default Products;