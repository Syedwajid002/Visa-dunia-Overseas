import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Award, Globe, BookOpen, Star } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-[#035079]" />,
      title: "Expert Counselors",
      description: "Experienced professionals to guide your education journey",
    },
    {
      icon: <Award className="h-8 w-8 text-[#035079]" />,
      title: "100% Success Rate",
      description: "Proven track record of successful admissions",
    },
    {
      icon: <Globe className="h-8 w-8 text-[#035079]" />,
      title: "Global Network",
      description: "Partnerships with universities worldwide",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#035079]" />,
      title: "Complete Support",
      description: "End-to-end assistance from application to arrival",
    },
  ];

  const testimonials = [
    {
      name: "Sneha Reddy",
      country: "Germany",
      text: "Studying in Germany was affordable and high-quality thanks to Visa Dunia's guidance. They helped me understand the German education system and secure admission without any hassle.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhgwV9uI6WL_EkfafSiSxyejNt52q5kF1-NgjEBuwxOErxVtcP3WXKPeU-GPrtDJIAtI&usqp=CAU",
    },
    {
      name: "Imran Shareef",
      country: "Canada",
      text: "Visa Dunia made my dream of studying in Canada a reality. Their guidance through the application and visa process was exceptional. Now I'm pursuing my Master's at one of the top universities in the world!",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SpdrXZoDj1cXjViBoK6aWwShGpBfPRBRgw&s",
    },
    {
      name: "Vikram Singh",
      country: "UK",
      text: "Oxford was always a dream, and Visa Dunia made it possible. Their expertise in UK applications and scholarship guidance was invaluable. Forever grateful!",
      image:
        "https://thumbs.dreamstime.com/b/photo-handsome-stylish-casual-young-indian-25662209.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#035079] to-[#024563] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Start Your Study Abroad Journey with{" "}
                <span className="text-gray-300">Visa Dunia Overseas</span>
              </h1>
              <p className="text-xl mb-8 text-gray-300 leading-relaxed">
                Transform your future with world-class education. We provide
                expert guidance, visa assistance, and complete support for your
                international education dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white hover:bg-gray-200 text-[#035079] px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/study-destinations"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#035079] px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Explore Destinations
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://bunny-wp-pullzone-3xue3q6yzy.b-cdn.net/wp-content/uploads/2024/11/EM-BLOG-study-abroad-benefits-1185326263.png"
                alt="Students studying abroad"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Visa Dunia Overseas?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to making your study abroad dreams come true
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-gray-50"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Popular Study Destinations
            </h2>
            <p className="text-xl text-gray-600">
              Discover amazing opportunities around the world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                country: "USA",
                image:
                  "https://www.credila.com/_next/image?url=%2Fimages%2Farticles%2Fbenefits-studying-in-the-usa.webp&w=3840&q=75",
                universities: "4,000+",
                description: "World's largest higher education system",
              },
              {
                country: "UK",
                image:
                  "https://in2english.net/wp-content/uploads/2019/01/the-uk-800x383.jpg",
                universities: "150+",
                description: "Home to world's oldest universities",
              },
              {
                country: "Canada",
                image:
                  "https://www.hindustantimes.com/ht-img/img/2025/04/26/550x309/A-Canadian-flag-flies-in-front-of-the-Detroit-skyl_1745660803498_1745666072927.jpg",
                universities: "100+",
                description: "Affordable quality education & immigration",
              },
            ].map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dest.country}</h3>
                  <p className="text-gray-800 font-semibold mb-2">
                    {dest.universities} Universities
                  </p>
                  <p className="text-gray-600 mb-4">{dest.description}</p>
                  <Link
                    to={`/country/${dest.country.toLowerCase()}`}
                    className="bg-[#035079] hover:bg-[#024563] text-white px-4 py-2 rounded font-semibold transition-colors inline-flex items-center"
                  >
                    Explore {dest.country}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600">
              We make studying abroad simple and stress-free
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                description: "Discuss your goals and preferences",
              },
              {
                step: "02",
                title: "University Selection",
                description: "Find the perfect match for your profile",
              },
              {
                step: "03",
                title: "Application & Visa",
                description: "Complete application and visa processing",
              },
              {
                step: "04",
                title: "Pre-Departure",
                description: "Prepare for your journey abroad",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#035079] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[#024563]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-300">
              Success stories from our amazing students
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      Studying in {testimonial.country}
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#035079]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Get expert guidance and make your study abroad dreams come true
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-[#035079] hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-[#035079] px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
