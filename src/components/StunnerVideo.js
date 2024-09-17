import React from "react";

const StunnerVideo = () => {
    return (
        <section className="bg-white">
            <div className="items-center py-8 px-4 mx-auto max-w-screen-xl sm:py-16">
		<p className="mb-6 font-light text-gray-500 md:text-lg">
                    Demo Video
                </p>
                <iframe height='360px' src="https://www.youtube.com/embed/5L1i5EW0HkI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-4/5 max-w-full content-center border border-gray-200 rounded-lg'></iframe>
            </div>
        </section>
    );
};

export default StunnerVideo;
