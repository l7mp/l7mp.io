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
		<div className="grid grid-cols-3 gap-8 content-start">
		{demos.map((item, index) => {
                    return (
			<div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
				<img className="px-2 py-0 w-4/5 object-scale-down h-20 content-center" src={item.image} alt="logo"></img>
			    <div className="px-6 py-2">
				<h2 className='mb-2 text-xl tracking-tight font-bold text-gray-900'>
				    {item.name}
				</h2>
				<p className="text-gray-700 text-base">
				    <a href={item.doc_link}>Documentation/Code</a>
				</p>
			    </div>
			    <div className="px-6 pt-2 pb-2">
				    <a href={item.demo_link}
				       className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Try out</a>
			    </div>
			</div>
                    );
		})}
		</div>
	    </div>
        </section>
    );
};

export default Demos;
