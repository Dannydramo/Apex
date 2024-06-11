import Image from 'next/image';
import React from 'react';

const Card = ({
    img,
    title,
    content,
}: {
    img: string;
    title: string;
    content: string;
}) => {
    return (
        <div className="bg-white shadow-little-light p-4 lg:p-6 rounded-md">
            <Image
                src={img}
                width={40}
                height={40}
                alt="img"
                className="mb-8 sm:mb-12"
            />
            <h4 className="font-semibold text-[#0A0C29]">{title}</h4>
            <p className="my-4 text-sm sm:text-base text-[#697489]">
                {content}
            </p>
            <p className="text-[#095A66] flex gap-2 items-center mt-4">
                <span>Get started now</span>
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3 font-bold"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>
            </p>
        </div>
    );
};

export default Card;
