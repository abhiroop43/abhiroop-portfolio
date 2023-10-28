import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const recaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
    console.log(captchaToken);
    if (form.name && form.email && form.message && captchaToken) {
      // console.log("form filled");
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
  };

  const onCaptchaFill = (value) => {
    if (form.name && form.email && form.message) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
    setCaptchaToken(recaptchaRef.current.getValue());
    // console.log("captcha value: ", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    console.log(token);
    recaptchaRef.current.reset();
    setLoading(true);

    emailjs
      .send(
        "service_sgl96ne",
        "template_duj8c0e",
        {
          from_name: form.name,
          to_name: "Abhiroop Santra",
          from_email: form.email,
          to_email: "abhiroop.santra@gmail.com",
          message: form.message,
        },
        "SMrjZuh5gotQxCfrE",
      )
      .then(
        () => {
          setLoading(false);

          toast("Thank you. I will get back to you soon.", {
            toastId: 1,
            progressStyle: {
              background: "#804dee",
            },
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });

          setIsVerified(false);
        },
        (error) => {
          setLoading(false);
          console.log(error);

          toast("Something went wrong. Please try again later", {
            toastId: 1,
            type: "error",
            theme: "colored",
          });
        },
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What should I call you?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="How can I reach you?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to mention?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <ReCAPTCHA
            sitekey="6Ldp9tUoAAAAAK15W6mfsmZjPpOmAN4y400jxLdQ"
            ref={recaptchaRef}
            onChange={onCaptchaFill}
            theme="dark"
          />
          <button
            type="submit"
            disabled={!isVerified}
            className={`${
              !isVerified ? "bg-gray-500" : "bg-tertiary"
            } py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl`}
            // className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending...." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
