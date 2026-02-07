// import { useRef, useState, useEffect } from "react";
// import SectionHeading from "../components/SectionHeading";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const Testimonials = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: false });
//   }, []);

//   const testimonials = [
//     {
//       testimonial:
//         "The web development team demonstrated exceptional efficiency and precision. Their innovative approach streamlined our workflow and delivered a seamless experience.",
//       name: "Mrs. Rukhsana",
//       position: "Manager at BFFP",
//       image: "/girl.png",
//     },
//     {
//       testimonial:
//         "Working with this web development team was a fantastic experience. They were highly cooperative, always communicative, and ensured everything was executed flawlessly.",
//       name: "Mr. Abdul Jabbar",
//       position: "HR Manager of ACSHR",

//       image: "/boy1.png",
//     },
//     {
//       testimonial:
//         "Impressed by the team's ability to deliver high-quality work within the promised time frame. Their dedication to web development is truly commendable!",
//       name: "Mr. Maqbool Ahmed",
//       position: "Finance Manager of ACSHR",
//       image: "/boy2.png",
//     },
//     {
//       testimonial:
//         "The web development team demonstrated exceptional efficiency and precision. Their innovative approach streamlined our workflow and delivered a seamless experience.",
//       name: "Mrs. Rukhsana",
//       position: "Manager at BFFP",
//       image: "/girl2.png",
//     },
//     {
//       testimonial:
//         "Working with this web development team was a fantastic experience. They were highly cooperative, always communicative, and ensured everything was executed flawlessly.",
//       name: "Mr. Abdul Jabbar",
//       position: "HR Manager of ACSHR",
//       image: "/boy3.png",
//     },
//     {
//       testimonial:
//         "Impressed by the team's ability to deliver high-quality work within the promised time frame. Their dedication to web development is truly commendable!",
//       name: "Mr. Maqbool Ahmed",
//       position: "Finance Manager of ACSHR",
//       image: "/boy4.png",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonialsRef = useRef<HTMLDivElement>(null);

//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
//     );
//   };

//   return (
//     <section id="testimonials" className="section bg-gray-50 dark:bg-dark-900">
//       <div className="container-custom">
//         <SectionHeading
//           title="Client Reviews and Project Feedbacks"
//           subtitle="What my clients say about my work and the impact of my projects on their businesses."
//         />


//         <div className="relative max-w-4xl px-1 mx-auto " >
//           <div ref={testimonialsRef} className="pt-5 overflow-hidden " data-aos="zoom-in">
//             <div   className="flex transition-transform duration-500 ease-in-out"
//               style={{ transform: `translateX(-${currentIndex * 100}%)` }}  >
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="flex-shrink-0 w-full px-2 lg:px-3">
//                   <div className="py-3 mb-5 card md:p-10 ">
//                     <Quote
//                       data-aos="fade-up"
//                       className="mb-6 text-primary-600"
//                       size={40}
//                     />
//                     <div className="flex items-center float-end">
//                       <img
//                         src={testimonial.image}
//                         alt={testimonial.name}
//                         data-aos="flip-left"
//                         className="object-cover w-32 h-32 mr-4 rounded"
//                       />
//                       <div>
//                         <h4  data-aos="fade-down" className="text-lg font-bold ">
//                           {testimonial.name}
//                         </h4>
//                         <p data-aos="fade-down" className="text-dark-500 dark:text-dark-300 text-primary-600">
//                           {testimonial.position}
//                         </p>
//                       </div>
//                     </div>

//                     <p
//                       data-aos="fade-up"
//                       className="p-2 mb-8 text-lg italic lg:p-5 text-dark-600 dark:text-dark-200"
//                     >
//                       "{testimonial.testimonial}"
//                     </p>

//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation buttons */}
//           <div className="flex justify-center gap-4 mt-8">
//             <button
//               onClick={prevTestimonial}
//               className="p-3 transition-colors bg-white rounded-full shadow-md dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft size={24} />
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="p-3 transition-colors bg-white rounded-full shadow-md dark:bg-dark-700 hover:bg-gray-100 dark:hover:bg-dark-600"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight size={24} />
//             </button>
//           </div>

//           {/* Dots indicator */}
//           <div className="flex justify-center mt-6 space-x-2">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index)}
//                 className={`w-3 h-3 rounded-full transition-colors ${
//                   currentIndex === index
//                     ? "bg-primary-600 dark:bg-primary-500"
//                     : "bg-gray-300 dark:bg-dark-600"
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;
import { useEffect } from "react";
import SectionHeading from "../components/SectionHeading";
import { Quote } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const testimonials = [
    {
      testimonial:
        "The web development team demonstrated exceptional efficiency and precision. Their innovative approach streamlined our workflow and delivered a seamless experience.",
      name: "Mrs. Rukhsana",
      position: "Manager at BFFP",
      image: "/girl.png",
      span: "col-span-2 row-span-1", // large box
    },
    {
      testimonial:
        "Working with this web development team was a fantastic experience. They were highly cooperative, always communicative, and ensured everything was executed flawlessly.",
      name: "Mr. Abdul Jabbar",
      position: "HR Manager of ACSHR",
      image: "/boy1.png",
      span: "col-span-1 row-span-2", // small box
    },
    {
      testimonial:
        "Impressed by the team's ability to deliver high-quality work within the promised time frame. Their dedication to web development is truly commendable!",
      name: "Mr. Maqbool Ahmed",
      position: "Finance Manager of ACSHR",
      image: "/boy2.png",
      span: "col-span-1 row-span-2", // tall box
    },
    {
      testimonial:
        "They took our ideas and built something even better than we expected. Excellent support and updates.",
      name: "Mr. Bilal Khan",
      position: "CEO at InnovateX",
      image: "/boy3.png",
      span: "col-span-1 row-span-1", // small box
    },
    {
      testimonial:
        "Great coordination and professionalism throughout the project timeline. Every milestone was met on schedule.",
      name: "Mrs. Saima Khan",
      position: "Director at TechFirm",
      image: "/girl2.png",
      span: "col-span-2 row-span-1", // wide box
    },
  ];

  return (
    <section id="testimonials" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <SectionHeading
          title="Client Reviews and Project Feedbacks"
          subtitle="What my clients say about my work and the impact of my projects on their businesses."
        />

        <div
          className="grid grid-cols-3 auto-rows-[200px] gap-4 mt-12"
          data-aos="fade-up"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`p-6 card bg-white dark:bg-dark-800 shadow-md rounded-lg flex flex-col justify-between ${testimonial.span}`}
              data-aos="zoom-in"
            >
              <Quote className="mb-3 text-primary-600" size={28} />
              <p className="mb-4 text-sm italic text-dark-600 dark:text-dark-200 lg:text-base">
                "{testimonial.testimonial}"
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover w-12 h-12 mr-3 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-dark-700 dark:text-dark-100">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-600">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 1024px) {
            .grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 640px) {
            .grid {
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Testimonials;
