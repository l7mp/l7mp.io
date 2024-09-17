import React from "react";

const StunnerVideo = () => {
    return (
        <section className="bg-white">
            <div className="items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
		<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                    Demo Video
                </h2>
                <iframe height='480px' src="https://www.youtube.com/embed/5L1i5EW0HkI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-3/5 content-center justify-center border border-gray-200 rounded-lg'></iframe>
            </div>
        </section>
    );
};

export default StunnerVideo;
