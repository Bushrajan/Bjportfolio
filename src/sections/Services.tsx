import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  LayoutGrid,
  BarChart,
  Smartphone,
} from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      description: "Building responsive web applications.",
      color: "primary",
    },
    {
      icon: <Database size={40} />,
      title: "Backend Development",
      description: "Building robust server-side applications.",
      color: "secondary",
    },
    {
      icon: <LayoutGrid size={40} />,
      title: "Frontend Development",
      description: "Crafting beautiful and interactive UI.",
      color: "accent",
    },
    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      description: "Designing engaging digital experiences.",
      color: "primary",
    },
    {
      icon: <BarChart size={40} />,
      title: "Performance Optimization",
      description: "Enhancing speed and efficiency.",
      color: "secondary",
    },
    {
      icon: <Smartphone size={40} />,
      title: "Responsive Design",
      description: "Optimizing usability across devices.",
      color: "accent",
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center section bg-gray-50 dark:bg-dark-900"
    >
      <div className="container-custom2">
        <SectionHeading
          title="My Services"
          subtitle="Specialized solutions I offer to meet your digital needs"
        />

        <div className="grid justify-center grid-cols-1 gap-5 mx-auto sm:grid-cols-3 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }} // Scroll animation added
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              className={`card lg:px-3 border-t-4 border-${service.color}-500 hover:shadow-xl transition-all duration-300`}
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <div
                className={`text-${service.color}-500 dark:text-${service.color}-400 mb-6 float-end`}
              >
                {service.icon}
              </div>
              <h3 className="mb-3 text-3xl font-bold">{service.title}</h3>
              <p className="text-dark-600 dark:text-dark-200">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }} // Scroll animation applied
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="max-w-2xl mx-auto mb-6 text-lg text-dark-600 dark:text-dark-200">
            Looking for a custom solution for your project?
          </p>
          <a href="#contact" className="inline-block btn btn-primary">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
