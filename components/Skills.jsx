import React from "react";

import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPostman,
  SiDocker,
  SiVercel,
  SiJira,
  SiMongodb,
  SiPostgresql,
  SiServerless,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 size={30} /> },
    { name: "CSS", icon: <SiCss3 size={30} /> },
    { name: "Javascript", icon: <SiJavascript size={30} /> },
    { name: "React", icon: <SiReact size={30} /> },
    { name: "Next.js", icon: <SiNextdotjs size={30} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={30} /> },
    { name: "Node.js", icon: <SiNodedotjs size={30} /> },
    { name: "Express", icon: <SiExpress size={30} /> },
    { name: "Serverless", icon: <SiServerless size={30} /> },
    { name: "Postgres", icon: <SiPostgresql size={30} /> },
    { name: "MongoDB", icon: <SiMongodb size={30} /> },
    { name: "Postman", icon: <SiPostman size={30} /> },
    { name: "Docker", icon: <SiDocker size={30} /> },
    { name: "Github", icon: <SiGithub size={30} /> },
    { name: "AWS", icon: <FaAws size={30} /> },
    { name: "Vercel", icon: <SiVercel size={30} /> },
    { name: "JIRA", icon: <SiJira size={30} /> },
    { name: "VS Code", icon: <VscVscode size={30} /> },
  ];

  return (
    <div id="skills" className="h-auto mt-10">
      <Accordion type="single" collapsible className="w-full md:w-4/6">
        <AccordionItem value="skills">
          <AccordionTrigger className="border-0 hover:no-underline flex justify-start items-center opacity-100 cursor-pointer">
            <h2 className="font-semibold tracking-tight text-lg text-gray-200">
              Tech Stack:
            </h2>
            <div className="flex items-center justify-between gap-2">
              <SiNextdotjs size={15} />
              <SiReact size={15} />
              <SiNodedotjs size={15} />
              <SiExpress size={22} />
              <span className="text-sm text-gray-400 ">... + more</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-4 border border-gray-800/50 rounded-sm gap-6 py-6">
              {skills.map((skill, idx) => {
                return (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    {skill.icon}
                    <p className="text-xs">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Skills;
