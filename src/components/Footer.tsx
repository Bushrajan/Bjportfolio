import { Github, Linkedin, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 text-white bg-dark-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 footer md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="mb-4 text-2xl font-bold text-primary-400">Bj.dev</h3>
            
           <p className="w-full mb-4 text-gray-300 footer lg:max-w-md ">
              Creating innovative web applications with the MERN stack. Let's
              build something amazing together.
            </p>

            <div className="flex items-center gap-8 space-x-4 footerlinks">
              <div className="relative group">
                <a
                  href="https://github.com/Bushrajan?tab=repositories"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  <Github size={20} />
                </a>
                <span className="absolute px-3 py-1 text-xs text-black transition-opacity transform -translate-x-1/2 bg-white rounded opacity-0 bottom-10 left-1/2 group-hover:opacity-100">
                  GitHub Profile
                </span>
              </div>

              <div className="relative group">
                <a
                  href="https://www.linkedin.com/in/bushra-jan-50653427b/"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  <Linkedin size={20} />
                </a>
                <span className="absolute px-3 py-1 text-xs text-black transition-opacity transform -translate-x-1/2 bg-white rounded opacity-0 bottom-10 left-1/2 group-hover:opacity-100">
                  LinkedIn Profile
                </span>
              </div>

              <div className="relative group">
                <a
                  href="https://www.facebook.com/profile.php?id=61552824575623"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  <Facebook size={20} />
                </a>
                <span className="absolute px-3 py-1 text-xs text-black transition-opacity transform -translate-x-1/2 bg-white rounded opacity-0 bottom-10 left-1/2 group-hover:opacity-100">
                  Facebook Profile
                </span>
              </div>

              <div className="relative group">
                <a
                  href="mailto:bushrajan713@gmail.com"
                  target="_blank"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  <Mail size={20} />
                </a>
                <span className="absolute px-3 py-1 text-xs text-black transition-opacity transform -translate-x-1/2 bg-white rounded opacity-0 bottom-10 left-1/2 group-hover:opacity-100">
                  Send Email
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  About
                </a>
              </li>
               
              <li>
                <a
                  href="#services"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-300 transition-colors hover:text-primary-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 ">
                M.A Jinnah Road, Jodia Bazar Jeswani street Karachi, Pakistan
              </li>
              <li>
                <a
                  href="mailto:bushrajan713@example.com"
                  className="text-gray-300 transition-colors hover:text-primary-400 "
                >
                  bushrajan@gmail.com
                </a>
              </li>
               
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8 mt-8 border-t border-gray-800 md:flex-row md:justify-between">
          <p className="text-gray-400">
            © {currentYear} Bj.dev All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 transition-colors hover:text-primary-400"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
