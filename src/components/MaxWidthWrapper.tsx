import React, { ReactNode } from "react";

const MaxWidthWrapper = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div className={className}>
            {children}
            <div className="mx-auto w-full max-w-screen-x1 px-2.5 md:px-20"></div>
        </div>
    );
};

export default MaxWidthWrapper;
