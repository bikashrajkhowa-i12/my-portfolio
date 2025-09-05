"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import ContactButtons from "./ContactButtons";

function Footer() {
  return (
    <footer id="footer" className="pt-20 min-h-95 lg:h-auto bg-inherit">
      <div className="max-w-3xl mx-auto px-2 py-16 grid md:grid-cols-2 gap-12">
        {/* Intro + Social Links */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-200">Get in Touch</h2>
          <p className="text-gray-400">
            Your message is always welcome. Reach out or connect with me through
            social links below.
          </p>

          {/* Social Links */}
          <div className="w-10">
            <ContactButtons />
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-slate-800 p-8 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-gray-200 mb-6">
            Send a Message
          </h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <Label htmlFor="name" className="text-gray-300 font-medium mb-1">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Your Name"
                className="bg-slate-700 text-gray-200 p-3 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col">
              <Label htmlFor="email" className="text-gray-300 font-medium mb-1">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="bg-slate-700 text-gray-200 p-3 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col">
              <Label
                htmlFor="message"
                className="text-gray-300 font-medium mb-1"
              >
                Message
              </Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="bg-slate-700 text-gray-200 p-3 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200"
              ></Textarea>
            </div>

            <Button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 rounded-md mt-2 transition-colors duration-200"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-cyan-900/20 mt-12 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bikash | Portfolio. All rights
        reserved.
      </div>
    </footer>
  );
}

export default Footer;
