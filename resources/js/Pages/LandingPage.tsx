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
      title: 'Mamba Search is revolutionising talent acquisition',
      type: 'section',
      content: (
        <>
          <p>
            With a unique blend of strategic expertise and compassionate <span className='text-green'>leadership</span> in the tech and sales sectors.
            <br /><br />
            Find top-tier talent or <span className='text-green'>advance your career</span>
          </p>
        </>
      )
    },
    {
      title: "At Mamba Search, we're More than just a placement agency",
      type: 'section',
      content: (
        <p>
          We're <span className='text-green'>partners in your success</span>.
          <br />
          With visionary leadership, we prioritize <span className='text-green'>holistic growth</span>, ensuring every candidate thrives in their role.
          <br /><br />
          Whether you're a tech company or a sales organization, we have the resources and expertise to <span className='text-green'>meet your needs</span>.
        </p>
      )
    },
    {
      title: "Experience the difference with Mamba Search.",
      type: 'section',
      content: (
        <p>
          Providing a unique end-to-end <span className='text-green'>health and wellbeing</span> experiences that drive continuous <span className='text-green'>growth</span> and <span className='text-green'>optimal performance</span> for our clients and candidates.
          <br /><br />
          Together, we <span className='text-green'>redefine success</span>, creating a community where greatness knows no bounds. Join us at Mamba Search, where <span className='text-green'>greatness is not just a goal</span>, but a way of life.
        </p>
      )
    },
    {
      title: "Get in touch today.",
      type: 'contact',
      button: {
        text: 'Get Started',
        link: 'mailto:dillon@mambasearch.com'
      },
    },
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

          case 'contact':
            return (
              <Contact
                key={index}
                title={block.title}
                button={block.button}
                odd={index % 2 != 0}
              />
            )

          default:
            break;
        }
      })}

      <div className=' bg-white/10 py-3'>
        <p className='text-center text-white/30 text-base'>
          &copy; {new Date().getFullYear()} <span className='text-green'>Mamba Search</span>. All Rights Reserved.
        </p>
      </div>
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

const Section = ({ title, content, odd }: {
  title?: JSX.Element | string | null,
  content: JSX.Element
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

