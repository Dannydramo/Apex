import React from 'react';

const ParentLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-[95%] sm:w-[90%] my-16 mx-auto max-w-[1800px]">
            {children}
        </div>
    );
};

export default ParentLayout;
