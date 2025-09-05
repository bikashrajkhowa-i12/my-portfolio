import React from "react";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

function ContactButtons() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between gap-4">
        <a href="https://linkedin.com">
          <FaGithub
            size={23}
            color="white"
            className="opacity-60 hover:opacity-100"
          />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin
            size={23}
            color="white"
            className="opacity-60 hover:opacity-100"
          />
        </a>
        <a href="https://linkedin.com">
          <FaInstagram
            size={25}
            color="white"
            className="opacity-60 hover:opacity-100"
          />
        </a>
      </div>
      {/* <div className="p-2 space-y-2">
        <h1 className="text-center">Contact form</h1>
        <form onSubmit={""} className="space-y-2">
          <Input
            type="email"
            placeholder="Email"
            className="border border-gray-900 py-2"
          />
          <Textarea
            type="textarea"
            placeholder="Note"
            className="border border-gray-900 py-2"
          />
          <Button variant="outline" className="bg-transparent text-inherit">
            Submit
          </Button>
        </form>
      </div> */}
    </div>
  );
}

export default ContactButtons;
