import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 flex justify-center items-center bg-black text-white pb-36"
    >
      <RevealOnScroll>
        <div className="max-w-4xl w-full mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r text-blue-500 bg-clip-text text-center">
            About Me
          </h2>

          {/* Updated About Me Paragraph with bullet points */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all mb-8">
            <p className="text-gray-300 mb-4">
              I’m a Software Engineering student with a solid foundation in frontend development. Passionate about UI/UX design and solving coding challenges, I create responsive, user-friendly websites using React and modern web technologies. I’m eager to contribute to the tech industry.
            </p>

            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Develop highly interactive Front end / User Interfaces for web and mobile applications.</li>
              <li>Hold a keen interest in Competitive Programming (CP).</li>
              <li>Love to learn new Technologies and keep improving.</li>
            </ul>
          </div>

          {/* Education Section */}
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all mb-8">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-3">
              <li>
                <strong>Rishihood University</strong> <br />
                B.Tech in Computer Science & Artificial Intelligence<br />
                <span className="text-sm ">2024 - 2028</span>
                <p className="mt-1">
                  Mastering skills in DSA, Web Development, and other new-age technologies.
                </p>
              </li>
              <li>
                <strong>Class XII (2024)</strong><br />
                B.G.B Braj Education Academy, Mathura
              </li>
              <li>
                <strong>Class X (2022)</strong><br />
                Shri Ji Baba Saraswati Vidya Mandir, Mathura
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
