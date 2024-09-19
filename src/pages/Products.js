import React from 'react';

// import components
import Stunner from '../components/Stunner';
import StunnerVideo from '../components/StunnerVideo';
import ProductDescription from '../components/ProductDescription'
// import StunnerOperator from '../components/StunnerOperator';

const Products = () => {
    return (
        <section className='mt-[100px]'>
            <Stunner link={"https://github.com/l7mp/stunner/blob/main/README.md"} />
	    <StunnerVideo />
            <ProductDescription />
            {/* <StunnerOperator /> */}
        </section>
    );
};

export default Products;
