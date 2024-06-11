import React from 'react';
import ParentLayout from './ParentLayout';
import Image from 'next/image';

const Hero = () => {
    return (
        <ParentLayout>
            <section className="flex flex-col lg:flex-row gap-8 justify-between items-center">
                <div className="w-full lg:w-1/2">
                    <div className="bg-[#F5F5F5] text-xs w-fit p-2 rounded mb-6 text-[#095A66]">
                        <p>l Providing resources for startups</p>
                    </div>
                    <h1 className="text-4xl text-[#0A0C29] font-bold lg:text-5xl">
                        We Connect Potential Startups with Angel Investors
                    </h1>
                    <p className="my-6 text-[#697489] lg:w-[80%] xl:w-[70%] text-sm sm:text-lg">
                        We empower innovative entrepreneurs by providing the
                        funding, mentorship, and resources they need to turn
                        their vision into reality.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 my-8">
                        <button className="text-sm sm:text-base flex justify-center items-center gap-2 bg-[#095A66] text-white rounded-full px-6 py-3">
                            <span>Apply for funding</span>
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
                        <button className="text-sm sm:text-base flex justify-center items-center gap-2 bg-[#EBFFE1] text-[#095A66] px-6 py-3 rounded-full">
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
                        src={'/hero_image.jpg'}
                        alt="hero_image"
                        width={500}
                        height={500}
                        className="w-full"
                    />
                </div>
            </section>
            <section className="mt-16 hidden md:block">
                <div className="flex justify-between items-center gap-6">
                    <div className="text-[#697489] text-xs sm:text-base">
                        <p>
                            Trusted Partnership with <br />
                            100+ company’s
                        </p>
                    </div>
                    <div className="">
                        <Image
                            src={'/zippo.svg'}
                            width={100}
                            height={100}
                            alt="zippo_img"
                        />
                    </div>
                    <div className="">
                        <Image
                            src={'/grammarly.svg'}
                            width={100}
                            height={100}
                            alt="zippo_img"
                        />
                    </div>
                    <div className="">
                        <Image
                            src={'/goodleap.svg'}
                            width={100}
                            height={100}
                            alt="zippo_img"
                        />
                    </div>
                    <div className="">
                        <Image
                            src={'/google.svg'}
                            width={100}
                            height={100}
                            alt="zippo_img"
                        />
                    </div>
                    <div className="">
                        <Image
                            src={'/loom.svg'}
                            width={100}
                            height={100}
                            alt="zippo_img"
                        />
                    </div>
                </div>
            </section>
        </ParentLayout>
    );
};

export default Hero;
