import React, { useState } from "react";
import Input from "../components/ui/Input";
import CardButton from "../components/ui/CardButton";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormStatus("Please fill out all fields.");
      return;
    }
    console.log(
      `Form Submitted: ${formData.name} ${formData.email} ${formData.subject} ${formData.message}`
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setFormStatus("Thank you! Your message has been sent.");
  };
  return (
    <div className="py-20 max-w-6xl mx-auto md:px-20 xs:px-10 px-5">
      <h1 className="xs:text-3xl text-2xl font-bold text-center py-5 ">
        Contact Us
      </h1>
      <p className="text-lg font-semibold">We’d Love to Hear From You!</p>
      <p className="sm:text-sm text-[0.8rem] text-justify text-gray-600 ">
        Feel free to reach out for inquiries, feedback, or suggestions. Your
        input helps us improve and grow.
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
        <div>
          <h1 className="xs:text-2xl text-xl font-bold py-5 ">Contact Form</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder={"Enter Your Name"}
              name={"name"}
              value={formData.name}
              onchange={handleChange}
            />
            <Input
              placeholder={"Enter Your Email"}
              name={"email"}
              value={formData.email}
              onchange={handleChange}
            />
            <Input
              placeholder={"Enter Your Subject"}
              name={"subject"}
              value={formData.subject}
              onchange={handleChange}
            />
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className=" text-sm border border-slate-800 py-3 px-4 w-full outline-none focus:shadow-sm focus:shadow-navyBlue transition-all ease-in duration-200"
            ></textarea>
            <button
              type="submit"
              className="bg-navyBlue text-white py-2 px-4 sm:text-[0.9rem] text-[0.7rem] border-2 border-navyBlue  hover:bg-transparent hover:text-navyBlue transition-all ease-in duration-300 w-full"
            >
              Submit
            </button>
          </form>
          {formStatus && <p className="text-center py-3 text-sm">{formStatus}</p>}
        </div>
        <div>
          <h1 className="xs:text-2xl text-xl font-bold  py-5 ">
            Our Contact Information
          </h1>
          <div className="space-y-4">
            <a
              href="mailto:info@internshippakistan.com"
              className="hover:underline flex items-center gap-5 xs:text-lg text-sm"
            >
              <IoIosMail className="w-6 h-6 text-navyBlue" />{" "}
              info@internshippakistan.com
            </a>
            <p className="flex items-center gap-5 xs:text-lg text-sm">
              <FaSquarePhone className="w-6 h-6 text-navyBlue" /> +92-3402195735
            </p>
            <p className="flex items-center gap-5 xs:text-lg text-sm">
              <FaLocationDot className="w-6 h-6 text-navyBlue" /> 1234
              Internship Street, Islamabad, Pakistan
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="xs:text-3xl text-2xl font-bold text-center py-5 ">
          Location Map{" "}
        </h1>
        <div className="w-full h-60 md:h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.857020734235!2d73.08330021538235!3d33.68442254321169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQxJzA0LjAiTiA3M8KwMDUnMDQuOSJF!5e0!3m2!1sen!2s!4v1612357468932!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
