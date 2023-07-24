import { AiOutlineSend } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <div className="w-full h-full p-6 m-auto flex">
      <div className="w-1/2 text-center m-6 border-2 p-4 flex flex-col">
        <div className="flex flex-col gap-4 px-8">
          <h1 className="text-4xl font-bold uppercase">Contact</h1>
          <p className="text-md font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. At,
            laborum ipsa. Animi aliquid et minus repellat harum iste earum
            repellendus quaerat quam praesentium. Cumque iste, adipisci quisquam
            ab odit labore!
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-8">
          <div className="">
            <h1 className="text-lg font-bold uppercase">Mail</h1>
            <label className="font-light text-md">danybarociov@gmail.com</label>
            d
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase">Github</h1>
            <label>Clanie1</label>
          </div>
          <div>
            <h1 className="text-lg font-bold uppercase">Linkedin</h1>
            <label>Daniel Barocio</label>
          </div>
        </div>
      </div>
      <div className="w-1/2 bg-[#343443cc] m-6 p-4">
        <h1 className="uppercase font-bold text-4xl text-center">
          Contact From
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
      <div className="flex w-full justify-between gap-6">
        <div className="flex flex-col w-full">
          <label className="font-bold">First Name</label>
          <TextInput name="first_name" />
        </div>
        <div className="flex flex-col w-full">
          <label className="font-bold">Last Name</label>
          <TextInput name="last_name" />
        </div>
      </div>
      <div className="flex w-full justify-between gap-6">
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
