import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeading from "../components/SectionHeading";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const projects = [
    {
      title: "Student-portal",
      description:"Dashboard UI Complete frontend of DevXscript Internship task-04", 
      image: "/images/dashboard.jpeg", 
      technologies: ["React","Redux","Context API", "Tailwind CSS","AOS" ,"Framer motion"],
      category: "React",
      liveUrl: "https://nextcent-wine.vercel.app/", 
      githubUrl: "https://github.com/Bushrajan/Student-Portal-.git",
      size: "small"
    },
    {
      title: "Meditics",
      description:" Complete frontend website of DevXscript Internship task-03",
      image: "/images/meditics.png", 
      technologies: ["React", "Tailwind CSS"],
      category: "React",
      liveUrl: "https://meditics-two.vercel.app/", 
      githubUrl: "https://github.com/Bushrajan/Meditics.git",
      size: "medium"
    },
     
    {
      title: "Real Homes",
      description:" Complete frontend website of Real Homes",
      image: "/images/realhome.png", 
      technologies: ["React", "Tailwind CSS"],
      category: "React",
      liveUrl: "https://real-home-xyz.vercel.app/", 
      githubUrl: "https://github.com/Bushrajan/Real-Home.git",
      size: "large"
    },
    {
      title: "E-sheba",
      description:" Landing page for DevXscript Internship task-02",
      image: "/images/E-sheba.png", 
      technologies: ["React", "Tailwind CSS","AOS" ,"Framer motion"],
      category: "React",
      liveUrl: "https://e-shehba-website.vercel.app/", 
      githubUrl: "https://github.com/Bushrajan/E-shehba-website.git",
      size: "small"
    },
    {
      title: "Nextcent",
      description:" Landing page for DevXscript Internship task-01",
      image: "/images/nextcent.png", 
      technologies: ["React", "Tailwind CSS","AOS" ,"Framer motion"],
      category: "React",
      liveUrl: "https://nextcent-wine.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/DevXcript-Projects.git",
      size: "small"
    },
    {
      title: "CineMax",
      description:"Complete Frontend With FireBase Authentication",
      image: "/images/cinemax.png",
      technologies: ["React", "Tailwind CSS","AOS" ,"Framer motion"], 
      category: "React",
      liveUrl: "https://cine-max-movie.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Cine-Max.git",
      size: "large"
    },
    {
      title: "Alibaba",
      description: "Ecommerce website with landing page",
      image: "/images/alibaba.png",
      technologies: ["React", "Tailwind CSS","AOS" ,"Framer motion"],  
      category: "React",
      liveUrl: "https://alibaba-kappa.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Alibaba-Website.git",
      size: "small"
    },
    {
      title: "CashFlow Tracker",
      description:
        "A productivity app for organizing tasks with drag-and-drop functionality and team collaboration.",
      image: "/images/expensetracker_dashboard.png",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      category: "React",
      liveUrl: "https://expense-tracker-dusky-five.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Expense-Tracker.git",
      size: "small"
    },
    {
      title: "Furniro E-Commerce (Furniture Online)",
      description:
        "An online furniture store with shopping cart and checkout features.",
      technologies: ["React", "Firebase"],
      category: "React",
      liveUrl: "https://furniro-bay-pi.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Furniro.git",
      image: "/images/furnio.png",
      size: "small"
    },
    {
      title: "SR Towing Services  (Online)",
      description: "A website for towing and roadside assistance services.",
      technologies: ["Bootstrap"],
      category: "Bootstrap",
      liveUrl: "https://sr-towing-project-01.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/SR-Towing.git",
      image: "/images/srtower.png",
      size: "small"
    },
    {
      title: "PKTECH (Electronics Store)",
      description:
        "An e-commerce platform for electronics and gadgets.",
      technologies: ["React", "Stripe API", "Node.js"],
      category: "Bootstrap",
      liveUrl: "https://pktech.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/PKTECH.git",
      image: "/images/pktech.png",
      size: "small"
    },
    {
      title: "FreeBirds (Online)",
      description: "A website for Pets companion.",
      technologies: ["Tailwind"],
      category: "Tailwind",
      liveUrl: "https://bushrajan.github.io/FreeBirds/",
      githubUrl: "https://github.com/Bushrajan/FreeBirds.git",
      image: "/images/freebirds.png",
      size: "small"
    },
    {
      title: "Blogs Website",
      description:
        "A blogging platform where users can share posts and insights.",
      technologies: ["React", "Firebase", "Tailwind", "Bootstrap"],
      category: "DataBase(Firestore)",
      liveUrl: "https://blogs-website--two.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/BlogsWebsite.git",
      image: "/images/blogss.png",
      size: "small"
    },
    {
      title: "Kukbuk Recipe Website",
      description:
        "A collection of recipes with detailed cooking instructions.",
      technologies: ["React", "Firebase"],
      category: "DataBase(Firestore)",
      liveUrl: "https://kukbukwebsite.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Kukbuk.git",
      image: "/images/kukbuk.png",
      size: "small"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with new animations.",
      technologies: ["React", "Bootstrap"],
      category: "Bootstrap",
      liveUrl: "https://tamba-ca.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Tamba.ca.git",
      image: "/images/tamba.png",
      size: "large"
    },
    {
      title: "Vegetables Store  (Online Mart)",
      description: "A fresh vegetables and grocery store for online orders.",
      technologies: ["Bootstrap"],
      category: "Tailwind",
      liveUrl: "https://veges-store.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/VegesStore.git",
      image: "/images/veges.png",
      size: "medium"
    },
   
    {
      title: "Charity Donation Website",
      description:
        "A platform for online charity donations and community support.",
      technologies: ["React", "Stripe API", "Node.js"],
      category: "Bootstrap",
      liveUrl: "https://charity-website-weld.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/CharityWebsite.git",
      image: "/images/charity.png",
      size: "small"
    },
     {
      title: "Glamours (Online Fashion Store)",
      description:
        "An e-commerce platform for fashion products with a sleek design and user-friendly interface.",
      technologies: ["Pure Bootstrap", "Animations"],
      category: "Bootstrap",
      liveUrl: "https://glamour-beauty-xyz.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Glamour-Beauty-.git",
      image: "/images/Glamours.png",
      size: "large"
    },
    
    {
      title: "Hexashop (Online shopping) ",
      description: "A fresh designs store for online orders.",
      technologies: ["Pure Bootstrap", "Animations"],
      category: "Tailwind",
      liveUrl: "https://hexashop-amber.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Hexashop.git",
      image: "/images/cloths.png",
      size: "medium"
    },
    {
      title: "Ecommerce_MWK Store",
      description: "A full-featured online store with new animations.",
      technologies: ["Pure Bootstrap", "Animations"],
      category: "Tailwind",
      liveUrl: "https://ecommerce-mwk.vercel.app/",
      githubUrl: "https://github.com/Bushrajan/Ecommerce_MWK.git",
      image: "/images/MWK.png",
      size: "medium"
    },
  ];

  const filters = [
    "All",
    "React",
    "Bootstrap",
    "Tailwind",
    "MongoDB",
    "DataBase(Firestore)",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <style>
        {`
          /* Masonry Grid Styles */
          .masonry-projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            grid-auto-rows: 200px;
            gap: 1rem;
          }

          @media (min-width: 768px) {
            .masonry-projects-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .masonry-projects-grid {
              grid-template-columns: repeat(4, 1fr);
            }
          }

          /* Grid Item Sizes */
          .masonry-item.small {
            grid-row: span 1;
            grid-column: span 1;
          }

          .masonry-item.medium {
            grid-row: span 2;
            grid-column: span 1;
          }

          .masonry-item.large {
            grid-row: span 2;
            grid-column: span 2;
          }

          @media (max-width: 768px) {
            .masonry-item.large,
            .masonry-item.medium,
            .masonry-item.small {
              grid-row: span 2;
              grid-column: span 1;
            }
          }

          /* Card Styling */
          .masonry-project-card {
            position: relative;
            overflow: hidden;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .masonry-project-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 
              0 25px 50px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.1);
            z-index: 10;
          }

          /* Image - Always Visible */
          .masonry-project-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease, filter 0.4s ease;
          }

          .masonry-project-card:hover .masonry-project-image {
            transform: scale(1.1);
            filter: brightness(0.4);
          }

          /* Overlay - HIDDEN by Default, VISIBLE on Hover */
          .masonry-project-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
  to top,
  rgba(0, 0, 0, 0.75) 0%,
  rgba(0, 0, 0, 0.55) 60%,
  rgba(0, 0, 0, 0.35) 100%
);

            opacity: 0;
            transition: opacity 0.4s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 1.5rem;
          }

          .masonry-project-card:hover .masonry-project-overlay {
            opacity: 1;
          }

          /* All Content - Only Visible on Hover */
          .masonry-project-category {
            display: inline-block;
            padding: 0.35rem 0.75rem;
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #fff;
            font-size: 0.7rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 0.75rem;
            width: fit-content;
          }

          .masonry-project-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 0.6rem;
            line-height: 1.3;
          }

          .masonry-project-description {
            font-size: 0.9rem;
            color: #ddd;
            line-height: 1.6;
            margin-bottom: 1rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }

          .masonry-item.large .masonry-project-description,
          .masonry-item.medium .masonry-project-description {
            -webkit-line-clamp: 3;
          }

          /* Tech Stack */
          .masonry-project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-bottom: 1rem;
          }

          .masonry-tech-badge {
            padding: 0.35rem 0.7rem;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: #ccc;
            font-size: 0.7rem;
            font-weight: 500;
          }

          /* Action Links */
          .masonry-project-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .masonry-action-link {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.65rem 1.3rem;
            background: #fff;
            color: #000;
            font-size: 0.85rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            border: 2px solid #fff;
          }

          .masonry-action-link:hover {
            background: transparent;
            color: #fff;
            transform: translateY(-2px);
          }

          .masonry-action-link.github-link {
            background: transparent;
            color: #fff;
            border: 2px solid #fff;
          }

          .masonry-action-link.github-link:hover {
            background: #fff;
            color: #000;
          }
        `}
      </style>

      <section id="projects" className="mx-auto section">
        <div className="container-custom2">
          <SectionHeading
            title="My Projects"
            subtitle="Check out some of my recent work"
          />

          {/* Filter Buttons - Using Existing Theme Classes */}
          <div className="flex flex-wrap items-center justify-center gap-4 mx-auto mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 dark:bg-dark-400 text-dark-400 dark:text-dark-200 hover:bg-gray-200 dark:hover:bg-dark-400"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid - Only Images Show */}
          <div className="masonry-projects-grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 50}
                className={`masonry-project-card masonry-item ${project.size}`}
              >
                {/* Image - ALWAYS VISIBLE */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="masonry-project-image"
                />

                {/* Overlay Content - ONLY VISIBLE ON HOVER */}
                <div className="masonry-project-overlay">
                  <span className="masonry-project-category">
                    {project.category}
                  </span>
                  
                  <h3 className="masonry-project-title">{project.title}</h3>
                  
                  <p className="masonry-project-description">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="masonry-project-tech">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="masonry-tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="masonry-project-actions">
                    <a
                      href={project.liveUrl}
                      className="masonry-action-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="masonry-action-link github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button - Using Existing Theme Classes */}
          <div className="mt-16 text-center">
            <a
              href="https://github.com/Bushrajan"
              className="inline-flex items-center gap-2 btn btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Projects <Github size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;