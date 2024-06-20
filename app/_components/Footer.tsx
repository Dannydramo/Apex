import React from 'react';
import ParentLayout from './ParentLayout';
import Image from 'next/image';

const Footer = () => {
    return (
        <ParentLayout>
            <footer className="bg-[#095A66] text-[#B5CDD1] rounded-lg p-4 md:p-6 lg:px-8 lg:py-12 mb-[-3rem] sm:mb-[-2rem]">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="flex flex-col space-y-12">
                        <Image
                            src={'/apex-footer.svg'}
                            height={100}
                            width={100}
                            alt="Logo"
                        />
                        <p className="text-xs flex gap-3 sm:text-sm">
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
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                    />
                                </svg>
                            </span>
                            <span>hello@apexangels.com</span>
                        </p>
                        <p className="text-xs flex gap-3 sm:text-sm">
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
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                    />
                                </svg>
                            </span>
                            <span>+093 456 789 224 </span>
                        </p>
                    </div>
                    <div className="">
                        <h2 className="mb-6 font-semibold text-sm sm:text-base">
                            Navigation
                        </h2>
                        <ul className="flex flex-col gap-4 text-xs sm:text-sm">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact</li>
                            <li>FAQ?</li>
                        </ul>
                    </div>
                    <div className="">
                        {' '}
                        <h2 className="mb-6 font-semibold text-sm sm:text-base">
                            For Startups
                        </h2>
                        <ul className="flex flex-col gap-4 text-xs sm:text-sm">
                            <li>Overview</li>
                            <li>How it Works</li>
                            <li>Benefits</li>
                            <li>Apply for Funds</li>
                            <li>Requirements</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-6 font-semibold text-sm sm:text-base">
                            For Investors
                        </h2>
                        <ul className="flex flex-col gap-4 text-xs sm:text-sm">
                            <li>Overview</li>
                            <li>How it Works</li>
                            <li>Benefits</li>
                            <li>Join as Investor</li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-6 font-semibold text-sm sm:text-base">
                            Company
                        </h2>
                        <ul className="flex flex-col gap-4 text-xs sm:text-sm">
                            <li>Our team</li>
                            <li>Help center</li>
                            <li>Contact</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-t-[#538B94] mt-20 pt-4 flex flex-col md:flex-row items-center gap-4 md:justify-between">
                    <div className="text-sm text-center">
                        <p>©Apex Angels. All right reserved 2024</p>
                    </div>
                    <div className="text-sm">
                        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <li>Privacy Policy</li>
                            <li>Terms of Use</li>
                            <li className="flex gap-4">
                                <span>
                                    <Image
                                        src={'/linkedin.svg'}
                                        alt=""
                                        height={20}
                                        width={20}
                                    />
                                </span>
                                <span>
                                    <Image
                                        src={'/facebook.svg'}
                                        alt=""
                                        height={20}
                                        width={20}
                                    />
                                </span>
                                <span>
                                    <Image
                                        src={'/instagram.svg'}
                                        alt=""
                                        height={20}
                                        width={20}
                                    />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </ParentLayout>
    );
};

export default Footer;
