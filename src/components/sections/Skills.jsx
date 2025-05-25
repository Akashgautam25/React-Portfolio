import { useState } from "react";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiFirebase,
  SiFigma,
  SiNextdotjs,
} from "react-icons/si";

const skillsData = [
  { name: "React", Icon: SiReact, category: "Frontend", level: "Intermediate", colorClass: "text-cyan-400", shadowColor: "rgba(34, 211, 238, 0.4)" },
  { name: "TypeScript", Icon: SiTypescript, category: "Frontend", level: "Intermediate", colorClass: "text-blue-400", shadowColor: "rgba(96, 165, 250, 0.4)" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, category: "Frontend", level: "Intermediate", colorClass: "text-cyan-500", shadowColor: "rgba(6, 182, 212, 0.4)" },
  { name: "Node.js", Icon: SiNodedotjs, category: "Backend", level: "Intermediate", colorClass: "text-green-500", shadowColor: "rgba(34, 197, 94, 0.4)" },
  { name: "Git", Icon: SiGit, category: "Tools", level: "Intermediate", colorClass: "text-orange-500", shadowColor: "rgba(249, 115, 22, 0.4)" },
  { name: "HTML", Icon: SiHtml5, category: "Frontend", level: "Intermediate", colorClass: "text-orange-400", shadowColor: "rgba(251, 146, 60, 0.4)" },
  { name: "CSS", Icon: SiCss3, category: "Frontend", level: "Intermediate", colorClass: "text-blue-300", shadowColor: "rgba(147, 197, 253, 0.4)" },
  { name: "JavaScript", Icon: SiJavascript, category: "Frontend", level: "Intermediate", colorClass: "text-yellow-400", shadowColor: "rgba(250, 204, 21, 0.4)" },
  { name: "Next.js", Icon: SiNextdotjs, category: "Frontend", level: "Intermediate", colorClass: "text-white", shadowColor: "rgba(255, 255, 255, 0.4)" },
  { name: "Python", Icon: SiPython, category: "Languages", level: "Intermediate", colorClass: "text-blue-400", shadowColor: "rgba(96, 165, 250, 0.4)" },
  { name: "Firebase", Icon: SiFirebase, category: "Backend", level: "Intermediate", colorClass: "text-yellow-500", shadowColor: "rgba(253, 224, 71, 0.4)" },
  { name: "Figma", Icon: SiFigma, category: "Tools", level: "Intermediate", colorClass: "text-pink-400", shadowColor: "rgba(244, 114, 182, 0.4)" },
];

const categories = ["All", "Frontend", "Backend", "Languages", "Tools"];

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === selectedCategory);

  return (
    <section id="skills" className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">
          My <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          I&apos;ve worked with a variety of technologies and tools throughout my
          education and projects. Here are some of the key skills I&apos;ve
          developed.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition duration-300 ease-in-out ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : " text-gray-300 hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {filteredSkills.map(({ Icon, name, level, colorClass, shadowColor }, i) => (
            <div
              key={i}
              className={`relative group border-2 border-white/10 rounded-xl p-6 flex flex-col items-center transition-all duration-300 ease-in-out animate-float`}
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full mb-3 transition-transform duration-500 group-hover:rotate-6"
                style={{ boxShadow: `${shadowColor} 0px 0px 15px` }}
              >
                <Icon className={`text-3xl ${colorClass}`} />
              </div>
              <div className="text-base font-semibold mb-2">{name}</div>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                {level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
