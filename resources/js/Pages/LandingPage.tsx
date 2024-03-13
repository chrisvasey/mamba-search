import React from 'react';
import { Head } from '@inertiajs/react';
import Hero from '@/Components/Landing/Hero';
import Section from '@/Components/Landing/Section';
import Contact from '@/Components/Landing/Contact';

const content: {
  title: string | JSX.Element;
  type: string;
  content?: string | JSX.Element;
  button?: {
    text: string;
    link: string;
  };
}[] = [
  {
    title: (
      <>
        Together we redefine <span className="text-green">success</span>
      </>
    ),
    type: 'hero',
    content: 'Your premier technology & sales recruitment partner',
  },
  {
    title: 'Mamba Search is revolutionising talent acquisition',
    type: 'section',
    content: (
      <>
        <p>
          With a unique blend of strategic expertise and compassionate{' '}
          <span className="text-green">leadership</span> in the tech and sales
          sectors.
          <br />
          <br />
          Find top-tier talent or{' '}
          <span className="text-green">advance your career</span>
        </p>
      </>
    ),
  },
  {
    title: "At Mamba Search, we're More than just a placement agency",
    type: 'section',
    content: (
      <p>
        We're <span className="text-green">partners in your success</span>.
        <br />
        With visionary leadership, we prioritize{' '}
        <span className="text-green">holistic growth</span>, ensuring every
        candidate thrives in their role.
        <br />
        <br />
        Whether you're a tech company or a sales organization, we have the
        resources and expertise to{' '}
        <span className="text-green">meet your needs</span>.
      </p>
    ),
  },
  {
    title: 'Experience the difference with Mamba Search.',
    type: 'section',
    content: (
      <p>
        Providing a unique end-to-end{' '}
        <span className="text-green">health and wellbeing</span> experiences
        that drive continuous <span className="text-green">growth</span> and{' '}
        <span className="text-green">optimal performance</span> for our clients
        and candidates.
        <br />
        <br />
        Together, we <span className="text-green">redefine success</span>,
        creating a community where greatness knows no bounds. Join us at Mamba
        Search, where{' '}
        <span className="text-green">greatness is not just a goal</span>, but a
        way of life.
      </p>
    ),
  },
  {
    title: 'Get in touch today.',
    type: 'contact',
    button: {
      text: 'Get Started',
      link: 'mailto:dillon@mambasearch.com',
    },
  },
];

export default function LandingPage() {
  return (
    <>
      <Head title="Welcome to Mamba Search" />

      {content.map((block, index) => {
        switch (block.type) {
          case 'hero':
            return (
              <Hero key={index} title={block.title} content={block?.content} />
            );
          case 'section':
            return (
              <Section
                key={index}
                title={block.title}
                content={block.content}
                odd={index % 2 != 0}
              />
            );

          case 'contact':
            return (
              <Contact
                key={index}
                title={block.title}
                button={block.button}
                odd={index % 2 != 0}
              />
            );

          default:
            break;
        }
      })}

      <div className=" bg-white/10 py-3">
        <p className="text-center text-white/30 text-base">
          &copy; {new Date().getFullYear()}{' '}
          <span className="text-green">Mamba Search</span>. All Rights Reserved.
        </p>
      </div>
    </>
  );
}
