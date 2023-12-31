import { AiOutlineSend } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <div className="w-full md:h-full p-6 m-auto flex flex-col md:flex-row overflow-hidden">
      <div className="md:w-1/2 text-center md:m-6 border-2 p-4 flex flex-col">
        <div className="flex flex-col gap-4 md:px-8 px-2">
          <h1 className="text-4xl font-bold uppercase">Contact</h1>
          <p className="text-md font-light">
            I'm passionate about crafting stunning websites that blend
            creativity and functionality. Let's collaborate on your next
            project! Contact me for innovative solutions and seamless user
            experiences.
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <div className="">
            <h1 className="text-lg font-bold uppercase">Mail</h1>
            <label className="font-light text-md">danybarociov@gmail.com</label>
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase">Github</h1>
            <a href="https://github.com/Clanie1" className="underline">
              Clanie1
            </a>
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase">Linkedin</h1>
            <a
              href="https://www.linkedin.com/in/daniel-barocio-2746981a0/"
              className="underline"
            >
              Daniel Barocio
            </a>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-[#343443cc] md:mx-6 my-6 p-4">
        <h1 className="uppercase font-bold text-4xl text-center">
          Contact Form
        </h1>
        <div className="mt-10 px-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const form = useRef<any>();
  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (form.current !== undefined) {
      try {
        await emailjs.sendForm(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_YOUR_PUBLIC_KEY
        );
        alert("Email sent successfully!");
        form.current.reset();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form ref={form} className="flex flex-col gap-10" onSubmit={sendEmail}>
      <div className="flex flex-col md:flex-row w-full justify-between gap-6">
        <div className="flex flex-col w-full">
          <label className="font-bold">First Name</label>
          <TextInput name="first_name" />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold">Last Name</label>
          <TextInput name="last_name" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between gap-6">
        <div className="flex flex-col w-full">
          <label className="font-bold">Email</label>
          <TextInput name="email" type="email" />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold">Phone</label>
          <TextInput name="phone" type="number" />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="font-bold">How can I help?</label>
        <TextInput name="message" />
      </div>
      <button
        type="submit"
        className="self-end rounded-full border-[2px] px-6 py-2 w-fit flex items-center justify-center gap-1 hover:bg-white hover:cursor-pointer hover:text-black duration-75"
      >
        Submit
        <AiOutlineSend />
      </button>
    </form>
  );
};

const TextInput = ({
  name,
  type = "text",
}: {
  name: string;
  type?: string;
}) => {
  return (
    <input
      className="bg-inherit border-b-[1px] py-1 outline-none"
      name={name}
      type={type}
    />
  );
};

export default Contact;
