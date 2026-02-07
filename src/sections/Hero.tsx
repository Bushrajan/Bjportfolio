import { motion } from "framer-motion";
import { ArrowRight, Facebook, Github, Linkedin, Mail, } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  // replace these with your real links if different
  const githubLink = "https://github.com/Bushrajan?tab=repositories";
  const linkedinLink = "https://www.linkedin.com/in/bushra-jan-50653427b/";
  const mailLink = "mailto:bushrajan713@gmail.com";
  const facebook = "https://www.facebook.com/Bushrajan67890/";

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden hero-container"
      aria-label="Hero section"
    >

      <div className="relative z-20 flex flex-col items-center justify-between h-full container-custom md:flex-row">
        {/* LEFT: Photo card */}
        <div className="relative flex flex-col items-center w-full px-2 mx-auto mt-20 md:w-5/12 md:items-start md:mt-0">

          {/* Photo with layered frames */}
          <div className="relative mt-10 md:mt-4">
            {/* behind frames */}
            <div className="absolute -left-6 -top-5   w-[380px] h-[460px] border-2 border-dark-500/40 rounded-md transform rotate-1 hidden md:block"></div>
            <div className="absolute -left-12 -top-11 w-[380px] h-[460px] border-2 border-dark-500/30 rounded-md transform -rotate-1 hidden md:block"></div>

            <div className="relative w-[260px] h-[360px] md:w-[300px] md:h-[420px] rounded-md overflow-hidden shadow-2xl">
              {/* grayscale image with subtle vignette */}
              <img
                src="logo.png"
                alt="Profile"
                className="object-cover w-full h-full "

              />
              {/* inner glow frame */}
              <div className="absolute inset-0 rounded-md pointer-events-none ring-1 ring-white/5"></div>
            </div>
          </div>

          {/* Name, contact & icons */}
          <div className="mx-auto mt-6 text-center lg:pe-10">
            <h3 className="text-4xl leading-tight font-signature md:text-5xl">Bushra Jan</h3>
            <p className="mx-auto mt-2 text-sm md:text-base opacity-80">bushrajan713@gmail.com</p>

            <div className="flex items-center justify-center gap-4 mt-4 ">
              <a href={githubLink} target="_blank" rel="noreferrer" className="group">
                <div className="p-2 transition border rounded-full border-dark-400/40 group-hover:bg-white/5">
                  <Github size={20} />
                </div>
              </a>
              <a href={linkedinLink} target="_blank" rel="noreferrer" className="group">
                <div className="p-2 transition border rounded-full border-dark-400/40 group-hover:bg-white/5">
                  <Linkedin size={20} />
                </div>
              </a>
              <a href={mailLink} className="group">
                <div className="p-2 transition border rounded-full border-dark-400/40 group-hover:bg-white/5">
                  <Mail size={20} />
                </div>
              </a>
              <a href={facebook} className="group">
                <div className="p-2 transition border rounded-full border-dark-400/40 group-hover:bg-white/5">
                  <Facebook size={20} />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Text, buttons, big faded background text */}
        <div className="w-full px-6 md:w-8/12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-8xl">
                <span className="block text-primary-600 dark:text-primary-400">Code. Design. Create. Inspire.</span>
              </h1>

              <p className="max-w-2xl mt-4 text-lg text-dark-500 dark:text-dark-200 opacity-90">
                I blend creativity with clean code to build interfaces that feel effortless. Every pixel, every line — crafted with purpose and precision.
              </p>




              <div className="relative hidden mt-5 pointer-events-none lg:block">
                <p className="text-[110px] mb-5 font-extrabold leading-none text-dark-500/10 select-none">
                  EXPERIENCES
                </p>

                <div className="mt-32">
                  {/* Top Marquee */}
                  <div className="absolute left-0 right-0 z-10 bottom-[-60px]">
                    <div className="mx-auto w-full max-w-[1100px]">
                      <div className="py-5 overflow-hidden">
                        <div className="flex items-center gap-1 whitespace-nowrap will-change-transform animate-marquee">
                          {[...Array(2)].flatMap(() => [
                            "/figma.png", "/nextjs.png", "/canva.png", "/reactbootstrap.png", "/framermotion.png",
                            "/mongodb.png", "/expressjs.png", "/react.png", "/nodejs.png", "/html.png", "/css.png",
                            "/javascript.png", "/git.png", "/github.png", "/gsap.png", "/vercel.png", "/netlify.png",
                            "/tailwind.png", "/bootstrap.png", "/ts.png", "/word.png", "/vite.png", "/excel.png", "/powerpoint.png", "/access.png"
                          ].map((src, i) => (
                            <div key={i} className="inline-block ">
                              <div className="w-[100px] h-[100x] transition-transform transform hover:scale-110">
                                <img src={src} alt="tech icon" className="object-cover w-[80px] h-[80px] m-1" />
                              </div>
                            </div>
                          )))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Marquee */}
                  <div className="absolute left-0 right-0 z-10 bottom-[-150px]">
                    <div className="mx-auto w-full max-w-[1100px]">
                      <div className="py-5 overflow-hidden">
                        <div className="flex items-center gap-1 whitespace-nowrap will-change-transform animate-marquee-reverse">
                          {[...Array(2)].flatMap(() => [
                            "/figma.png", "/nextjs.png", "/canva.png",
                            "/mongodb.png", "/expressjs.png", "/react.png",
                            "/tailwind.png", "/bootstrap.png", "/ts.png", "/word.png",
                            "/vite.png", "/excel.png", "/powerpoint.png", "/access.png",
                            "/javascript.png", "/git.png", "/github.png", "/gsap.png",
                            "/reactbootstrap.png", "/framermotion.png",
                            "/nodejs.png", "/html.png", "/css.png",
                            "/vercel.png", "/netlify.png",
                          ].map((src, i) => (
                            <div key={i} className="inline-block ">
                              <div className="w-[100px] h-[100x] transition-transform transform hover:scale-110">
                                <img src={src} alt="tech icon" className="object-cover w-[80px] h-[80px] m-1" />
                              </div>
                            </div>
                          )))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tailwind animations */}
                <style>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0%); }
    }
    .animate-marquee { animation: marquee 20s linear infinite; }
    .animate-marquee-reverse { animation: marquee-reverse 20s linear infinite; }
  `}</style>
              </div>




            </div>
            {/* call to action */}
            <div className="pt-5">
              <div className="flex flex-col items-start gap-4 pt-5 sm:flex-row sm:items-center">
              <a href="#contact" className="inline-flex items-center gap-3 px-5 py-3 btn btn-primary">
                Contact Me <ArrowRight size={16} />
              </a>

              <a href="/BushraJanCV.pdf" target="_blank" className="px-5 py-3 btn btn-outline">
                Download Resume
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>


      {/* scroll indicator */}
      <div className="absolute z-20 flex justify-center w-full bottom-2">
        <a href="#about" aria-label="Scroll to about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-dark-500 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-dark-600"
            />
          </div>
        </a>
      </div>

       </section>
  );
};

export default Hero;
