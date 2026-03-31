import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { CgInstagram } from "react-icons/cg";
import { IoCall } from "react-icons/io5";
import { LiaLinkedin } from "react-icons/lia";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your full name.";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const fieldError = validateForm()[name];
      setErrors(prev => ({ ...prev, [name]: fieldError || "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldError = validateForm()[name];
    setErrors(prev => ({ ...prev, [name]: fieldError || "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });
    
    if (Object.values(newErrors).every(err => !err)) {
      // Send to WhatsApp
      const phoneNumber = "918086842985";
      const whatsappMessage = `Hello! I'm ${formData.name}\n\nEmail: ${formData.email}\n\nMessage: ${formData.message}`;
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappURL, "_blank");
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 relative">
      <div className="max-w-7xl mx-auto glass-card rounded-lg overflow-hidden flex flex-col md:flex-row shadow-2xl">
        {/* Left Info Side */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 md:w-1/2 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0" />

          <div className="relative z-10 space-y-6 sm:space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            >
              Let's build <br />
              <span className="gradient-text">something</span> great.
            </motion.h2>

            <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed max-w-md">
              I’m currently available for freelance projects and collaborations.
              Have an idea or project? Let’s connect and make it happen.
            </p>

            <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
              <motion.a
                href="mailto:rameesc985@gmail.com"
                className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer w-fit"
                whileHover={{ x: 8 }}
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300 shadow-lg group-hover:shadow-primary/20 flex-shrink-0">
                  <Mail size={18} className="sm:hidden" />
                  <Mail size={20} className="hidden sm:block" />
                </div>
                <span className="font-medium text-sm sm:text-base group-hover:text-primary transition-colors break-all">
                  rameesc985@gmail.com
                </span>
              </motion.a>

              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary flex-shrink-0">
                  <MapPin size={18} className="sm:hidden" />
                  <MapPin size={20} className="hidden sm:block" />
                </div>
                <span className="font-medium text-sm sm:text-base">Kerala, India (Remote)</span>
              </div>

              <motion.a
                href="tel:+918086842985"
                className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer w-fit"
                whileHover={{ x: 8 }}
              >
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-secondary/20 flex-shrink-0">
                  <IoCall size={18} className="sm:hidden" />
                  <IoCall size={20} className="hidden sm:block" />
                </div>
                <span className="font-medium text-sm sm:text-base group-hover:text-secondary transition-colors">
                  +91 8086842985
                </span>
              </motion.a>
            </div>
          </div>

          <div className="relative z-10 flex space-x-3 sm:space-x-4 mt-10 sm:mt-12 md:mt-16 flex-wrap gap-3 sm:gap-4">
            <a
            href="https://wa.me/918086842985"
              target="_blank"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-muted hover:text-primary"
            >
              <BsWhatsapp size={16} className="sm:hidden" />
              <BsWhatsapp size={18} className="hidden sm:block" />
            </a>
            <a
              href="https://www.instagram.com/_ramiez_?igsh=c2hkZmFmeXg3NXpi"
              target="_blank"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-muted hover:text-primary"
            >
              <CgInstagram size={16} className="sm:hidden" />
              <CgInstagram size={18} className="hidden sm:block" />
            </a>
            <a
              href="https://www.linkedin.com/in/ramees-c-4a9208344"
              target="_blank"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-muted hover:text-primary"
            >
              <LiaLinkedin size={16} className="sm:hidden" />
              <LiaLinkedin size={20} className="hidden sm:block" />
            </a>
            <a
              href="https://github.com/Ramees-c"
              target="_blank"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all text-muted hover:text-primary"
            >
              <BsGithub size={16} className="sm:hidden" />
              <BsGithub size={20} className="hidden sm:block" />
            </a>
          </div>
        </div>

        {/* Right Form Side */}
        <div className="p-6 sm:p-8 md:p-12 lg:p-16 md:w-1/2 bg-white/[0.02] backdrop-blur-sm relative z-10 flex items-center border-t md:border-t-0 md:border-l border-white/5">
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full space-y-4 sm:space-y-5 md:space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="group">
              <label className="block text-[10px] xs:text-xs sm:text-xs font-bold tracking-wider text-muted uppercase mb-2 sm:mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Full Name"
                className={`w-full bg-white/5 border rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-sm focus:outline-none transition-all placeholder:text-muted/30 ${
                  touched.name && errors.name ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-primary/50 focus:bg-white/10"
                }`}
              />
              {touched.name && errors.name && (
                <p className="mt-1 text-[10px] text-red-500 font-medium">
                  {errors.name}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-[10px] xs:text-xs sm:text-xs font-bold tracking-wider text-muted uppercase mb-2 sm:mb-3">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Your Email Address"
                className={`w-full bg-white/5 border rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-sm focus:outline-none transition-all placeholder:text-muted/30 ${
                  touched.email && errors.email ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-primary/50 focus:bg-white/10"
                }`}
              />
              {touched.email && errors.email && (
                <p className="mt-1 text-[10px] text-red-500 font-medium">
                  {errors.email}
                </p>
              )}
            </div>
            <div className="group">
              <label className="block text-[10px] xs:text-xs sm:text-xs font-bold tracking-wider text-muted uppercase mb-2 sm:mb-3">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="4"
                placeholder="Tell me about your project..."
                className={`w-full bg-white/5 border rounded-lg px-3 sm:px-4 py-3 sm:py-4 text-sm focus:outline-none transition-all resize-none placeholder:text-muted/30 ${
                  touched.message && errors.message ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-primary/50 focus:bg-white/10"
                }`}
              ></textarea>
              {touched.message && errors.message && (
                <p className="mt-1 text-[10px] text-red-500 font-medium">
                  {errors.message}
                </p>
              )}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary text-black py-3 sm:py-4 rounded-lg font-bold uppercase tracking-widest text-[11px] sm:text-xs transition-all shadow-lg hover:shadow-primary/20 mt-2 sm:mt-4"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
