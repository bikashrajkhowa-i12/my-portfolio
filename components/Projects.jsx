"use client";
import React from "react";

import { useAppContext } from "@/context/AppContext";
import { FiBriefcase } from "react-icons/fi";

function Projects() {
  const { openModal, setScreenshots } = useAppContext();

  const projects = [
    {
      title: "My Portfolio Website",
      img: "/projects/portfolio/2.jpg",
      screenshots: ["/projects/portfolio/1.jpg", "/projects/portfolio/2.jpg"],
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
      screenshots: [
        "/projects/handipro/1.jpg",
        "/projects/handipro/2.jpg",
        "/projects/handipro/3.jpg",
      ],
      alt: "Handipro preview",
      desc: "Handipro is a football market insight app for beginners. Built with React and React-Bootstrap with a clean, responsive design showing popular betting markets.",
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
      <div className="flex gap-4 mb-8">
        <FiBriefcase size={34} className="mt-0.5" />
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">
          Projects
        </h1>
      </div>

      <div className="max-w-3xl space-y-8">
        {projects.map((project, idx) => {
          return (
            <div
              key={idx}
              onClick={() => {
                openModal();
                setScreenshots(project.screenshots);
              }}
              className="flex flex-col md:flex-row md:gap-8 group opacity-80 hover:opacity-100 transition-all duration-200 ease-out cursor-pointer md:p-6 rounded-md hover:bg-gradient-to-b from-teal-300/5 via-gray-500/10 to-slate-800/25 hover:shadow-lg"
            >
              {/* Image */}
              <div className="hidden md:block mt-2 w-2/6">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="object-cover h-25 w-full rounded-sm border-1 border-cyan-600/50"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-start w-full">
                <h2 className="text-lg font-medium text-gray-200 group-hover:text-teal-300">
                  {project.title}
                </h2>
                <p className="text-sm font-medium mt-1">{project.desc}</p>

                {/* Tools */}
                <div className="text-sm font-medium mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <a
                      key={i}
                      href={tool.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-0.5 rounded-full bg-teal-900/30 text-teal-300 text-xs"
                    >
                      {tool.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
