"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const SERVICE_ID = "service_np45axu";
const TEMPLATE_ID = "template_2sfis5k";
const USER_ID = "kt-L1Qxa_wfDuTyM2";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Bonjour Teaira";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Sending email...");
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        () => {
          console.log("Email sent successfully!");
          setSuccess(true);
          form.current.reset();
        },
        () => {
          console.log("Error sending email!");
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <label htmlFor="user_message">Votre message :</label>
          <textarea
            rows={6}
            id="user_message"
            name="user_message"
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
          />

          <label htmlFor="user_email">Votre adresse e-mail :</label>
          <input
            id="user_email"
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />

          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Envoyer
          </button>

          {success && (
            <span className="text-green-600 font-semibold">
              Votre message a été envoyé avec succès !
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
            Une erreur s&apos;est produite !            
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};
export default ContactPage;
