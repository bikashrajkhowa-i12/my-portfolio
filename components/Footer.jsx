"use client";

import React, { useRef, useState } from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import ContactButtons from "./ContactButtons";
import { Loader2Icon, Send } from "lucide-react";
import { toast } from "sonner";
import { sendMessage } from "@/lib/emailjsService";

const MAX_MESSAGES_PER_DAY = 8;
const STORAGE_KEY = "contactFormSubmissions";

function Footer() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [msgSent, setMsgSent] = useState(false);

  const toastStyles = {
    warning: {
      backgroundColor: "rgba(219, 234, 4, 0.1)",
      color: "#e9f50dff",
      border: "transparent",
    },
    success: {
      backgroundColor: "rgba(34, 204, 230, 0.17)",
      color: "#05b091ff",
      border: "transparent",
    },
    error: {
      backgroundColor: "rgba(162, 48, 48, 0.19)",
      color: "#f50d0dff",
      border: "transparent",
    },
    info: {
      backgroundColor: "rgba(54, 145, 128, 0.36)",
      color: "#0ee8b1ff",
      border: "transparent",
    },
  };

  const getSubmissionTimestamps = () => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    const now = Date.now();
    // Keep only timestamps within last 24 hours
    return data.filter((ts) => now - ts < 24 * 60 * 60 * 1000);
  };

  const addSubmissionTimestamp = () => {
    const timestamps = getSubmissionTimestamps();
    timestamps.push(Date.now());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
  };

  const onClickSend = async (e) => {
    e.preventDefault();

    const timestamps = getSubmissionTimestamps();
    if (timestamps.length >= MAX_MESSAGES_PER_DAY) {
      toast.info("😊 Woah! Inbox full for today. Please try again tomorrow.", {
        style: {
          backgroundColor: "rgba(255, 223, 100, 0.2)", // soft yellow
          color: "#ffe600ff", // golden text
          border: "transparent",
        },
        duration: 5000,
      });

      formRef.current.reset();
      return;
    }

    setLoading(true);
    try {
      const form = formRef.current;

      // Check form validity
      if (!form.checkValidity()) {
        form.reportValidity();
        toast.warning("Please fill all the fields!", {
          style: toastStyles.warning,
        });
        return;
      }

      // Check for empty required fields
      const fields = Array.from(form.querySelectorAll("input, textarea"));
      const emptyRequired = fields.some(
        (field) => field.hasAttribute("required") && field.value.trim() === ""
      );

      if (emptyRequired) {
        toast.warning("Please fill all the fields!", {
          style: toastStyles.warning,
        });
        return;
      }

      // Send the message
      await sendMessage({ formRef });
      addSubmissionTimestamp();
      setMsgSent(true);
      form.reset();

      toast.success("Your message has been sent successfully!", {
        style: toastStyles.success,
      });
    } catch (error) {
      toast.error(`${error?.message || "Failed to send message!"}`, {
        style: toastStyles.error,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="discover" className="flex flex-col xl:pl-130">
      <div className="pt-20 h-auto bg-inherit">
        <div className="max-w-2xl mx-auto px-2 py-16 grid md:grid-cols-2 gap-2">
          {/* Intro + Social Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-200">Get in Touch</h2>
            <p className="text-gray-300/90 font-light leading-relaxed text-left">
              Your message is always welcome. Reach out or connect with me
              through social links below.
            </p>

            {/* Social Links */}
            <div className="pl-13 w-10">
              <ContactButtons />
            </div>
          </div>

          {/* Contact Form */}

          <div className="bg-slate-800/50 p-8 rounded-xl shadow-lg">
            {msgSent ? (
              <MsgSentComp resend={() => setMsgSent(false)} />
            ) : (
              <>
                <h2 className="text-xl font-bold text-gray-200 mb-6">
                  Send a Message
                </h2>
                <form ref={formRef} className="space-y-4">
                  <div className="flex flex-col">
                    <Label
                      htmlFor="name"
                      className="text-gray-300 font-medium mb-1"
                    >
                      Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required={true}
                      placeholder="Your Name"
                      className="bg-slate-700 text-gray-200 p-3 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200"
                    />
                  </div>

                  <div className="flex flex-col">
                    <Label
                      htmlFor="email"
                      className="text-gray-300 font-medium mb-1"
                    >
                      Email
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required={true}
                      placeholder="Your email"
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
                      name="message"
                      required={true}
                      rows={5}
                      placeholder="Write your message..."
                      className="bg-slate-700 text-gray-200 p-3 border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all duration-200"
                    ></Textarea>
                  </div>

                  <Button
                    aria-label="Send Message"
                    type="submit"
                    disabled={loading}
                    onClick={(e) => onClickSend(e)}
                    className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 rounded-md mt-2 transition-colors duration-200"
                  >
                    {loading ? (
                      <>
                        <Loader2Icon className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send
                        <Send />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-900/20 mt-12 py-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Bikash Rajkhowa.
        </div>
      </div>
    </section>
  );
}

const MsgSentComp = ({ resend }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-md font-medium text-green-500 tracking-tight">
        Message sent! 🎉
      </h2>

      <h2 className="text-sm font-medium text-gray-400 tracking-tight">
        Thanks for reaching out.{" "}
      </h2>
      <Button
        aria-label="Send another message"
        onClick={resend}
        className="w-full bg-teal-500 hover:bg-teal-600 text-gray-900 font-bold py-3 rounded-md mt-2 transition-colors duration-200"
      >
        Send another message <Send />
      </Button>
    </div>
  );
};

export default Footer;
