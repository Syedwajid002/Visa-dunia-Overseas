import React from "react";
import { Link } from "react-router-dom";
import { Users, Target, Globe, ArrowRight, Heart, Star } from "lucide-react";
import CeoLogo from "../Assets/Ishaq.png";
import Ashwaq from "../Assets/Ashwaq.png";
import Nandini from "../Assets/Nandini.png";

const theme = {
  // Core palette
  primary: "text-gray-200", // for icons
  primaryBg: "bg-neutral-900", // darkest backgrounds
  primaryHover: "hover:bg-neutral-800", // hover shade
  secondary: "text-gray-100", // secondary text
  secondaryBg: "bg-neutral-800", // alternate background
  secondaryLight: "bg-neutral-100", // light background cards
  highlight: "text-gray-400", // highlight text (achievements)
  lightText: "text-gray-300", // lighter body text
  darkText: "text-gray-900", // for headings on light bg
  midText: "text-gray-600", // muted text
  baseBg: "bg-white", // white background sections
  altBg: "bg-neutral-50", // very light grey section
};

const Company = () => {
  const values = [
    {
      icon: <Heart className={`h-12 w-12 ${theme.primary}`} />,
      title: "Student-Centric Approach",
      description:
        "Every decision we make puts student success and satisfaction at the center.",
    },
    {
      icon: <Star className={`h-12 w-12 ${theme.primary}`} />,
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, from counseling to support.",
    },
    {
      icon: <Users className={`h-12 w-12 ${theme.primary}`} />,
      title: "Integrity",
      description:
        "Honest, transparent guidance with no hidden fees or false promises.",
    },
    {
      icon: <Globe className={`h-12 w-12 ${theme.primary}`} />,
      title: "Global Vision",
      description:
        "We help students become global citizens prepared for international success.",
    },
  ];

  const team = [
    {
      name: "Mohammed Ishaq",
      position: "Founder & CEO",
      experience: "3+ years",
      image: CeoLogo,
      specialization: "International Education Strategy",
      description:
        "Former university administrator with extensive experience in global education partnerships.",
    },
    {
      name: "Mohammed Ashwaq",
      position: "Co-Founder & Managing Director",
      experience: "2+ years",
      image: Ashwaq,
      specialization: "Student Counseling & Guidance",
      description:
        "Certified education counselor who has guided over 2000+ students to their dream universities.",
    },
    {
      name: "Nandhini Madishetty",
      position: "Marketing & Admission Counselor",
      experience: "4+ years",
      image: Nandini,
      specialization: "Immigration & Visa Processing",
      description:
        "Former visa officer with deep understanding of international visa regulations and processes.",
    },
  ];

  const achievements = [
    { number: "10,000+", label: "Students Counseled" },
    { number: "500+", label: "University Partners" },
    { number: "15+", label: "Countries" },
    { number: "98%", label: "Visa Success Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                About Visa Dunia Overseas
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Empowering students to achieve their international education
                dreams through expert guidance and unwavering support since
                2024.
              </p>
              <Link
                to="/contact"
                className={`${theme.primaryBg} ${theme.primaryHover} text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center`}
              >
                Meet Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our team"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-neutral-100 p-8 rounded-xl">
              <Target className={`h-12 w-12 ${theme.darkText} mb-6`} />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize global education by providing expert guidance,
                comprehensive support, and personalized services that make
                studying abroad accessible, affordable, and successful for every
                student who dreams of international education.
              </p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-xl">
              <Globe className={`h-12 w-12 ${theme.darkText} mb-6`} />
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the world's most trusted overseas education consultancy,
                recognized for transforming lives through international
                education and creating a global community of successful,
                culturally aware professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={`${theme.secondaryBg} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Achievements
            </h2>
            <p className={`text-xl ${theme.lightText}`}>
              Numbers that reflect our commitment to student success
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div
                  className={`text-4xl lg:text-5xl font-bold ${theme.highlight} mb-2`}
                >
                  {achievement.number}
                </div>
                <div className={`${theme.lightText} font-medium`}>
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full sm:w-48 h-48 object-cover"
                  />
                  <div className="p-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 font-semibold mb-2">
                      {member.position}
                    </p>
                    <p className="text-gray-600 text-sm mb-3">
                      {member.experience} Experience
                    </p>
                    <p className="text-gray-700 text-sm mb-3">
                      {member.specialization}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${theme.primaryBg} py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Work with the Best?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of successful students who trusted our expert team
            with their study abroad journey.
          </p>
          <Link
            to="/contact"
            className="bg-white text-neutral-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Start Your Journey with Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Company;
