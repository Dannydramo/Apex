import React from 'react';
import ParentLayout from './ParentLayout';

const Investment = () => {
    return (
        <ParentLayout>
            <section className="bg-[#F1F5EF] rounded-2xl py-8">
                <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col items-center justify-center">
                    <p className="p-2 w-fit rounded-full text-xs text-[#697489] my-6 border">
                        HOW IT WORKS
                    </p>
                    <h1 className="text-4xl text-[#0A0C29] text-center font-bold lg:text-5xl">
                        Our Investment Process
                    </h1>
                    <p className="text-center text-[#697489] my-6 mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-sm sm:text-lg">
                        A Step-by-Step Guide to our Investment process and how
                        we go from Application to Investment
                    </p>
                    <div className="bg-white my-8 px-4 md:px-6 py-8 rounded-lg">
                        <ul>
                            <li className="relative flex gap-8 pb-5 items-baseline">
                                <div className="before:absolute before:left-[16px] before:w-[2px] before:h-[90%] before:top-6 before:bg-[#EBFFE1]">
                                    <p className="bg-[#EBFFE1] text-sm md:text-base rounded-[50%] py-1 px-3">
                                        1
                                    </p>
                                </div>
                                <div className="">
                                    <div className="flex flex-col gap-6 sm:flex-row mb-6">
                                        {' '}
                                        <p className="text-[#0A0C29] font-semibold md:text-xl sm:min-w-56 md:min-w-64 lg:min-w-96">
                                            Application and screening
                                        </p>
                                        <p className="text-sm md:text-base">
                                            Apply for funding through our
                                            website, providing detailed business
                                            plans and financial projections.
                                        </p>
                                    </div>
                                    <hr className="w-full" />
                                </div>
                            </li>
                            <li className="relative flex gap-8 pb-5 items-baseline">
                                <div className="before:absolute before:left-[16px] before:w-[2px] before:h-[90%] before:top-6 before:bg-[#EBFFE1]">
                                    <p className="bg-[#EBFFE1] text-sm md:text-base rounded-[50%] py-1 px-3">
                                        2
                                    </p>
                                </div>
                                <div className="">
                                    <div className="flex flex-col gap-6 sm:flex-row mb-6">
                                        {' '}
                                        <p className=" text-[#0A0C29] font-semibold md:text-xl sm:min-w-56 md:min-w-64 lg:min-w-96">
                                            Pitch Sessions
                                        </p>
                                        <p className="text-sm md:text-base">
                                            Selected startups are invited to
                                            present their business ideas to our
                                            members during pitch sessions.
                                        </p>
                                    </div>
                                    <hr className="w-full" />
                                </div>
                            </li>
                            <li className="relative flex gap-8 pb-5 items-baseline">
                                <div className="before:absolute before:left-[16px] before:w-[2px] before:h-[90%] before:top-6 before:bg-[#EBFFE1]">
                                    <p className="bg-[#EBFFE1] text-sm md:text-base rounded-[50%] py-1 px-3">
                                        3
                                    </p>
                                </div>
                                <div className="">
                                    <div className="flex flex-col gap-6 sm:flex-row mb-6">
                                        {' '}
                                        <p className=" text-[#0A0C29] font-semibold md:text-xl sm:min-w-56 md:min-w-64 lg:min-w-96">
                                            Due Diligence
                                        </p>
                                        <p className="text-sm md:text-base">
                                            For startups that pass the initial
                                            pitch, we conduct a comprehensive
                                            due diligence process, including
                                            market analysis, financial review,
                                            and team assessment.
                                        </p>
                                    </div>
                                    <hr className="w-full" />
                                </div>
                            </li>
                            <li className="relative flex gap-8 pb-5 items-baseline">
                                <div className="">
                                    <p className="bg-[#EBFFE1] text-sm md:text-base rounded-[50%] py-1 px-3">
                                        4
                                    </p>
                                </div>
                                <div className="">
                                    <div className="flex flex-col gap-6 sm:flex-row mb-6">
                                        <p className=" text-[#0A0C29] font-semibold md:text-xl sm:min-w-56 md:min-w-64 lg:min-w-96">
                                            Investment Decision
                                        </p>
                                        <p className="text-sm md:text-base">
                                            Based on the due diligence findings,
                                            our members vote on whether to
                                            invest in the startup.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white w-full p-4 md:p-6 rounded-lg flex flex-col md:flex-row md:items-center xl:gap-2 justify-between">
                        <div className="w-full md:w-[50%] xl:w-[60%]">
                            <h1 className="text-[#0A0C29] text-xl font-semibold">
                                Ready to Transform Your Vision?
                            </h1>
                            <p className="my-2 text-sm sm:text-base">
                                Join our thriving community today and be part of
                                a transformative ecosystem driving the future of
                                innovation.
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0">
                            <button className="text-sm sm:text-base flex items-center gap-2 bg-[#095A66] text-white rounded-full px-6 py-3">
                                <span>Get started today</span>
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
                </div>
            </section>
        </ParentLayout>
    );
};

export default Investment;
