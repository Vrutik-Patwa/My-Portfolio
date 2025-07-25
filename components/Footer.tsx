"use client";
import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "692dfdea-c142-4a96-82b4-3d2f1d7df86b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <footer className="w-full pt-20 pb-16" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] ">Get in touch with me</h1>
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s how I can help you achieve your
          goals.
        </p> */}
        <Link href="mailto:vrutikpatwa@gmail.com"></Link>
      </div>

      {/* Contact Form Section */}
      <div className="mt-10 w-full max-w-[600px] mx-auto px-6">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-black-200 text-white focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-black-200 text-white focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Write your message here"
              className="w-full mt-2 p-3 border border-gray-300 rounded-md bg-black-200 text-white focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-[#BA6BC8] hover:bg-[purple]  text-white rounded-md text-lg font-medium hover:bg-purple-dark transition duration-300"
          >
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>

      <div className="flex flex-col items-center justify-between md:flex-row mt-16 gap-6">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © Vrutik Patwa
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <Link href={profile.link} key={profile.id} target="_blank">
              <div className="w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  ">
                <Image
                  src={profile.img}
                  alt={profile.name}
                  width={30}
                  height={30}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
