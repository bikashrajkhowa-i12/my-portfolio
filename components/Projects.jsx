"use client";
import React from "react";

import { useAppContext } from "@/context/AppContext";
import { MdArrowOutward } from "react-icons/md";

function Projects() {
  const { openModal, setScreenshots } = useAppContext();

  const projects = [
    {
      title: "My Portfolio Website",
      img: "/projects/portfolio/2.jpg",
      link: "https://bikashrajkhowa.vercel.app",
      screenshots: [
        "/projects/portfolio/1.jpg",
        "/projects/portfolio/2.jpg",
        "/projects/portfolio/3.jpg",
      ],
      alt: "My Portfolio Website preview",
      desc: "A responsive portfolio built with Next.js, Tailwind CSS, and subtle animations. Showcases my skills, experience, and projects with interactive previews. Deployed on Vercel.",
      tools: [
        { name: "Next.js", link: "https://nextjs.org/" },
        { name: "Tailwind-CSS", link: "https://tailwindcss.com/" },
        { name: "Vercel", link: "https://vercel.com/" },
      ],
    },
    {
      title: "Footscribe90",
      img: "/projects/football-blog-app/1.jpg",
      link: "https://footscribe90.vercel.app",
      screenshots: [
        "/projects/football-blog-app/1.jpg",
        "/projects/football-blog-app/2.jpg",
        "/projects/football-blog-app/3.jpg",
        "/projects/football-blog-app/4.jpg",
      ],
      alt: "Footscribe preview",
      desc: "Developed a responsive football-blog web app with role-based access, Google OAuth authentication, session management, and interactive features like likes and comments.",
      tools: [
        { name: "Next.js", link: "https://nextjs.org/" },
        { name: "Tailwind-CSS", link: "https://tailwindcss.com/" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "Express", link: "https://expressjs.com/" },
        { name: "MongoDB", link: "https://www.mongodb.com/" },
        { name: "Postgres", link: "https://www.postgresql.org/" },
      ],
    },
    {
      title: "Handipro",
      img: "/projects/handipro/1.jpg",
      link: "https://handipro.vercel.app",
      screenshots: [
        "/projects/handipro/1.jpg",
        "/projects/handipro/2.jpg",
        "/projects/handipro/3.jpg",
      ],
      alt: "Handipro preview",
      desc: "Handipro is a football market insight app for beginners. Built with React and React-Bootstrap with a clean, responsive design showing popular football markets.",
      tools: [
        { name: "React", link: "https://react.dev/" },
        {
          name: "React-Bootstrap",
          link: "https://react-bootstrap.netlify.app/",
        },
      ],
    },
    {
      title: "CINEMA",
      img: "/projects/movies-app/1.jpg",
      screenshots: [
        "/projects/movies-app/1.jpg",
        "/projects/movies-app/2.jpg",
        "/projects/movies-app/3.jpg",
      ],
      alt: "Movies App preview",
      desc: "A movie browsing web app built with the MERN stack. Fetches live data from TMDB API, displaying movie info, ratings, genres, and actors.",
      tools: [
        { name: "React", link: "https://react.dev/" },
        { name: "CSS", link: "https://en.wikipedia.org/wiki/CSS" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "Express", link: "https://expressjs.com/" },
        { name: "MongoDB", link: "https://www.mongodb.com/" },
      ],
    },
    {
      title: "Generic Serverless API • BYJU's",
      img: "/projects/govt-api/1.jpg",
      screenshots: ["/projects/govt-api/1.jpg"],
      alt: "Govt API preview",
      desc: "Built a robust generic serverless API for a government client. Implemented validations, rate limiting, and scalable architecture for school order-punching.",
      tools: [
        { name: "AWS Lambda", link: "https://aws.amazon.com/pm/lambda/" },
        { name: "AWS SQS", link: "https://aws.amazon.com/sqs/" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "MongoDB", link: "https://www.mongodb.com/" },
        { name: "Postgres", link: "https://www.postgresql.org/" },
      ],
    },
  ];

  return (
    <div id="projects" className="py-20 min-h-95 lg:h-auto">
      <h1 className="text-2xl lg:text-2xl tracking-tight mb-6 text-gray-300">
        Projects
      </h1>

      <div className="max-w-3xl space-y-12 md:space-y-8 group/parent">
        {projects.map((project, idx) => {
          const img = project?.img;
          const ContentWrapper = ({ children }) => {
            return project?.link ? (
              <a
                href={project?.link || "#"}
                target="_blank"
                aria-label="Visit project website"
                rel="noopener noreferrer"
                className="flex flex-col gap-1.5 cursor-pointer"
              >
                {children}
              </a>
            ) : (
              <span
                aria-label="Visit project website"
                className="flex flex-col gap-1.5 cursor-pointer"
                onClick={() => {
                  openModal();
                  setScreenshots(project.screenshots);
                }}
              >
                {children}
              </span>
            );
          };
          return (
            <div
              key={idx}
              className="group/child flex flex-col md:flex-row md:gap-8 opacity-90 group-hover/parent:opacity-40 hover:!opacity-100 transition-all duration-300 ease-out md:p-6 rounded-md hover:md:bg-gradient-to-b from-teal-300/5 via-gray-500/10 to-slate-800/25 hover:md:shadow-lg"
            >
              {/* Image */}
              <div className="hidden md:block mt-2 w-2/6">
                {img ? (
                  <img
                    src={project.img}
                    alt={project.alt}
                    onClick={() => {
                      openModal();
                      setScreenshots(project.screenshots);
                    }}
                    className="object-cover h-25 w-full rounded-sm border-1 border-cyan-600/50 cursor-pointer hover:scale-110 transition duration-200 ease-out"
                  />
                ) : (
                  <div>Loading...</div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-start w-full group">
                <ContentWrapper>
                  <div className="flex gap-1.5 group">
                    <h2 className="text-lg font-medium text-gray-200 group-hover:text-teal-300 group-active:text-teal-300">
                      {project.title}
                    </h2>
                    {project?.link && (
                      <MdArrowOutward className="mt-2 group-active:text-teal-300 group-hover:text-teal-300 group-hover:-translate-y-1 group-hover:translate-x-1.5 transition duration-100 ease-in" />
                    )}
                  </div>
                  <p className="text-sm font-medium mt-1">{project.desc}</p>
                </ContentWrapper>

                {/* Tools */}
                <div className="text-sm font-medium mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <a
                      aria-label="Visit external-website link"
                      key={i}
                      href={tool.link}
                      onClick={(e) => e.stopPropagation()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-0.5 rounded-full bg-teal-900/30 text-teal-300 text-xs"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex md:hidden mt-2 h-25 w-45 mt-4">
                <img
                  src={project.img}
                  alt={project.alt}
                  onClick={() => {
                    openModal();
                    setScreenshots(project.screenshots);
                  }}
                  className="object-cover h-full w-full rounded-sm border-1 border-cyan-600/50"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
