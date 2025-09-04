import React from "react";
import { FiBriefcase } from "react-icons/fi";

function Experience() {
  const workExp = [
    {
      duration: "2022-2023",
      role: "Software Engineer",
      org: "BYJU's",
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
      work_desc:
        "Spearheaded the beta rollout of the quotation and order management system, optimizing sales request handling and payment processing workflows for the team. Designed and integrated modules and microservices to enhance system functionality, reliability, and scalability. Translated complex business requirements into efficient, timely solutions while continuously refining and optimizing code to elevate overall system performance and quality.",
    },
    {
      duration: "2021-2022",
      role: "Associate Software Engineer",
      org: "BYJU's",
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
      work_desc:
        "Contributed to the development and maintenance of BYJU’s core “KART” order-punching system. Built and optimized web pages and RESTful APIs, leading the migration of services to a serverless architecture. Implemented rapid data-fix and database migration scripts to efficiently manage large-scale datasets and streamline database operations.",
    },
  ];
  return (
    <div id="experience" className="pt-20 min-h-95 lg:h-auto">
      <div className="flex gap-4">
        <FiBriefcase size={34} className="mt-0.5" />
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
          Experience
        </h1>
      </div>
      <div className="max-w-3xl space-y-16 md:space-y-4">
        {workExp.map((work, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row md:gap-15 opacity-90 group hover:opacity-100 hover:bg-slate-800/40 md:p-6 rounded-md hover:shadow-lg transition-all duration-200 ease-out"
          >
            <h1 className="text-xs font-semibold text-gray-600 w-1/4 mt-2">
              {work.duration}
            </h1>

            <div className="flex flex-col justify-start w-full">
              <h1 className="text-lg font-medium text-gray-200 group-hover:text-teal-300">
                {work.role} • {work.org}
              </h1>
              <p className="text-sm font-medium mt-2 lg:mt-4">
                {work.work_desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {work.tools.map((tool, i) => (
                  <a
                    href={tool.link}
                    target="_blank"
                    key={i}
                    className="px-3 py-0.5 rounded-full bg-cyan-900/30 text-teal-300 text-xs"
                  >
                    {tool.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
