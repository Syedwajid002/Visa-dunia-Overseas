import React from "react";
import { Link } from "react-router-dom";
import {
  Globe,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  Briefcase,
} from "lucide-react";

const WhyStudyAbroad = () => {
  const benefits = [
    {
      icon: <Globe className="h-12 w-12 text-[#035079]" />,
      title: "Global Exposure",
      description:
        "Experience diverse cultures, languages, and perspectives that broaden your worldview and enhance your personal growth.",
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#035079]" />,
      title: "Career Advancement",
      description:
        "International education opens doors to global career opportunities and higher earning potential in your field.",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-[#035079]" />,
      title: "Quality Education",
      description:
        "Access to world-renowned universities with cutting-edge research facilities and innovative teaching methods.",
    },
    {
      icon: <Users className="h-12 w-12 text-[#035079]" />,
      title: "Networking Opportunities",
      description:
        "Build international connections and friendships that last a lifetime and benefit your professional journey.",
    },
    {
      icon: <Award className="h-12 w-12 text-[#035079]" />,
      title: "Personal Development",
      description:
        "Develop independence, adaptability, and problem-solving skills that make you stand out in any field.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-[#035079]" />,
      title: "Immigration Pathways",
      description:
        "Many countries offer post-study work permits and pathways to permanent residency for international students.",
    },
  ];

  const stats = [
    { number: "5M+", label: "International Students Globally" },
    { number: "85%", label: "Higher Employment Rate" },
    { number: "40%", label: "Higher Salary Potential" },
    { number: "200+", label: "Countries Welcome Students" },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#035079] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Study Abroad?
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover the life-changing benefits of international education and
            why millions of students choose to study abroad every year.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#035079] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transform Your Future
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Studying abroad isn't just about getting a degree – it's about
              transforming yourself and opening doors to unlimited
              possibilities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-[#035079] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                How Visa Dunia Overseas Makes It Possible
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Personalized Counseling",
                    desc: "One-on-one guidance tailored to your goals and profile",
                  },
                  {
                    title: "University Partnerships",
                    desc: "Direct relationships with top universities worldwide",
                  },
                  {
                    title: "Visa Expertise",
                    desc: "Expert knowledge of visa requirements and processes",
                  },
                  {
                    title: "Post-Arrival Support",
                    desc: "Continued assistance even after you reach your destination",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex-shrink-0 mt-1"></div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-blue-100">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students in consultation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take the First Step?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation with our expert counselors and start
            planning your study abroad journey today.
          </p>
          <Link
            to="/contact"
            className="bg-[#035079] hover:bg-[#024461] border border-[#035079] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhyStudyAbroad;
