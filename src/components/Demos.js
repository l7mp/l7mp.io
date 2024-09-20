import React from 'react';

// import data
import { demosData } from '../data/DemosData';

const Demos = () => {
    const { title, subtitle, repo_link, demos } = demosData;
    return (
        <section className="bg-white mt-[100px]">
            <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md justify-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
		    {title}
		</h2>
		<p className="mb-6 font-light text-gray-500 md:text-lg">
                    {subtitle} Our demos are deployed with <a href="https://argoproj.github.io/cd/">Argo CD</a> from this <a href={repo_link}>Github repository</a>.
                </p>
		{demos.map((item, index) => {
                    return (
			<div className="grid grid-cols-2 gap-x-8 gap-y-16 p-4 py-8 items-center" key={index}>
			    <div className="mt-4 md:mt-0 col-span-1">
				<img className="w-4/5 object-scale-down max-h-24" src={item.image} alt="logo"></img>
			    </div>
			    <div className="mt-4 md:mt-0 col-span-1">
				<h2 className='mb-4 text-3xl tracking-tight font-bold text-gray-900'>
				    {item.name}
				</h2>
				<p className='mb-5 font-light text-gray-500 sm:text-xl'>
				    <a href={item.demo_link}
				       className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
					Try out
				    </a>
				</p>
			    </div>
			</div>
                    );
		})}
	    </div>
        </section>
    );
};

export default Demos;
