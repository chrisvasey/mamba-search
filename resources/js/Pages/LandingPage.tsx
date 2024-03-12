import { Link } from '@inertiajs/react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Head } from '@inertiajs/react';
import clsx from 'clsx'
import useImage from '@/Hooks/useImage';

const mambaBackgroundIcon = useImage("mamba-bg-icon.png");
const mambaLogo = useImage("mamba-logo-white.svg");

export default function LandingPage() {
  const content = [
    {
      title: (
        <>
          Together we redefine <span className="text-green">success</span>
        </>
      ),
      type: 'hero',
      content: 'Your premier technology & sales recruitment partner'
    },
    {
      title: 'Discover',
      type: 'section',
      content: (
        <p className='mt-4 lg:mt-0 text-3xl mx-4 font-bold'>
          Mamba Search is revolutionising talent <span className='text-green'>acquisition</span> with a unique blend of strategic expertise and compassionate <span className='text-green'>leadership</span> in the tech and sales sectors.
          <br /><br />
          Find <span className='text-green'>top-tier talent</span> or advance your career with Mamba Search today.
        </p>
      )
    }
  ]

  return (
    <>
      <Head title="Welcome to Mamba Search" />

      {content.map((block, index) => {
        switch (block.type) {
          case 'hero':
            return (
              <Hero
                key={index}
                title={block.title}
                content={block.content}
              />
            )
          case 'section':
            return (
              <Section
                key={index}
                title={block.title}
                content={block.content}
                odd={index % 2 != 0}
              />
            )

          default:
            break;
        }
      })}
    </>
  );
}

const Hero = ({ title, content }: {
  title: string | JSX.Element,
  content: string | JSX.Element
}) => (
  <div className="relative min-h-screen grid grid-cols-1 lg:grid-cols-5 gap-x-4 mx-4">
    <div className='flex justify-center items-center h-100 col-span-1 lg:col-span-3 '>
      <div className='text-center lg:text-left max-w-[900px]'>
        <img className='h-auto w-full max-w-[280px] mb-12 mx-auto block lg:hidden' src={mambaLogo} />
        <h1 className='text-[5.5rem] leading-[5.5rem] font-bold'>
          {title}
        </h1>
        <p className='mt-4 text-2xl'>
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

const Section = ({ title, content, odd }: {
  title: string,
  content: JSX.Element
  odd: boolean
}) => (
  <div className={clsx(
    'relative min-h-screen flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-x-4 mx-4 items-center justify-center',
    odd && 'bg-white/10'
  )}>
    <div className='flex h-100 col-span-1'>
      <div className='w-full max-w-[900px]'>
        <div className='text-center lg:text-left mx-8'>
          <h1 className='text-[5.5rem] leading-[5.5rem] font-bold'>
            {title}
          </h1>
        </div>
      </div>
    </div>
    <div>
      {content}
    </div>
  </div>
)

