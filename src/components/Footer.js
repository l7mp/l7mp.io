import React from 'react';

// import icons
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';

// import Flowbite components
import {Footer} from 'flowbite-react'

// import footer data
import {footerData} from '../data/FooterData';

const FooterComponent = () => {
  const {logo, href, email, copyright, about, followUs, legal, icons} = footerData;
  return (
    <Footer container={true}>
      <div className="w-full container mx-auto">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href={href}
              src={logo}
              alt="L7mp Logo"
              name="L7mp Technologies"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col={true}>
                {about.map((item, index) => {
                  return (
                    <Footer.Link href={item.href} key={index}>
                      {item.name}
                    </Footer.Link>
                  );
                })}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col={true}>
                {followUs.map((item, index) => {
                  return(
                    <Footer.Link href={item.href} key={index}>
                      {item.name}
                    </Footer.Link>
                  );
                })}
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col={true}>
                {legal.map((item, index) => {
                  return (
                    <Footer.Link href={item.href} key={index}>
                      {item.name}
                    </Footer.Link>
                  );
                })}
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <div>
            <Footer.Copyright
              href={href}
              by={copyright}
              year={new Date().getFullYear()}
            />
            <span className='text-sm text-gray-500 sm:text-center'>{email}</span>
            <br></br>
            <span className='text-sm text-gray-500 sm:text-center'><a href="http://www.freepik.com">Most of the graphics Designed by fullvector / Freepik</a></span>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {icons.map((item, index) => {
              return (
                <Footer.Icon
                  href={item.href}
                  icon={item.icon}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;