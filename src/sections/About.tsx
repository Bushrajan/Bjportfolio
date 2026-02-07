import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../components/SectionHeading";
import { Code, Briefcase, GraduationCap } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5 },
  }),
};

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section id="about" className="section bg-gray-50 dark:bg-dark-900">
      <SectionHeading title="About Me" subtitle="Get to know me, my background, and what I do" />
      <div className="text-center container-custom col-lg-6 col-md-6 col-sm-10 col-12" data-aos="fade-up">
  <p className="text-sm leading-[30px] relaxed lg:text- text-dark-600 dark:text-dark-200">
    My name is <strong>Bushra Jan</strong>, a <strong>MERN Stack Developer</strong> based in Pakistan with hands-on experience in building scalable, production-grade web applications using MongoDB, Express.js, React.js, and Node.js. My journey began during my computer science studies and has evolved through real-world projects at <strong>DevXscript</strong>, where I currently intern. I’ve served as a Trainer Assistant at <strong>SMIT Saylani Mass IT Traning</strong>, simplifying technical concepts for learners, and I actively contribute as a Full Stack Developer with <strong>Better Future for Pakistan</strong>, leading impactful digital initiatives.  You can explore my work at <a href="https://github.com/Bushrajan" target="_blank" className="font-semibold text-blue-600 underline" rel="noopener noreferrer">Github: Bushrajan </a> or connect via <a href="mailto:bushrajan714@gmail.com" className="text-blue-600 underline" rel="noopener noreferrer">Bushrajan714@gmail.com</a> or <a href="https://www.linkedin.com/in/bushra-jan-50653427b/" target="_blank" className="font-semibold text-blue-600 underline" rel="noopener noreferrer">LinkedIn</a>.
  </p>
</div>

      <div className="container-custom">
        <div className="flex flex-col items-center justify-center gap-10 mt-10 mb-3 container-custom row d-flex lg:flex-row lg:gap-32">
          
          {/* Profile Image */}
          <div className="relative items-center justify-center col-lg-6 col-md-6 col-sm-10 col-12" data-aos="zoom-in-down">
            <div className="relative dpimage-container">
              <div className="box">
                <div className="spin-container">
                  <div className="shape">
                    <div className="bd"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Description */}
          <div className="col-lg-6 col-md-6 col-sm-10 col-12" data-aos="zoom-in-down">
          
    
            {/* Details Sections */}
            <div className="mt-8 space-y-6">
              <motion.div custom={1} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4" data-aos="fade-up">
                <div className="p-3 rounded-lg bg-primary-100 text-primary-600">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Experience</h4>
                  <p className="text-dark-600 dark:text-dark-200">
                    <ul className="pl-5 space-y-2 text-sm list-disc">
      <li>6+ months of hands-on experience in full-stack development.</li>
      <li>Strong foundation in modular architecture, responsive UI, and clean code practices.</li>
      <li>Trainer Assistant at SMIT, helping learners grasp complex technical concepts.</li>
      <li>Active contributor to Better Future for Pakistan, building scalable tools and dashboards.</li>
    </ul>
                  </p>
                </div>
              </motion.div>

              <motion.div custom={2} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4" data-aos="fade-up">
                <div className="p-3 rounded-lg bg-secondary-100 text-secondary-600">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Projects</h4>
                  <p className="text-dark-600 dark:text-dark-200">
                    Developed multiple applications, including e-commerce platforms, and completed 10+ projects.
                     <ul className="pl-5 space-y-2 text-sm list-disc">
      <li>Built student portals, attendance dashboards, and e-commerce platforms.</li>
      <li>Completed 10+ real-world projects using the MERN stack.</li>
       
    </ul>
                  </p>
                </div>
              </motion.div>

              <motion.div custom={3} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-start gap-4" data-aos="fade-up">
                <div className="p-3 rounded-lg bg-accent-100 text-accent-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Education</h4>
                  <p className="text-dark-600 dark:text-dark-200">
                     <ul className="pl-5 space-y-2 text-sm list-disc">
      <li>Studied at <strong>Bahria College Nore-1</strong></li>
      <li>Currently pursuing a <strong>BSCS degree</strong></li>
      <li>Enrolled in <strong>MERN Stack Development diploma</strong> at <strong>Saylani Mass IT Training</strong></li>
      <li>Completed <strong>Web 2.0 Design course</strong> at <strong>Alkhidmat Bano Qabil</strong></li>
    </ul>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
         </div>
      </div>
    </section>
  );
};

export default About;
