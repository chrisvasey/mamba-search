import React from 'react';
import useImage from '@/Hooks/useImage';

const mambaBackgroundIcon = useImage("mamba-bg-icon.png");
const mambaLogo = useImage("mamba-logo-white.svg");

const Hero = ({ title, content }: {
    title: string | JSX.Element,
    content?: string | JSX.Element
}) => (
    <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-x-4 mx-4">
        <div className='flex justify-center items-center h-100 col-span-1 lg:col-span-3 '>
            <div className='text-center lg:text-left max-w-[900px]'>
                <img className='h-auto w-full max-w-[280px] mb-12 mx-auto block lg:hidden' src={mambaLogo} />
                <h1 className='text-6xl lg:text-[5.5rem] lg:leading-[5.5rem] font-bold'>
                    {title}
                </h1>
                <p className='mt-4 text-xl lg:text-3xl'>
                    {content}
                </p>
            </div>
        </div>
        <div className='w-full hidden lg:flex col-span-2 items-end'>
            <div className='w-full'>
                <img className='h-auto w-full' src={mambaBackgroundIcon} />
            </div>
        </div>
    </div>
)

export default Hero;