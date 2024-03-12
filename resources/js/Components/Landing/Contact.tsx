import React from 'react';
import useImage from '@/Hooks/useImage';
import clsx from 'clsx';

const mambaLogo = useImage("mamba-logo-white.svg");

const Contact = ({ title, button, odd }: {
    title?: JSX.Element | string | null,
    button: {
        text: string
        link: string
    }
    odd: boolean
}) => (
    <div className={clsx(
        'relative min-h-screen mx-4 flex flex-col items-center justify-center gap-8',
        odd && 'bg-white/10',
    )}>
        <img className='h-auto w-full max-w-[280px] mx-auto block' src={mambaLogo} />
        <div className='mx-8'>
            <h1 className='text-3xl lg:text-[3rem] lg:leading-[3rem] font-bold text-center'>
                {title}
            </h1>
        </div>
        <a
            href={button.link}
            className="rounded-md bg-green px-3.5 py-2.5 text-2xl font-semibold  shadow-sm white:bg-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green ring-2 ring-green  hover:bg-transparent hover:text-green"
        >
            {button.text}
        </a>
    </div>
)

export default Contact;