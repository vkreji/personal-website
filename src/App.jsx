import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import aboutPersonalImg from "../assets/about_personal.jpg";

export default function App() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });
  const [facingLeft, setFacingLeft] = useState(false);

  useEffect(() => {
    let lastX = 0;
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (e.clientX < lastX) setFacingLeft(true);
      else if (e.clientX > lastX) setFacingLeft(false);
      lastX = e.clientX;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="app-shell">
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <div className={`w-8 h-8 rounded-full border-1 border-neutral-600 ${facingLeft ? 'rotate-180' : ''} transition-transform duration-300`}>
          <div className="w-2 h-2 bg-neutral-600 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </motion.div>
        

      <div className="max-w-2xl mx-auto px-6 py-20 md:py-28">

        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8">
            <div className="max-w-sm">
              <h1 className="app-name font-semibold leading-none tracking-tight">Varun Reji</h1>
            </div>
          </div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-5 flex items-center gap-4"
          >
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
          </motion.div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="app-section-title">
            About
          </h2>
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
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="app-section-title">
            Experience
          </h2>

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
          
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="app-section-title">
            Projects
          </h2>

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
              <motion.a
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
              </motion.a>
            ))}
          </div>
        </motion.section>



        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="app-section-title">
            Contact
          </h2>
          <p className="app-body">
            Reach out at{" "}
            <a
              href="mailto:varunkreji@gmail.com"
              className="app-accent transition-colors"
            >
              varunkreji [at] gmail [dot] com
            </a>
          </p>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-16 pt-6 border-t border-neutral-800/30"
        >
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Varun Reji
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
