import React from 'react';

// import data
import { servicesData } from '../data/ServicesData';

const Services = () => {
    const { image, title, subtitle, services } = servicesData;
    return (
        <section className="bg-white mt-[100px]">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full" src={image} alt="services image"></img>
                <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        {title}
                    </h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg">
                        {subtitle}
                    </p>
                    <hr></hr>
                    {services.map((item, index) => {
                        return (
                            <div className="max-w-screen-md mt-6" key={index}>
                                <h3 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="mb-6 font-light text-gray-500 sm:text-xl">
                                    {item.subtitle}
                                </p>
                                <a href={item.href} className="font-medium text-blue-600 hover:underline">Learn more</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;