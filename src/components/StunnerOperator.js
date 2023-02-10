import React from 'react';

// import data
import { stunnerOperatorData } from '../data/ProductData';

const StunnerOperator = () => {
    const {title, subtitle, btnText, href} = stunnerOperatorData;
    return (
        <section className="bg-white mt-[30px]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        {title}
                    </h2>
                    <p className="mb-8 font-light text-gray-500 sm:text-xl">
                        {subtitle}
                    </p>
                    <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a href={href} className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300">
                            {btnText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StunnerOperator;