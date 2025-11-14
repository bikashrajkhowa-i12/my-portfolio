import Link from "next/link";
import React from "react";

import { MdArrowOutward } from "react-icons/md";

function Experience() {
  const workExp = [
    {
      duration: "2022-2023",
      role: "Software Engineer",
      org: "BYJU's",
      org_website: "https://byjus.com",
      tools: [
        { name: "React", link: "https://react.dev/" },
        { name: "Next.js", link: "https://nextjs.org/" },
        {
          name: "React-Bootstrap",
          link: "https://react-bootstrap.netlify.app/",
        },
        { name: "MongoDB", link: "https://www.mongodb.com/" },
        { name: "Postgres", link: "https://www.postgresql.org/" },
        { name: "Node.js", link: "https://nodejs.org/en" },
        { name: "Express", link: "https://expressjs.com/" },
        { name: "Serverless", link: "https://www.serverless.com/" },
        { name: "AWS", link: "https://aws.amazon.com/" },
      ],
      work_desc: (
        <>
          Spearheaded the beta rollout of the quotation and order management
          system, optimizing sales request handling and payment processing
          workflows for the team. Designed and integrated modules and
          microservices to enhance system functionality, reliability, and
          scalability. Translated complex business requirements into efficient,
          timely solutions while continuously refining and optimizing code to
          elevate overall system performance and quality.
        </>
      ),
    },
    {
      duration: "2021-2022",
      role: "Associate Software Engineer",
      org: "BYJU's",
      org_website: "https://byjus.com",
      tools: [
        { name: "React", link: "https://react.dev/" },
        {
          name: "React-Bootstrap",
          link: "https://react-bootstrap.netlify.app/",
        },
        { name: "MongoDB", link: "https://www.mongodb.com/" },
        { name: "Postgres", link: "https://www.postgresql.org/" },
        { name: "NodeJs", link: "https://nodejs.org/en" },
        { name: "Express", link: "https://expressjs.com/" },
        { name: "Serverless", link: "https://www.serverless.com/" },
      ],
      work_desc: (
        <>
          Contributed to the development and maintenance of BYJU’s core{" "}
          <strong className="group-hover:text-gray-200 font-semibold">
            “KART”
          </strong>{" "}
          order-punching system. Built and optimized web pages and RESTful APIs,
          leading the migration of services to a{" "}
          <strong className="group-hover:text-gray-200 font-medium">
            serverless architecture
          </strong>
          . Implemented rapid data-fix and database migration scripts to
          efficiently manage large-scale datasets and streamline database
          operations.
        </>
      ),
    },
  ];

  return (
    <div id="experience" className="pt-22 min-h-95 lg:h-auto max-w-2xl">
      <h1 className="text-md font-bold mb-6 text-gray-300">EXPERIENCE</h1>

      <div className="max-w-3xl space-y-16 md:space-y-4 group/parent">
        {workExp.map((work, idx) => (
          <a
            href={work.org_website}
            target="_blank"
            key={idx}
            className="group/child flex flex-col md:flex-row md:gap-15 opacity-90 
                    group-hover/parent:opacity-40 hover:!opacity-100 md:p-5 rounded-md 
                    transition-all duration-200 ease-out hover:cursor-pointer hover:md:shadow-lg 
                    hover:md:bg-gradient-to-br from-teal-300/5 via-gray-500/10 to-slate-800/25"
          >
            {/* Duration */}
            <h2 className="text-xs font-semibold text-gray-500 w-1/4 mt-2">
              {work.duration}
            </h2>

            {/* Content */}
            <div className="flex flex-col justify-start w-full">
              {/* Title + Arrow */}
              <div className="flex gap-2 justify-start items-center">
                <h2 className="text-md font-medium text-white group-hover/child:text-teal-300">
                  {work.role} • {work.org}
                </h2>

                <MdArrowOutward
                  className="mt-1 transition duration-100 ease-in group-hover/child:text-teal-300
                            group-hover/child:-translate-y-1 group-hover/child:translate-x-1.5"
                />
              </div>

              {/* Description */}
              <div className="text-sm font-light leading-relaxed mt-2 lg:mt-4 text-gray-300/90 text-start">
                {work.work_desc}
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-4">
                {work.tools.map((tool, i) => (
                  <span
                    key={i}
                    onClick={() => window.open(tool.link, "_blank")}
                    className="px-3 py-0.5 rounded-full bg-teal-900/30 text-teal-300 text-xs"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <Link
        className="flex gap-2 group cursor-pointer pt-15 md:py-8"
        href="/cv/BIKASH_RAJKHOWA_SOFTWARE_ENGINEER_CV.pdf"
        target="_blank"
      >
        <h1 className="text-md font-semibold tracking-tight mb-6 text-gray-200 group-hover:text-teal-300">
          View Full Résumé
        </h1>
        <MdArrowOutward
          className="mt-2 transition duration-100 ease-in group-hover:text-teal-300
                            group-hover:-translate-y-1 group-hover:translate-x-1.5"
        />
      </Link>
    </div>
  );
}

export default Experience;
