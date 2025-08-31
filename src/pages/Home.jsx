import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Award,
  Globe,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Counselors",
      description: "Experienced professionals to guide your education journey",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "100% Success Rate",
      description: "Proven track record of successful admissions",
    },
    {
      icon: <Globe className="h-8 w-8 text-orange-500" />,
      title: "Global Network",
      description: "Partnerships with universities worldwide",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-500" />,
      title: "Complete Support",
      description: "End-to-end assistance from application to arrival",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      country: "Canada",
      text: "Visa Dunia made my dream of studying in Canada a reality. Their support was incredible!",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Rahul Patel",
      country: "USA",
      text: "The team guided me through every step of the process. Now I'm studying at my dream university!",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
    {
      name: "Anita Gupta",
      country: "Australia",
      text: "Professional, reliable, and supportive. Highly recommend their services!",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Start Your Study Abroad Journey with{" "}
                <span className="text-orange-400">Visa Dunia Overseas</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Transform your future with world-class education. We provide
                expert guidance, visa assistance, and complete support for your
                international education dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/study-destinations"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
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
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
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
      <section className="py-16 bg-gray-50">
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
                  "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=400",
                universities: "4,000+",
                description: "World's largest higher education system",
              },
              {
                country: "UK",
                image:
                  "https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=400",
                universities: "150+",
                description: "Home to world's oldest universities",
              },
              {
                country: "Canada",
                image:
                  "https://images.pexels.com/photos/1574937/pexels-photo-1574937.jpeg?auto=compress&cs=tinysrgb&w=400",
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
                  <p className="text-orange-500 font-semibold mb-2">
                    {dest.universities} Universities
                  </p>
                  <p className="text-gray-600 mb-4">{dest.description}</p>
                  <Link
                    to={`/country/${dest.country.toLowerCase()}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded font-semibold transition-colors inline-flex items-center"
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
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-blue-100">
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
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get expert guidance and make your study abroad dreams come true
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/gallery"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
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
