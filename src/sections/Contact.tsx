import { useForm } from "react-hook-form";
import SectionHeading from "../components/SectionHeading";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Location",
      content: "M.A Jinnah Road, Karachi, Pakistan",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "bushrajan713@gmail.com",
    },
    { icon: <Phone size={24} />, title: "Phone", content: "03130260559" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  // Form state variables
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (data: FormData, event?: React.BaseSyntheticEvent) => {
    if (event) event.preventDefault();

    emailjs
      .sendForm(
        "Bj-Portfolio",
        "template_k431jq8",
        event?.target,
        "T4Ck-mTQojcW3cNDY"
      )
      .then(() => {
        setShowModal(true);
        setTimeout(() => setShowModal(false), 2000); // Modal will close after 2 seconds
      })
      .catch(() => {
        alert("Failed to send message. Please try again.");
      });
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        title="Get In Touch"
        subtitle="Let's discuss your project or just say hello"
      />

      {/* Contact Form */}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black modal">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">Message Sent Successfully!</h2>
            <p className="mt-2 text-gray-600">
              Thank you for reaching out, I'll get back to you soon.
            </p>
          </div>
        </div>
      )}

      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div data-aos="fade-up">
            <h3 className="mb-6 text-2xl font-bold">
              Let's talk about your project
            </h3>
            <p className="mb-8 text-dark-600 text-dark-800 dark:text-white">
              I'm interested in freelance opportunities—especially ambitious
              projects. However, if you have other requests or questions, don't
              hesitate to contact me.
            </p>

            <div className="space-y-6">
  {contactInfo.map((info, index) => (
    <div
      key={index}
      className="flex items-start gap-4"
    >
      {/* Icon Box */}
      <div className="p-3 rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-600 dark:text-primary-100">
        {info.icon}
      </div>

      {/* Text Content */}
      <div>
        <h4 className="mb-1 text-lg font-semibold text-dark-800 dark:text-white">
          {info.title}
        </h4>
        <p className="text-dark-600 dark:text-gray-300">
          {info.content}
        </p>
      </div>
    </div>
  ))}
</div>

          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            data-aos="fade-down"
            className="p-8 card"
          >
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Bushra Jan"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="bushrajan@gmail.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Project Inquiry"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                placeholder="Hello, I'm interested in..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full gap-2 btn btn-primary "
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClear}
                className="flex items-center justify-center w-full gap-2 btn btn-primary"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
