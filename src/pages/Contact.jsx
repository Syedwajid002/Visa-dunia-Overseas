import React, { useState, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID_ADMIN = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN;
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

      const sheetMonkeyURL =
        "https://api.sheetmonkey.io/form/uv1v3Bm4BN1DHNdzv7zFzp";

      fetch(sheetMonkeyURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => console.log("SheetMonkey response:", data))
        .catch((error) =>
          console.error("Error submitting to SheetMonkey:", error)
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
      icon: <Phone className="h-6 w-6 text-[#035079]" />,
      title: "Phone Numbers",
      details: ["+91 99632 05226", "+91 86390 42341"],
      subtitle: "Call us anytime",
    },
    {
      icon: <Mail className="h-6 w-6 text-[#035079]" />,
      title: "Email Addresses",
      details: ["info@visadunia.in"],
      subtitle: "We'll respond within 24 hours",
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#035079]" />,
      title: "Office Address",
      details: [
        "Visa Dunia Overseas",
        "1st Floor Shop number F31",
        "Nirmala Mall, Jayaprakash Narayan Road, Charbowli, Girmajipet,",
        "Warangal, Telangana 506002, India",
      ],
      subtitle: "Visit us for face-to-face consultation",
    },
    {
      icon: <Clock className="h-6 w-6 text-[#035079]" />,
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
          <CheckCircle className="h-16 w-16 text-[#035079] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Your Request has been Received successfully. We'll get back to you
            within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#035079] hover:bg-[#024563] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
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
      <section className="bg-[#035079] text-white py-20">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035079] focus:border-[#035079] transition-colors"
                      placeholder="Enter your full name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035079] focus:border-[#035079] transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035079] focus:border-[#035079] transition-colors"
                      placeholder="+91 99632 XXXXX"
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
                      Interested program *
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#035079] focus:border-[#035079] transition-colors resize-none"
                      placeholder="Tell us about your study abroad goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#035079] hover:bg-[#024563] disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Request Enquiry
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
      {/* <section className="py-16 bg-gray-100">
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
                    <MapPin className="h-5 w-5 text-[#035079] mt-1" />
                    <p className="text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-5 w-5 text-[#035079]" />
                    <p className="text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-5 w-5 text-[#035079]" />
                    <p className="text-sm">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* Google Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Find Us on the Map
          </h2>
          <div className="w-full h-[450px] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.9084014356345!2d79.59933149999999!3d17.9829981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3345000ca84d2f%3A0x421029a7690bef13!2sVisa%20Dunia%20overseas!5e0!3m2!1sen!2sin!4v1757087934097!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Visa Dunia Overseas Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
