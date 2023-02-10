import React from 'react'

//import about data
import {aboutData} from '../data/AboutData';

const About = () => {
    // About data content
    const {image, title, paragraphs} = aboutData;
    return (
        <section className="bg-white  mt-[100px]">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16">
                <div className="font-light text-gray-500 sm:text-lg ">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">{title}</h2>
                    {paragraphs.map((item, index) => {
                        return (
                            <p className="mb-4" key={index}>{item}</p>
                        );
                    })}
                </div>
                <div className="mt-8">
                    <img src={image} alt="rocket"></img>
                </div>
            </div>
        </section>
    );
};

export default About;