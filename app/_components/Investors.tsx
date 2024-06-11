import React from 'react';
import Image from 'next/image';
import ParentLayout from './ParentLayout';

const Investors = () => {
    return (
        <ParentLayout>
            <section className="flex flex-col lg:flex-row-reverse gap-8 justify-between items-center">
                <div className="w-full lg:w-[50%] xl:w-[40%]">
                    <p className="p-2 w-fit rounded-full text-xs text-[#697489] my-6 border">
                        FOR INVESTORS
                    </p>
                    <h1 className="text-4xl text-[#0A0C29] font-bold lg:text-5xl">
                        Visionary Investors making a difference
                    </h1>
                    <p className="my-6 text-[#697489] lg:w-[80%] xl:w-[70%] text-sm sm:text-lg">
                        Apex Angels is more than an investment group; it's a
                        community of forward-thinking investors committed to
                        driving innovation and economic growth. As an Apex
                        Angel, you gain access to high-potential investment
                        opportunities in a diverse range of industries.
                    </p>

                    <div className="mt-12">
                        <button className="text-sm sm:text-base flex items-center gap-2 bg-[#095A66] text-white rounded-full px-6 py-3">
                            <span>Join as an Investor</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                    />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-[40%]">
                    <Image
                        src={'/investors.jpg'}
                        alt="hero_image"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>
            </section>
        </ParentLayout>
    );
};

export default Investors;
