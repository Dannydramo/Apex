import React from 'react';
import ParentLayout from './ParentLayout';
import Card from './Card';

const Capital = () => {
    return (
        <ParentLayout>
            <section className="bg-[#F1F5EF] rounded-2xl py-8">
                <div className="w-[95%] md:w-[90%] lg:w-[85%] xl:w-[80%] mx-auto flex flex-col items-center justify-center">
                    <p className="p-2 w-fit rounded-full text-xs text-[#697489] my-6 border">
                        WHAT WE DO
                    </p>
                    <h1 className="text-4xl text-[#0A0C29] text-center font-bold lg:text-5xl">
                        Providing More Than Capital
                    </h1>
                    <p className="text-center text-[#697489] my-6 mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-sm sm:text-lg">
                        We empower innovative entrepreneurs by providing the
                        funding, mentorship, and resources they need to turn
                        their vision into reality.
                    </p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card
                            img={'/seed.svg'}
                            title={'Seed and Bridge Funding'}
                            content={
                                'we provide initial capital at the early stages of your development and ensuring you have the necessary resources to growth.'
                            }
                        />
                        <Card
                            img={'/access.svg'}
                            title={'Access to Resources'}
                            content={
                                'Providing access to essential business tools, templates, and resources to streamline your operations and make business decisions.'
                            }
                        />
                        <Card
                            img={'/shield.svg'}
                            title={'Mentorship and Guidance'}
                            content={
                                'we organize educational workshops, seminars and mentorship to help navigate challenges and scale your businesses.'
                            }
                        />
                    </div>
                </div>
            </section>
        </ParentLayout>
    );
};

export default Capital;
