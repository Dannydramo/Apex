import React from 'react';
import ParentLayout from './ParentLayout';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <ParentLayout>
            {' '}
            <section className="">
                <div className="w-full md:w-[95%] mx-auto flex flex-col items-center justify-center">
                    <p className="p-2 w-fit rounded-full text-xs text-[#697489] my-6 border">
                        TESTIMONIALS
                    </p>
                    <h1 className="text-4xl text-[#0A0C29] text-center font-bold lg:text-5xl">
                        What Our Partners Say
                    </h1>
                    <p className="text-center text-[#697489] my-6 mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-sm sm:text-lg">
                        Hear from Startups and Investors who have thrived us
                    </p>
                    <Image
                        src={'/star.svg'}
                        alt="star"
                        height={100}
                        width={100}
                    />
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TestimonialCard
                            logo="/goodleap.svg"
                            profile={{
                                profile_img: '/adam.svg',
                                profile_name: 'Adam Spectar',
                                profile_tag: 'Founder of Goodleap',
                            }}
                            content={`"Apex Angels' commitment to fostering innovation is unmatched. The mentorship and resources provided were invaluable, and their network of investors truly understood our vision. We're now well-positioned to revolutionize the financial industry."`}
                        />
                        <TestimonialCard
                            logo="/uovo.svg"
                            profile={{
                                profile_img: '/jonathan.svg',
                                profile_name: 'Jonathan Joster',
                                profile_tag: 'Founder of Uovo',
                            }}
                            content={`"Partnering with Apex Angels was a game-changer for us. Their rigorous due diligence process gave us confidence, and their strategic advice helped us refine our business model. We're now leading the market in sustainable energy solutions."`}
                        />
                        <TestimonialCard
                            logo="/andela.svg"
                            profile={{
                                profile_img: '/sarah.svg',
                                profile_name: 'Sarah Laara',
                                profile_tag: 'Founder of Andela',
                            }}
                            content={`"From the pitch sessions to ongoing support, Apex Angels has been a fantastic partner. Their investors bring a wealth of knowledge and are genuinely invested in our success. We've achieved significant milestones thanks to their backing."`}
                        />
                    </div>
                </div>
            </section>
        </ParentLayout>
    );
};

export default Testimonial;
