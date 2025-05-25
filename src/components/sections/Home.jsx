import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../assets/profile.png";



export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-black relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <RevealOnScroll>
          <div className="text-white max-w-xl z-10 text-center md:text-left">
            <p className="text-gray-300 text-4xl mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-2">
              <span className="text-white">Akash</span>{" "}
              <span className="text-blue-500">Gautam</span>
            </h1>
            <h2 className="text-2xl text-gray-300 mb-4">
              I am a{" "}
              <span className="text-blue-400">
                <TypeAnimation
                  sequence={[
                    "FrontEnd Developer", 2000,
                    "UX/UI Designer", 2000,
                    "Problem Solver", 2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  wrapper="span"
                  cursor={true}
                />
              </span>
            </h2>
            <p className="text-gray-400 mb-6 text-lg">
            Passionate web developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, and Three.js. I create responsive, 
            dynamic, and engaging websites with a focus on user experience. Currently learning DSA in Python and always eager to 
            explore new technologies.


            </p>

            {/* Centered Buttons */}
            <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4 mb-6 pt-4">
              <a
                href="#contact"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Contact Me →
              </a>
              <a
                href="#projects"
                className="bg-black border border-white text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Right Image */}
        <div className="hidden md:block relative z-10 mt-10 md:mt-0">
          <div className="rounded-full border-4 border-blue-400 p-1 shadow-xl shadow-blue-500/30">
            <img
              src={profileImage}
              alt="Akash Gautam"
              className="rounded-full w-80 h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm flex flex-col items-center animate-bounce">
        <p>Scroll Down</p>
        <div className="border border-white w-4 h-4 rounded-full mt-1"></div>
      </div>
    </section>
  );
};
