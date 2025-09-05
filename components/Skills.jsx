import React from "react";
import { FaLaptopCode } from "react-icons/fa";

function Skills() {
  const skills = [
    { name: "HTML", img_url: "/tech-icons/html.svg" },
    { name: "CSS", img_url: "/tech-icons/css.svg" },
    { name: "Javascript", img_url: "/tech-icons/javascript.svg" },
    { name: "React", img_url: "/tech-icons/react.svg" },
    { name: "Next.js", img_url: "/tech-icons/nextjs.svg" },
    { name: "Tailwind CSS", img_url: "/tech-icons/tailwind.svg" },
    { name: "Node.js", img_url: "/tech-icons/nodejs.svg" },
    { name: "Express", img_url: "/tech-icons/expressjs.svg" },
    { name: "Serverless", img_url: "/tech-icons/serverless.svg" },
    { name: "REST Api", img_url: "/tech-icons/rest_api.svg" },
    { name: "Postgres", img_url: "/tech-icons/postgresql.svg" },
    { name: "MongoDB", img_url: "/tech-icons/mongodb.svg" },
    { name: "Postman", img_url: "/tech-icons/postman.svg" },
    { name: "Docker", img_url: "/tech-icons/docker.svg" },
    { name: "Github", img_url: "/tech-icons/github.svg" },
    { name: "AWS", img_url: "/tech-icons/aws.svg" },
    { name: "Vercel", img_url: "/tech-icons/vercel.svg" },
    { name: "JIRA", img_url: "/tech-icons/jira.svg" },
    { name: "VS Code", img_url: "/tech-icons/vscode.svg" },
    { name: "Draw.io", img_url: "/tech-icons/drawio.svg" },
  ];

  return (
    <div id="skills" className="pt-20 min-h-95 lg:h-auto">
      <div className="flex gap-4">
        <FaLaptopCode size={34} className="mt-0.5" />
        <h1 className="text-2xl lg:text-3xl font-bold mb-6 tracking-tight">
          Skills
        </h1>
      </div>

      <p className="mb-4">
        A snapshot of the tools and technologies I use in my projects:
      </p>
      <div className="grid grid-cols-4 border border-gray-800/50 rounded-sm gap-5 py-6">
        {skills.map((skill, idx) => {
          return (
            <div key={idx} className="flex flex-col items-center gap-2">
              <img
                src={skill.img_url}
                alt={skill.name}
                className="h-10 w-10 hover:scale-110 transition-transform duration-300 ease-out"
              />
              <p className="text-xs">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
