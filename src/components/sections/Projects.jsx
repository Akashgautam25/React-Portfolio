import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 flex justify-center items-center bg-black text-white pb-48 pt-44"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 1: Browse Buy */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Browse Buy</h3>
              <p className="text-gray-400 mb-4">
                A responsive product search and filter app that lets users browse items with real-time search, multi-filter options (price, category, rating), and product detail display.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Tailwind CSS", "Node.js"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://browse-buy.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                View Project →
              </a>
            </div>

            {/* Project 2: Weather Webapp */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Weather Webapp</h3>
              <p className="text-gray-400 mb-4">
                A responsive Weather app to search cities and view real-time weather and 6-day forecasts using the OpenWeather API.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React.js"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://weather-project-abay.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                View Project →
              </a>
            </div>

            {/* Project 3: Currency Converter */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">Currency Converter</h3>
              <p className="text-gray-400 mb-4">
                A real-time currency converter that supports multiple currencies, exchange rate APIs, and intuitive user interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "REST API", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://currencyconverter-khaki.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                View Project →
              </a>
            </div>

            {/* Project 4: To-Do List App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow transition">
              <h3 className="text-xl font-bold mb-2">To-Do List App</h3>
              <p className="text-gray-400 mb-4">
                A sleek and minimal To-Do app with localStorage, task filters, and CRUD functionality.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "JavaScript", "Tailwind"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://todolist-ebon-kappa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4 block"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
