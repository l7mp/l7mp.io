import React from 'react'
import { Navbar, Button } from 'flowbite-react';

//import navigation data
import { logo, navigationData } from '../data/NavData';

const Nav = () => {
    const {href, image} = logo;
    return (
        <section className='bg-white px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
            <Navbar
                fluid={true}
                rounded={true}
                className='container items-center justify-between mx-auto'
            >
                <Navbar.Brand href={href}>
                    <img
                        src={image}
                        className="mr-3 h-6 sm:h-9"
                        alt="L7mp Logo"
                    />
                    <span className="hidden lg:block self-center whitespace-nowrap text-xl font-semibold">
                        L7mp Technologies
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button className='mr-3' href='/#/contact'>
                        Contact Us
                    </Button>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    {navigationData.map((item, index) => {
                        return (
                            <Navbar.Link key={index} href={item.href}>
                                {item.name}
                            </Navbar.Link>
                        );
                    })}
                </Navbar.Collapse>
            </Navbar>
        </section>
    );
};

export default Nav;