import React from 'react';

// import data
import { productDescriptionData } from '../data/ProductData';

const ProductDescription = () => {
    const {title, subtitle, btnText, examples_href, servers} = productDescriptionData;
    return (
        <section className="bg-white mt-[30px]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-xl">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        {title}
                    </h2>
                    <p className="mb-8 font-light text-gray-500 sm:text-xl">
                        {subtitle}
                    </p>
                    <a href={examples_href} className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {btnText}
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
                <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
                    Tested media servers
                </h2>
                <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5">
                    {servers.map((item, index) => {
                        return (
                            <a href={item.href} className="flex justify-center items-center" key={index}>
                                <img src={item.logo} alt={item.name}></img>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductDescription;
