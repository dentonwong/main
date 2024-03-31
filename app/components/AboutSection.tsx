import React from 'react';
import Image from 'next/image';

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Tailwind CSS' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'MongoDB' },
  { skill: 'PostgreSQL' },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pb-48 md:pt-16">
        <h1 className="text-center text-4xl font-bold">
          About Me
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-teal-500"></hr>
        </h1>

        <div className="flex flex-col items-stretch justify-center space-y-10 align-top md:flex-row md:space-x-10 md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Denton and I am a
              <span className="font-bold">{' self-motivated'}</span>,
              <span className="font-bold">{' ambitious'}</span>, and
              <span className="font-bold">{' curious'}</span> software engineer
              based in San Francisco, CA.
            </p>
            <br />
            <p>
              I graduated from University of California, Davis, in 2010 with a
              BS in Chemistry and a minor in Philosophy. I completed my
              Doctorate in Pharmacy in 2014 and had been working in the
              healthcare industry for well over 7 years. In mid-2023, I decided
              to make the drastic career change into Software Engineering and
              began self studying. I worked with an open source organization,
              Open Source Labs, for several months before settling into my
              current position as a Frontend Engineer with First Principles
              Publishing.
            </p>
            <br />
            <p>
              Most of my life now revolves around learning as much as I can
              regarding programming and software engineering. When I do take a
              break, some of my hobbies include making still life dioramas of
              houses or Japanese food stalls, archery, hiking, and just living
              away from a screen for a bit.
            </p>
            <br />
            <p>
              I believe that things you want
              <span className="font-bold text-teal-500">
                {' '}
                rarely come easily{' '}
              </span>
              and that I only fail when I give up. I am excited to see where
              this career transition takes me. I am constantly on the lookout
              for opportunities to combine both my passions for healthcare and
              software engineering!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-6 text-2xl font-bold">My Skills</h1>
            <div className="z-10 flex flex-row flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="mr-2 mt-2 rounded bg-gray-200 px-4 py-2 font-semibold text-gray-500"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/gg-image.png"
              alt=""
              width={325}
              height={325}
              className="mt-4 rounded-3xl md:z-0 md:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
