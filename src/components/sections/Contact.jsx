import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { FaLeetcode } from "react-icons/fa6"; // LeetCode icon from FontAwesome 6

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="bg-black text-white px-4 pt-4 pb-8 flex justify-center items-center"
    >
      <RevealOnScroll>
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Section - Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              Contact <span className="text-blue-400">Me</span>
            </h2>
            <p className="text-gray-400">
              Feel free to reach out to me for any questions, opportunities, or
              just to say hello. I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">akashgautamm22@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-blue-400" />
                <div>
                  <p className="font-semibold">Phone Number</p>
                  <p className="text-gray-300">+91 80775 54658</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Akashgautam25"
                className="p-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-gautam-42ba31307/"
                className="p-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/yourtwitter"
                className="p-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://leetcode.com/u/Akash_gautam25/"
                className="p-2 bg-white/5 border border-white/10 rounded hover:bg-white/10 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLeetcode className="text-yellow-500" />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                placeholder="Your Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                required
                value={formData.message}
                placeholder="Your message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-400 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
