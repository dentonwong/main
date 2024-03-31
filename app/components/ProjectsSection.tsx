import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'ReacType',
    description:
      'A Visual Prototyping Tool For React Developers with visualizers for the application architecture, drag-and-drop canvas interface, and interactive, real-time component code preview.',
    image: '/reactype.png',
    github: 'https://github.com/open-source-labs/ReacType',
    link: 'https://www.reactype.dev/',
  },
  {
    name: 'No Framework',
    description:
      'No Framework is barebones web app trying out different aspects of vanilla JS including RESTful API calls and simple cookies and authentication',
    image: '/noframework.png',
    github: 'https://github.com/dentonwong/noframework',
    link: '/',
  },
  // {
  //   name: 'PlatoIO',
  //   description: 'PlatoIO is a to do list app that built using the PERN stack.',
  //   image: '/platoio.png',
  //   github: 'https://github.com/hqasmei/platoio',
  //   link: 'https://platoio.com/register',
  // },
  // {
  //   name: 'Kator Family Photos',
  //   description:
  //     'Kator Family Photos is a photos and video digitization service in the LA area.',
  //   image: '/familyphotos.png',
  //   github: 'https://github.com/hqasmei/katorfamilyphotos',
  //   link: 'https://katorfamilyphotos.com/',
  // },
  // {
  //   name: 'Kator Family Photos',
  //   description:
  //     'Kator Family Photos is a photos and video digitization service in the LA area.',
  //   image: '/familyphotos.png',
  //   github: 'https://github.com/hqasmei/katorfamilyphotos',
  //   link: 'https://katorfamilyphotos.com/',
  // },
  // {
  //   name: 'Kator Family Photos',
  //   description:
  //     'Kator Family Photos is a photos and video digitization service in the LA area.',
  //   image: '/familyphotos.png',
  //   github: 'https://github.com/hqasmei/katorfamilyphotos',
  //   link: 'https://katorfamilyphotos.com/',
  // },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center text-4xl font-bold">
        Projects <br /> *Not up to date, please checkout my github for now*
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-teal-500"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -250px 0px">
                <div className="flex animate-slideUpCubiBezier  flex-col animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
