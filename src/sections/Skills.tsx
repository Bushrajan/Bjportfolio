import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../components/SectionHeading";
import { Code, Briefcase, Wrench, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion"; // Framer Motion for filtering animation

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("main");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const skills = [
    { title: "MongoDB", logo: "/mongodb.png" },
    { title: "Express", logo: "/expressjs.png" },
    { title: "React", logo: "/react.png" },
    { title: "Node.js", logo: "/nodejs.png" },
    { title: "Html", logo: "/html.png" },
    { title: "Css", logo: "/css.png" },
    { title: "Javascript", logo: "/javascript.png" },
    { title: "ES6", logo: "/es6.png" },
    { title: "Next.js", logo: "/nextjs.png" },
  ];

  const skills3 = [
    { title: "Typescript", logo: "/typescript.png" },
    { title: "Figma", logo: "/figma.png" },
    { title: "Bootstrap", logo: "/bootstrap.png" },
    { title: "Tailwind", logo: "/tailwind.png" },
  ];

  const skills4 = [
    { title: "Git", logo: "/git.png" },
    { title: "Vercel", logo: "/vercel.png" },
    { title: "GitHub", logo: "/github.png" },
    { title: "Netlify", logo: "/netlify.png" },
  ];

  const skills5 = [
    { title: "Word", logo: "/word.png" },
    { title: "Excel", logo: "/excel.png" },
    { title: "Access", logo: "/access.png" },
    { title: "PowerPoint", logo: "/powerpoint.png" },
  ];

  const categories = [
    {
      id: "main",
      name: "Main Stack",
      icon: <Code size={24} />,
      skills: skills,
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Briefcase size={24} />,
      skills: skills3,
    },
    { id: "tools", name: "Tools", icon: <Wrench size={24} />, skills: skills4 },
    {
      id: "office",
      name: "Office",
      icon: <FileSpreadsheet size={24} />,
      skills: skills5,
    },
  ];

  const activeSkills =
    categories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with"
        />

        {/* Category Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="fade-up"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white scale-105"
                  : "bg-white dark:bg-dark-800 text-dark-600 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-dark-700"
              }`}
            >
              {" "}
              {category.icon} {category.name}{" "}
            </button>
          ))}
        </div>

        {/* Skills Grid with Filtering Animation */}
        <motion.div
          className="mx-auto flex flex-wrap justify-center items-center gap-5"
          
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeSkills.map((skill) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-slate-60 w-[190px] rounded-xl p-5 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-aos="flip-left" // AOS animation on page reload
            >
              <div className="flex card flex-col mx-auto items-center justify-center gap-4" data-aos="zoom-in">
                <img
                  src={skill.logo}
                  alt={skill.title}
                  className="w-16 h-16 object-contain"
                />
                <h3 className="text-center font-medium text-dark-800 dark:text-dark-100">
                  {skill.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
