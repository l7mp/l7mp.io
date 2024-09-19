import React from 'react';

// import components
import Hero from '../components/Hero';
import Stunner from '../components/Stunner';
// import Partners from '../components/Partners';

const Home = () => {
    return (
        <section>
            <Hero />
            <Stunner link={"/#/products"} />
            {/* <Partners /> */}
        </section>
    );
};

export default Home;
