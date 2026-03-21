import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function App() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20 });
  const [facingLeft, setFacingLeft] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
            alt="Loading"
            className="w-20 h-20 mx-auto mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          />
          <motion.div
            className="text-neutral-400 text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111] text-neutral-400 selection:bg-orange-500/20 selection:text-orange-200">
      <motion.div
        className="fixed pointer-events-none z-50 hidden md:block"
        style={{ x: springX, y: springY }}
      >
        <motion.img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
          alt="Pikachu"
          className="w-10 h-10 object-contain"
          style={{ scaleX: facingLeft ? -1 : 1 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />
      </motion.div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden hidden md:block">
        <motion.img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/92.gif"
          alt=""
          className="absolute top-[15%] right-[10%] w-12 h-12 opacity-30"
          animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />

        <motion.img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/143.gif"
          alt=""
          className="absolute bottom-8 left-[5%] w-14 h-14 opacity-20"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        <motion.img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/129.gif"
          alt=""
          className="absolute bottom-[20%] right-[8%] w-10 h-10 opacity-25"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
        />

        <motion.img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif"
          alt=""
          className="absolute top-[40%] left-[3%] w-8 h-8 opacity-20"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />

        <motion.img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/94.gif"
          alt=""
          className="absolute top-[60%] right-[3%] w-12 h-12 opacity-15"
          animate={{ x: [0, -5, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 py-24 md:py-32">

        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-start justify-between gap-8">
            <div>
              <h1 className="text-neutral-100 text-2xl font-medium tracking-tight">
                Varun Reji
              </h1>
              <p className="mt-1 text-sm">CS @ UWaterloo '30</p>
            </div>

            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              src="/assets/about_personal.jpg"
              alt="Varun Reji"
              className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-neutral-300 leading-relaxed max-w-md"
          >
            I like building things that work well and look good.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 flex items-center gap-4"
          >
            <a
              href="https://github.com/vkreji"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-100 transition-colors"
            >
              <Github className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://linkedin.com/in/varun-reji/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-100 transition-colors"
            >
              <Linkedin className="w-[18px] h-[18px]" />
            </a>
            <a
              href="mailto:varunkreji@gmail.com"
              className="text-neutral-500 hover:text-neutral-100 transition-colors"
            >
              <Mail className="w-[18px] h-[18px]" />
            </a>
          </motion.div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
            About
          </h2>
          <div className="space-y-4 text-[15px] leading-relaxed">
            <p>
              Hey! I'm from Brampton, Ontario. Currently studying Computer Science
              at the University of Waterloo.
            </p>
            <p>
              When I'm not programming, you'll find me adding to my cologne collection,
              listening to music, or playing the newest pokemon game!
            </p>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
            Projects
          </h2>

          <div className="space-y-1">
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
                className="group flex items-center justify-between py-4 border-b border-neutral-800/50 hover:border-neutral-700 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-[15px] transition-colors ${hoveredProject === i ? 'text-neutral-100' : 'text-neutral-300'
                      }`}>
                      {project.title}
                    </span>
                    <ArrowUpRight className={`w-3.5 h-3.5 transition-all ${hoveredProject === i
                      ? 'text-neutral-100 translate-x-0.5 -translate-y-0.5'
                      : 'text-neutral-600'
                      }`} />
                  </div>
                  <p className="text-sm text-neutral-500 mt-0.5">
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
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
            Now
          </h2>
          <div className="space-y-3 text-[15px]">
            <div className="flex items-baseline gap-3">
              <span className="text-neutral-600">→</span>
              <span>Looking for Summer 2026 internships</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-neutral-600">→</span>
              <span>Building side projects</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-neutral-600">→</span>
              <span>Doing side quests</span>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-6">
            Contact
          </h2>
          <p className="text-[15px] leading-relaxed">
            Want to chat? Reach out at{" "}
            <a
              href="mailto:varunkreji@gmail.com"
              className="text-neutral-100 hover:text-orange-300 transition-colors"
            >
              varunkreji@gmail.com
            </a>
          </p>
        </motion.section>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-24 pt-8 border-t border-neutral-800/30"
        >
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} Varun Reji
          </p>
        </motion.footer>
      </div>
    </div>
  );
}
