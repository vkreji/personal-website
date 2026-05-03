import { useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="app-shell">
      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">

        <header className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8">
            <div className="max-w-sm">
              <h1 className="app-name font-semibold leading-none tracking-tight">Varun Reji</h1>
            </div>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://github.com/vkreji"
              target="_blank"
              rel="noopener noreferrer"
              className="app-accent transition-colors"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://linkedin.com/in/varun-reji/"
              target="_blank"
              rel="noopener noreferrer"
              className="app-accent transition-colors"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:varunkreji@gmail.com"
              className="app-accent transition-colors"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="app-section-title">About</h2>
          <div className="space-y-5 app-body">
            <p>
              I'm a <span className="app-accent font-medium">Computer Science</span> student at the University of Waterloo with a passion for building impactful software. I'm particularly interested in backend development, systems design, and AI.
            </p>
            <p>
              As of now, I'm using my time to explore and learn as much as I can. Not too sure exactly where I'll end up, but I believe that keeping my mind open and enjoying what I do will naturally lead me to the right opportunities.
            </p>
            <p>
              In my free time, I enjoy listening to music, hiking, and exploring new restaurants and cafes.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="app-section-title">Experience</h2>

          <div className="space-y-10">
            <div className="group">
              <div className="flex items-baseline justify-between mb-1.5">
                <h3 className="text-[15px] font-medium app-accent">
                  Canada Life Assurance Company
                </h3>
                <span className="text-xs app-muted">
                  May 2026 — Aug 2024
                </span>
              </div>
              <p className="text-sm app-muted mb-2.5">Software Developer Intern</p>
              <ul className="text-[14px] app-muted leading-relaxed space-y-2">
                <li className="flex gap-3 items-start">
                  <span className="app-soft mt-0.5">→</span>
                  <span>Starting Spring 2026.</span>
                </li>
              </ul>
            </div>

            <div className="group">
              <div className="flex items-baseline justify-between mb-1.5">
                <h3 className="text-[15px] font-medium app-accent">
                  SAS TECHNO INC.
                </h3>
                <span className="text-xs app-muted">
                  Jun 2025 — Sep 2025
                </span>
              </div>
              <p className="text-sm app-muted mb-2.5">Web Developer Intern</p>
              <ul className="text-[14px] app-muted leading-relaxed space-y-2">
                <li className="flex gap-3 items-start">
                  <span className="app-soft mt-0.5">→</span>
                  <span>Designed and developed websites for local community organizations</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="app-section-title">Projects</h2>

          <div className="space-y-2">
            {[
              {
                title: "ScholarMatch",
                description: "AI powered scholarship matching platform",
                tech: "React, Python, FastAPI, Supabase",
                link: "https://github.com/vkreji/ScholarMatch"
              },
              {
                title: "Pathable",
                description: "Accessible routing app",
                tech: "React Native, Python, Firebase",
                link: "https://github.com/vkreji/Pathable"
              },
              {
                title: "Focus Space",
                description: "Minimal productivity timer",
                tech: "JavaScript",
                link: "https://github.com/vkreji/Focus-Space"
              }
            ].map((project, i) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group flex items-center justify-between py-5 border-b border-neutral-800/50 hover:border-neutral-700 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[15px] transition-colors ${hoveredProject === i ? 'app-project-title-hover' : 'app-project-title'
                      }`}>
                      {project.title}
                    </span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-all ${hoveredProject === i
                      ? 'app-project-arrow-hover translate-x-0.5 -translate-y-0.5'
                      : 'app-project-arrow'
                      }`} />
                  </div>
                  <p className="text-sm app-muted mt-1">
                    {project.description}
                  </p>
                </div>
                <span className="text-xs text-neutral-600 hidden sm:block">
                  {project.tech}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="app-section-title">Contact</h2>
          <p className="app-body">
            Reach out at{" "}
            <a
              href="mailto:varunkreji@gmail.com"
              className="app-accent transition-colors"
            >
              varunkreji [at] gmail [dot] com
            </a>
          </p>
        </section>

        <footer className="mt-16 pt-6 border-t border-neutral-800/30">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Varun Reji
          </p>
        </footer>
      </div>
    </div>
  );
}
