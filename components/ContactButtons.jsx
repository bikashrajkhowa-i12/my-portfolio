import React from "react";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function ContactButtons() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex justify-between gap-4">
        <a
          aria-label="Visit Github Profile"
          href="https://github.com/bikashrajkhowa-i12"
          title="Github"
          target="_blank"
        >
          <FaGithub
            size={23}
            color="white"
            className="opacity-60 hover:opacity-100"
          />
        </a>
        <a
          aria-label="Visit LinkedIn Profile"
          href="https://www.linkedin.com/in/bikash-rajkhowa-857a191a6/"
          title="Linkedin"
          target="_blank"
        >
          <FaLinkedin
            size={23}
            color="white"
            className="opacity-60 hover:opacity-100"
          />
        </a>
        <a
          aria-label="Visit Instagram Profile"
          href="https://www.instagram.com/_.bikashrajkhowa/"
          title="Instagram"
          target="_blank"
        >
          <FaInstagram
            size={25}
            color="white"
            className="opacity-60 hover:opacity-100"
          />
        </a>
      </div>
    </div>
  );
}

export default ContactButtons;
