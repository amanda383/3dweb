import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'

import { styles } from "../styles"
import { EarthCanvas, StarsCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"

//template_w5jdm2ptemplate_w5jdm2p

//service_fmdyhev
//mxRKZUpaUrQR41e_l
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_fmdyhev',
        'template_w5jdm2p',
        {
          from_name: form.name,
          to_name: "Amanda",
          from_email: form.email,
          to_email: "swordeyes132@gmail.com",
          message: form.message,
        },
        'mxRKZUpaUrQR41e_l'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className="xl:mt-12 xl:flex-row justify-center flex flex-col lg:flex-row gap-10 overflow-hidden">
    
    <motion.div variants={slideIn('right', "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    
    >
      <p className={styles.sectionSubText}>Get in Touch</p>
      <h3 className={styles.sectionHeadText}>Contact me</h3>

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
            placeholder="What is your name?"
            className="placeholder: bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium" />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Email</span>
          <input 
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What is your email?"
            className="placeholder: bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium" />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your message</span>
          <textarea 
            name="message"
            rows="7"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="placeholder: bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium"></textarea>
        </label>

        <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl bg-center">
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>

    
    </motion.div>
  
    
    <StarsCanvas/>
  

  </div>
  

  )
  
}


export default SectionWrapper(Contact, "contact")