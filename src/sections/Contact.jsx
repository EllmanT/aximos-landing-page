import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Button from "../components/Button";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
    // State to track if the email was sent
    const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yk88aml",
        "template_gsi1pkj",
        form.current,
        "zgc_ussgUifkZui9v"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          setEmailSent(true);
           // Hide the notification after 5 seconds
    setTimeout(() => {
      setEmailSent(false);
      e.target.reset();
    }, 5000); //
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
 

<section
className="pb-12"
>
<Element
  name="contact"
  className="relative pb-12 pt-24 max-lg:pb-24 max-md:py-16 flex justify-center items-center bg-gray-50"
>
  {/* Container for Image + Heading and Form */}
  <div className="flex max-w-5xl w-full lg:flex-nowrap max-lg:flex-wrap gap-8 px-4 lg:px-0">
    {/* Left Side: Image and Heading */}
    <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <h3 className="h3 text-gray-700 mb-6">
        Contact Us
      </h3>
      <img
        src="/images/contact.webp"
        alt="Contact Us Illustration"
        className="w-full max-w-[400px] lg:max-w-[600px] xl:max-w-[700px] h-auto border-4 border-gray-300 shadow-xl rounded-lg animate-float"
      />
    </div>

    {/* Right Side: Contact Form */}
    <div className="lg:w-1/2 flex justify-center items-start">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full flex flex-col gap-6"
      >
        {/* Name Field */}
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="name">
           Company Name
          </label>
          <input
            id="name"
            name="user_company"
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-lg font-medium mb-2" htmlFor="email">
           Company Email
          </label>
          <input
            id="email"
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
  <label className="block text-lg font-medium mb-2" htmlFor="select-option">
  How can we assist you?
  </label>
  <select
    id="select-option"
    name="enquiry"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
    required
  >
    <option value="" disabled selected>
      Choose an option
    </option>
    <option value="Request a demo">Request a demo</option>
<option value="Request a quotation">Request a quotation</option>
<option value="Request a physical demo">Request a physical demo</option>
<option value="Get support">Get support</option>
<option value="Request a free trial">Request a free trial</option>
<option value="Ask a question">Ask a question</option>
<option value="Inquire about pricing plans">Inquire about pricing plans</option>
<option value="Report an issue or bug">Report an issue or bug</option>

  </select>
</div>


      
      
        {/* Submit Button */}
        <div className="flex justify-center" type="submit">
  
          <Button>Submit Request</Button>
        </div>
  {/* Notification that appears after email is submitted */}
  {emailSent && (
        <div className="mt-2 text-center">
          <span className="inline-block px-4 py-2 rounded-full bg-green-500 text-white text-sm">
            Email has been sent successfully!
          </span>
        </div>
  )}
        
      </form>
    </div>
  </div>
</Element>




</section>


  );
};

export default Contact;

