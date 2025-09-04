import Image from "next/image";
import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { Button } from "./ui/button";

function Projects() {
  return (
    <div id="projects" className="py-20 min-h-95 lg:h-auto">
      <div className="flex gap-4">
        <FiBriefcase size={34} className="mt-0.5" />
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
          Projects
        </h1>
      </div>
      <div className="max-w-3xl space-y-16 md:space-y-4">
        {/* Footscribe */}
        <div className="flex flex-col md:flex-row md:gap-8 opacity-90 group hover:opacity-100 hover:bg-slate-800/40 md:p-6 rounded-md hover:shadow-lg transition-all duration-200 ease-out">
          <div className="hidden md:block mt-2 w-2/6 cursor-pointer">
            <img
              src={"/projects/football-blog-app/1.jpg"}
              alt="Footscribe preview"
              className="object-cover h-25 w-full rounded-sm border-4 border-gray-600"
            />
          </div>

          <div className="flex flex-col justify-start w-full cursor-pointer">
            <h1 className="text-lg font-medium text-gray-200 group-hover:text-teal-300">
              Footscribe90
            </h1>
            <p className="text-sm font-medium mt-1">
              Developed a responsive football-blog web app with role-based
              access. Implemented manual, as well as{" "}
              <a
                href="https://developers.google.com/identity/protocols/oauth2"
                alt="Google OAuth"
                target="_blank"
                className="group-hover:text-gray-200 font-semibold hover:underline"
              >
                Google OAuth
              </a>{" "}
              authentication, and session management. While also adding
              middlware for protected-routes. Enabled full CRUD for admins and
              interactive features (likes, comments) for users.
            </p>
            <div className="text-sm font-medium mt-3 flex flex-wrap gap-2">
              <a
                href="https://nextjs.org/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Next.js (App-Router)
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Tailwind-Css
              </a>
              <a
                href="https://nodejs.org/en"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Node.js
              </a>
              <a
                href="https://expressjs.com/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Express
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                MongoDB
              </a>
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Postgres
              </a>
              {/* <a
                href="https://aws.amazon.com/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                AWS
              </a> */}
            </div>
          </div>
        </div>

        {/* Handipro */}
        <div className="flex flex-col md:flex-row md:gap-8 opacity-90 group hover:opacity-100 hover:bg-slate-800/40 md:p-6 rounded-md hover:shadow-lg transition-all duration-200 ease-out">
          <div className="hidden md:block mt-2 w-2/6 cursor-pointer">
            <img
              src={"/projects/handipro/1.jpg"}
              alt="Handipro preview"
              className="object-cover h-25 w-full rounded-sm border-4 border-gray-600"
            />
          </div>

          <div className="flex flex-col justify-start w-full cursor-pointer">
            <h1 className="text-lg font-medium text-gray-200 group-hover:text-teal-300">
              Handipro
            </h1>
            <p className="text-sm font-medium mt-1">
              Handipro is a football market insight app that makes decoding
              match markets simple and beginner-friendly. Build with React and
              React-Bootstrap for a clean, responsive design. The app breaks
              down handicaps, over/under goals, double chance, either-half wins
              and all other popular markets in a clear, structured way — all
              without requiring users to log in.
            </p>
            <div className="text-sm font-medium mt-3 flex flex-wrap gap-2">
              <a
                href="https://react.dev/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                React
              </a>
              <a
                href="https://react-bootstrap.netlify.app/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                React-bootstrap
              </a>
            </div>
          </div>
        </div>

        {/* Movies App */}
        <div className="flex flex-col md:flex-row md:gap-8 opacity-90 group hover:opacity-100 hover:bg-slate-800/40 md:p-6 rounded-md hover:shadow-lg transition-all duration-200 ease-out">
          <div className="hidden md:block mt-2 w-2/6 cursor-pointer">
            <img
              src={"/projects/movies-app/1.jpg"}
              alt="Movies-app preview"
              className="object-cover h-25 w-full rounded-sm border-4 border-gray-600"
            />
          </div>

          <div className="flex flex-col justify-start w-full cursor-pointer">
            <h1 className="text-lg font-medium text-gray-200 group-hover:text-teal-300">
              CINEMA
            </h1>
            <p className="text-sm font-medium mt-1">
              It is a movie browsing web application that lets users explore
              detailed information about movies, including summaries, ratings,
              actors, genres, and more. Built with the{" "}
              <strong className="group-hover:text-gray-200">MERN</strong> stack,
              the app integrates the{" "}
              <strong className="group-hover:text-gray-200">TMDB</strong> API to
              fetch up-to-date movie data, providing a smooth and interactive
              browsing experience.
            </p>
            <div className="text-sm font-medium mt-3 flex flex-wrap gap-2">
              <a
                href="https://mern.js.org/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                MERN
              </a>
              <a
                href="https://en.wikipedia.org/wiki/CSS"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                CSS
              </a>
              <a
                href="https://nodejs.org/en"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Node.js
              </a>
              <a
                href="https://expressjs.com/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Express
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                MongoDB
              </a>
            </div>
          </div>
        </div>

        {/* Govt-api (byjus) */}
        <div className="flex flex-col md:flex-row md:gap-8 opacity-90 group hover:opacity-100 hover:bg-slate-800/40 md:p-6 rounded-md hover:shadow-lg transition-all duration-200 ease-out">
          <div className="hidden md:block mt-2 w-2/6 cursor-pointer">
            <img
              src={"/projects/govt-api/1.svg"}
              alt="Movies-app preview"
              className="object-contain h-25 w-full rounded-sm border-4 border-gray-600"
            />
          </div>

          <div className="flex flex-col justify-start w-full cursor-pointer">
            <h1 className="text-lg font-medium text-gray-200 group-hover:text-teal-300">
              Generic Serverless API • BYJU's
            </h1>
            <p className="text-sm font-medium mt-1">
              Built a robust generic serverless API for a government client to
              handle large-scale order-punching for school students. Designed
              and developed the API from scratch, implementing thorough
              validations and rate limiting to ensure reliability under heavy
              load. Worked closely with senior engineers to deliver a scalable,
              maintainable solution that streamlined complex operations for the
              client.
            </p>
            <div className="text-sm font-medium mt-3 flex flex-wrap gap-2">
              <a
                href="https://aws.amazon.com/pm/lambda/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                AWS Lamda
              </a>
              <a
                href="https://aws.amazon.com/sqs/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                AWS SQS
              </a>
              <a
                href="https://nodejs.org/en"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Node.js
              </a>
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                MongoDB
              </a>
              <a
                href="https://www.postgresql.org/"
                target="_blank"
                className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
              >
                Postgres
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
