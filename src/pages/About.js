import React from 'react';

// import components
import AboutComponent from '../components/About';
import Members from '../components/Members';

const About = () => {
    return (
        <section>
            <AboutComponent/>
            <Members />
        </section>
    );
};

export default About;