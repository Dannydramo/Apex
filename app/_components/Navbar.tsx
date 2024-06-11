'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <nav className="shadow-custom-light">
            {' '}
            <div className="flex w-[95%] sm:w-[90%] mx-auto max-w-[1800px] justify-between py-6 items-center">
                <Image src={'/Logo.svg'} height={100} width={100} alt="Logo" />

                <ul className="hidden w-[60%] md:flex md:gap-12 text-sm text-[#697489]">
                    <li>Services</li>
                    <li>About Us</li>
                    <li className="flex items-center">
                        Benefits{' '}
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </li>
                    <li>FAQ</li>
                </ul>
                <div className="hidden md:block">
                    {' '}
                    <button className="text-xs flex items-center gap-2 bg-[#EBFFE1] text-[#095A66] px-6 py-3 rounded-full">
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
                </div>

                <div onClick={handleNav} className="z-50 md:hidden">
                    {nav ? (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 text-[#B5CDD1] fixed -mt-4 right-2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </>
                    ) : (
                        <>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 absolute right-2 -mt-4"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </>
                    )}
                </div>

                <ul
                    className={
                        nav
                            ? 'fixed md:hidden right-0 top-0 w-[60%] pt-16 h-full bg-[#095A66] text-[#B5CDD1] ease-in-out duration-500'
                            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
                    }
                >
                    <li className="p-4">Services</li>
                    <li className="p-4">About Us</li>
                    <li className="flex items-center p-4">
                        Benefits{' '}
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </span>
                    </li>
                    <li className="p-4">FAQ</li>
                    <button className="text-xs flex items-center gap-2 ml-4 mt-8 bg-[#EBFFE1] text-[#095A66] px-6 py-3 rounded-full">
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
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
