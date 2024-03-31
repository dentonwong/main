'use client'; // this is a client component
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 flex animate-fadeIn flex-col items-center justify-center py-16 text-center animation-delay-6 sm:py-32 md:flex-row md:space-x-4 md:py-48 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/githubprofpic.jpg"
            alt=""
            width={1760}
            height={1528}
            className="h-auto w-[325px] rounded-[50%] shadow-2xl"
            priority={true}
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-7xl">
            Hi, I&#39;m Denton Wong!
          </h1>
          <p className="mb-6 mt-4 text-lg md:text-2xl">
            I&#39;m a{' '}
            <span className="font-semibold text-teal-600">
              Software Engineer{' '}
            </span>
            from San Francisco, CA. Working towards creating software that makes
            life more seamless with less headaches.
          </p>
          <Link
            to="projects"
            className="rounded bg-teal-600 px-6 py-3 font-semibold text-neutral-100 shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center text-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={45} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
