import React, { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
const TEMPLATE_ID_USER = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    tenth_percent_year: "",
    twelfth_percent_year: "",
    bachelors_course_year: "",
    bachelors_percent_backlogs: "",
    gre_gmat: "",
    english_test_scores: "",
    work_experience: "",
    gap_years: "",
    preferred_country: "",
    preferred_course: "",
    intake: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send mail to Admin
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID_ADMIN,
        form.current,
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        tenth_percent_year: "",
        twelfth_percent_year: "",
        bachelors_course_year: "",
        bachelors_percent_backlogs: "",
        gre_gmat: "",
        english_test_scores: "",
        work_experience: "",
        gap_years: "",
        preferred_country: "",
        preferred_course: "",
        intake: "",
        message: "",
      });
    } catch (error) {
      console.error("FAILED...", error.text);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-black" />,
      title: "Phone Numbers",
      details: ["+91 99632 05226", "+91 87654 32109"],
      subtitle: "Call us anytime",
    },
    {
      icon: <Mail className="h-6 w-6 text-black" />,
      title: "Email Addresses",
      details: ["info@visaduniaoverseas.com", "support@visaduniaoverseas.com"],
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-black" />,
      title: "Office Address",
      details: [
        "Laxmi Theater Complex",
        "J.P.N Road Warangal;",
        "Telangna, India 506002",
      ],
      subtitle: "Visit us for face-to-face consultation",
    },
    {
      icon: <Clock className="h-6 w-6 text-black" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 5:00 PM",
        "Sunday: Closed",
      ],
      subtitle: "Extended hours during peak season",
    },
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "123 Education Plaza, Study Street, Education City",
      phone: "+91 99632 05226",
      email: "mumbai@visaduniaoverseas.com",
    },
    {
      city: "Delhi",
      address: "456 Global Tower, Education Avenue, Connaught Place",
      phone: "+91 87654 32109",
      email: "delhi@visaduniaoverseas.com",
    },
    {
      city: "Bangalore",
      address: "789 Tech Hub, Innovation Road, Koramangala",
      phone: "+91 76543 21098",
      email: "bangalore@visaduniaoverseas.com",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md mx-auto text-center p-8 bg-white shadow-lg rounded-xl">
          <CheckCircle className="h-16 w-16 text-black mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your message has been sent successfully. We'll get back to you
            within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In Touch With Us
          </h1>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
            Ready to start your study abroad journey? Contact our expert
            counselors for personalized guidance.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  STUDENT DETAILS – VISA DUNIA OVERSEAS
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6" ref={form}>
                  <div>
                    <label
                      htmlFor="from_name"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="from_name"
                      name="from_name"
                      value={formData.from_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="tenth_percent_year"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      10th – % and Year *
                    </label>
                    <input
                      type="text"
                      id="tenth_percent_year"
                      name="tenth_percent_year"
                      value={formData.tenth_percent_year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., 85% - 2017"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="twelfth_percent_year"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      12th – % and Year *
                    </label>
                    <input
                      type="text"
                      id="twelfth_percent_year"
                      name="twelfth_percent_year"
                      value={formData.twelfth_percent_year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., 82% - 2019"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bachelors_course_year"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Bachelor’s Degree – Course & Year *
                    </label>
                    <input
                      type="text"
                      id="bachelors_course_year"
                      name="bachelors_course_year"
                      value={formData.bachelors_course_year}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., B.Tech Computer Science - 2023"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="bachelors_percent_backlogs"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Bachelor’s – % and Backlogs (if any)
                    </label>
                    <input
                      type="text"
                      id="bachelors_percent_backlogs"
                      name="bachelors_percent_backlogs"
                      value={formData.bachelors_percent_backlogs}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., 74% - 1 backlog"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gre_gmat"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      GRE/GMAT – Verbal / Quant / AWA
                    </label>
                    <input
                      type="text"
                      id="gre_gmat"
                      name="gre_gmat"
                      value={formData.gre_gmat}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., 315 (V: 155, Q: 160, AWA: 4.0)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="english_test_scores"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      IELTS/TOEFL/Duolingo – Overall & (R/W/L/S)
                    </label>
                    <input
                      type="text"
                      id="english_test_scores"
                      name="english_test_scores"
                      value={formData.english_test_scores}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., IELTS 7.5 (R: 7, W: 7.5, L: 8, S: 7)"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="work_experience"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Work Experience (if any)
                    </label>
                    <input
                      type="text"
                      id="work_experience"
                      name="work_experience"
                      value={formData.work_experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., 2 years at Infosys"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="gap_years"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Gap Years (if any)
                    </label>
                    <input
                      type="text"
                      id="gap_years"
                      name="gap_years"
                      value={formData.gap_years}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., 1 year gap after 12th"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferred_country"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Preferred Country *
                    </label>
                    <input
                      type="text"
                      id="preferred_country"
                      name="preferred_country"
                      value={formData.preferred_country}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Country name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferred_course"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Preferred Course *
                    </label>
                    <input
                      type="text"
                      id="preferred_course"
                      name="preferred_course"
                      value={formData.preferred_course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="Master's in Data Science"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="intake"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Intake (Month & Year) *
                    </label>
                    <input
                      type="text"
                      id="intake"
                      name="intake"
                      value={formData.intake}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                      placeholder="E.g., September 2026"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="from_email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="from_email"
                      name="from_email"
                      value={formData.from_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors"
                      placeholder="+91 99632 05226"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Additional Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-colors resize-none"
                      placeholder="Tell us about your study abroad goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl shadow-lg"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    {info.icon}
                    <h3 className="text-lg font-bold text-gray-900">
                      {info.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-3">{info.subtitle}</p>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-700">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Office Locations
            </h2>
            <p className="text-xl text-gray-600">
              Visit us at any of our convenient locations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {office.city} Office
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start justify-center space-x-2">
                    <MapPin className="h-5 w-5 text-black mt-1" />
                    <p className="text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5 text-black" />
                    <p className="text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-5 w-5 text-black" />
                    <p className="text-sm">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
