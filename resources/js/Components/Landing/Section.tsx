import React from "react";
import clsx from "clsx";

const Section = ({ title, content, odd }: {
    title?: JSX.Element | string | null,
    content?: JSX.Element | null,
    odd: boolean
}) => (
    <div className={clsx(
        'relative min-h-screen flex flex-col lg:grid grid-cols-1 gap-x-4 py-16 lg:py-0 px-4 items-center justify-center',
        odd && 'bg-white/10',
        title && 'lg:grid-cols-2',
    )}>
        {title && (
            <div className='flex h-100 col-span-1'>
                <div className='w-full max-w-[900px]'>
                    <div className='text-center lg:text-left mx-8'>
                        <h1 className='text-5xl lg:text-[5rem] lg:leading-[5rem] font-bold'>
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        )}
        <div className={clsx(
            'mt-8 lg:mt-0 text-center lg:text-left',
            !title && 'text-center')}>
            <p className='mt-4 lg:mt-0 text-xl lg:text-3xl mx-4 font-bold'>
                {content}
            </p>
        </div>
    </div>
)

export default Section;