import React from 'react';
import Image from 'next/image';

const TestimonialCard = ({
    logo,
    content,
    profile,
}: {
    logo: string;
    content: string;
    profile: { profile_img: string; profile_name: string; profile_tag: string };
}) => {
    return (
        <div className="bg-[#F5F5F5] shadow-little-light p-4 lg:p-6 rounded-md">
            <Image src={logo} width={100} height={100} alt="img" className="" />
            {/* <h4 className="font-semibold text-[#0A0C29]">{title}</h4> */}
            <p className="my-8 sm:my-12 text-sm sm:text-base text-[#697489]">
                {content}
            </p>
            <div className="flex gap-4">
                <Image
                    src={profile.profile_img}
                    width={40}
                    height={40}
                    alt="img"
                    className=""
                />
                <div className="">
                    <h1 className="text-sm font-semibold text-[#0A0C29]">
                        {profile.profile_name}
                    </h1>
                    <p className="mt-1 text-xs text-[#697489]">
                        {profile.profile_tag}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
