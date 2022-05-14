import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormSubmitMessage from "./FormSubmitMessage";
import { useInView } from "react-intersection-observer";
import galaxy from "./photo/galaxy.png";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showingSubmitMessage, setShowingSubmitMessage] = useState(false);

  const openSubmitMessage = () => {
    setShowingSubmitMessage(true);
  };

  const closeSubmitMessage = () => {
    setShowingSubmitMessage(false);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
    openSubmitMessage();
  };

  return (
    <>
      {showingSubmitMessage && (
        <FormSubmitMessage closeSubmitMessage={closeSubmitMessage} />
      )}
      <div
        id="contact"
        ref={ref}
        className={
          inView
            ? "fade-in-appear bg-zinc-900 h-screen p-2 flex flex-col justify-center items-center"
            : "fade-in bg-zinc-900 h-screen p-2 flex flex-col justify-center items-center"
        }
        style={{ backgroundImage: `url(${galaxy})` }}
      >
        <h2 className="text-4xl text-white mt-2">Contact Me</h2>
        <p className="text-emerald-300 my-4">
          Any question? Feel free to contact me
        </p>
        <form
          onSubmit={sendEmail}
          ref={form}
          className="flex flex-col justify-center w-5/6 sm:w-2/3 lg:w-1/3"
        >
          <input
            required
            placeholder="Name"
            className="input-slide bg-zinc-700 outline-none mt-2 p-2 text-white"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            required
            placeholder="Email"
            className="input-slide bg-zinc-700 outline-none mt-2 p-2 text-white"
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            placeholder="Your Message"
            className="input-slide bg-zinc-700 outline-none mt-2 p-2 h-40 text-white"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button
            className="self-end mt-4 btn-slide relative cursor-pointer w-full md:w-3/6 lg:w-2/6 border-2 border-emerald-300 text-gray-100 text-lg flex justify-center items-center"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
