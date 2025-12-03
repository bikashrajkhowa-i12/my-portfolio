import React from "react";

import { motion } from "framer-motion";

import { MdArrowOutward } from "react-icons/md";

function Experience({ slideScreen }) {
  const workExp = [
    {
      duration: "2022 — 2023",
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
          system, streamlining sales requests and payment workflows. Designed
          and integrated key modules and microservices to boost functionality,
          reliability, and scalability. Translated complex business needs into
          efficient solutions while continuously optimizing code for performance
          and quality.
        </>
      ),
    },
    {
      duration: "2021 — 2022",
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
          Contributed to the development and maintenance of BYJU’s core “KART”{" "}
          order-punching system. Built and optimized web pages and RESTful APIs,
          leading the migration of services to a serverless architecture .
          Implemented rapid data-fix and database migration scripts to
          efficiently manage large-scale datasets and streamline database
          operations.
        </>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={slideScreen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      id="experience"
      className="pt-22 min-h-95 lg:h-auto max-w-2xl"
    >
      <h1 className="text-md font-bold mb-6 text-gray-300">EXPERIENCE</h1>

      <div className="max-w-3xl space-y-16 md:space-y-6 group/parent">
        {workExp.map((work, idx) => (
          <a
            href={work.org_website}
            target="_blank"
            key={idx}
            className="group/child flex flex-col md:flex-row md:gap-15 opacity-90 border-t border-transparent
                    hover:!border-cyan-200/10 group-hover/parent:opacity-45 hover:!opacity-90 md:px-6 md:py-4 
                    rounded-sm transition-all duration-300 ease-out hover:cursor-pointer hover:md:shadow-lg 
                    hover:md:bg-teal-100/[0.038]"
          >
            {/* Duration */}
            <h2 className="text-xs font-medium text-gray-400/80 w-1/4 my-1.5">
              {work.duration}
            </h2>

            {/* Content */}
            <div className="flex flex-col justify-start w-full">
              {/* Title + Arrow */}
              <div className="flex gap-2 justify-start items-center">
                <h2 className="text-md font-medium text-white group-hover/child:text-[#64EBD6]">
                  {work.role} • {work.org}
                </h2>

                <MdArrowOutward
                  className="mt-1 transition duration-100 ease-in group-hover/child:text-teal-300
                            group-hover/child:-translate-y-1 group-hover/child:translate-x-1.5"
                />
              </div>

              {/* Description */}
              <div className="text-[0.9rem] font-[340] mt-2 lg:mt-4 text-blue-200/75 text-start">
                {work.work_desc}
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mt-4">
                {work.tools.map((tool, i) => (
                  <span
                    key={i}
                    onClick={() => window.open(tool.link, "_blank")}
                    className="px-3 py-1.5 rounded-full bg-teal-300/8 
                      text-teal-300 text-xs font-medium shadow-sm"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}

export default Experience;
