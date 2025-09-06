import React from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

function GetInTouch({ text }) {
  return (
    <a href="#footer" title="Connect">
      <Button className="bg-transparent text-gray-300/80 hover:bg-teal-500 hover:text-gray-800 border border-gray-400/60 hover:border-cyan-500/50 font-bold rounded-md transition-colors duration-200">
        {text || "Get in Touch!"} <Send />
      </Button>
    </a>
  );
}

export default GetInTouch;
