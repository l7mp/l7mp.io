import React from 'react';

// import data
import { contactData } from '../data/ContactData';

const Contact = () => {
    return (
        <section className="bg-white mt-[100px]">
            <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            </div>
            {contactData.map((item, index) => {
                return (
                    <div className='py-3 px-4 mx-auto max-w-screen-xl' key={index}>
                        <h2 className='mb-4 text-3xl tracking-tight font-bold text-gray-900'>
                            {item.title}
                        </h2>
                        <p className='mb-5 font-light text-gray-500 sm:text-xl'>
                            {item.subtitle}
                        </p>
                        <a href={item.href} className='font-medium text-blue-600 hover:underline'>
                            {item.cta}
                        </a>
                    </div>
                );
            })}
        </section>
    );
};

export default Contact;