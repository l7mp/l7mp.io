import React from 'react'

//import navigation data
import {membersData} from '../data/AboutData';

const Members = () => {
    const {intro, members} = membersData;
    return (
        <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our team</h2>
                    <p className="font-light text-gray-500 sm:text-xl">{intro}</p>
                </div>
                <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3">
                    {members.map((member, index) => {
                        return (
                            <div className="text-center text-gray-500" key={index}>
                                <img className="object-fit mx-auto mb-4 w-36 h-36 rounded-full" src={member.image} alt={member.name}></img>
                                <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900">
                                    {member.name}
                                </h3>
                                <p>{member.title}</p>
                                <ul className="flex justify-center mt-4 space-x-4">
                                    {member.social.map((item, sindex) => {
                                        return (
                                            <li key={sindex}>
                                                <a href={item.href}>
                                                    <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 16 16' className='h-5 w-5' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                                                        <path d={item.image}></path>
                                                    </svg>
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Members;