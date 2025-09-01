import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Clock,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
  FileText,
  TrendingUp,
} from "lucide-react";

const theme = {
  primary: "text-black",
  primaryBg: "bg-black",
  primaryHover: "hover:bg-gray-800",
  accent: "text-gray-700",
  accentBg: "bg-gray-100",
  lightText: "text-gray-300",
  midText: "text-gray-600",
  darkText: "text-gray-900",
};

const Immigration = () => {
  const programs = [
    {
      country: "Canada",
      flag: "🇨🇦",
      image:
        "https://images.pexels.com/photos/1574937/pexels-photo-1574937.jpeg?auto=compress&cs=tinysrgb&w=500",
      programs: [
        {
          name: "Express Entry System",
          description: "Federal skilled worker program for permanent residence",
          requirements: [
            "Bachelor's degree",
            "IELTS 6.0+",
            "Work experience",
            "Age under 47",
          ],
          processing: "6-12 months",
          icon: <TrendingUp className={`h-8 w-8 ${theme.primary}`} />,
        },
        {
          name: "Provincial Nominee Program (PNP)",
          description: "Province-specific immigration programs",
          requirements: [
            "Job offer from province",
            "Relevant education",
            "Work experience",
            "Language proficiency",
          ],
          processing: "12-18 months",
          icon: <MapPin className={`h-8 w-8 ${theme.primary}`} />,
        },
        {
          name: "Study to Work Pathway",
          description: "Graduate from Canadian institution and apply for PR",
          requirements: [
            "Canadian education",
            "Work permit",
            "Canadian experience",
            "Language test",
          ],
          processing: "6-24 months",
          icon: <Award className={`h-8 w-8 ${theme.primary}`} />,
        },
      ],
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      image:
        "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=500",
      programs: [
        {
          name: "Skilled Independent Visa (189)",
          description: "Points-based system for skilled professionals",
          requirements: [
            "Skilled occupation",
            "Age under 45",
            "English proficiency",
            "65+ points",
          ],
          processing: "8-12 months",
          icon: <Award className={`h-8 w-8 ${theme.primary}`} />,
        },
        {
          name: "Skilled Nominated Visa (190)",
          description: "State-nominated skilled migration",
          requirements: [
            "State nomination",
            "Skilled occupation",
            "Work experience",
            "English test",
          ],
          processing: "12-16 months",
          icon: <MapPin className={`h-8 w-8 ${theme.primary}`} />,
        },
        {
          name: "Graduate Visa (485)",
          description: "Post-study work visa for recent graduates",
          requirements: [
            "Australian qualification",
            "Age under 50",
            "Health insurance",
            "English proficiency",
          ],
          processing: "4-8 months",
          icon: <Users className={`h-8 w-8 ${theme.primary}`} />,
        },
      ],
    },
  ];

  const benefits = [
    {
      icon: <FileText className={`h-8 w-8 ${theme.primary}`} />,
      title: "Expert Documentation",
      description:
        "Complete assistance with document preparation and verification",
    },
    {
      icon: <Clock className={`h-8 w-8 ${theme.primary}`} />,
      title: "Fast Processing",
      description: "Streamlined process to minimize application time",
    },
    {
      icon: <Users className={`h-8 w-8 ${theme.primary}`} />,
      title: "Dedicated Support",
      description: "Personal case manager for each immigration application",
    },
    {
      icon: <Award className={`h-8 w-8 ${theme.primary}`} />,
      title: "High Success Rate",
      description: "98% success rate in immigration applications",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Student Skilled Immigration Programs
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Turn your international education into permanent residency with
              our expert immigration guidance and support.
            </p>
            <Link
              to="/contact"
              className={`${theme.primaryBg} ${theme.primaryHover} text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center`}
            >
              Check Your Eligibility
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Immigration Services?
            </h2>
            <p className="text-xl text-gray-600">
              Expert guidance for your pathway to permanent residency
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immigration Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Immigration Programs by Country
            </h2>
            <p className="text-xl text-gray-600">
              Explore immigration pathways in your preferred destination
            </p>
          </div>

          <div className="space-y-16">
            {programs.map((country, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <div className="relative h-64 lg:h-full">
                      <img
                        src={country.image}
                        alt={country.country}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-6xl mb-4">{country.flag}</div>
                          <h3 className="text-3xl font-bold">
                            {country.country}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Immigration Programs
                    </h3>
                    <div className="space-y-6">
                      {country.programs.map((program, idx) => (
                        <div
                          key={idx}
                          className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-start space-x-4 mb-4">
                            {program.icon}
                            <div className="flex-1">
                              <h4 className="text-xl font-bold text-gray-900 mb-2">
                                {program.name}
                              </h4>
                              <p className="text-gray-700 mb-4">
                                {program.description}
                              </p>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">
                                    Requirements:
                                  </h5>
                                  <ul className="space-y-1">
                                    {program.requirements.map((req, reqIdx) => (
                                      <li
                                        key={reqIdx}
                                        className="flex items-center space-x-2"
                                      >
                                        <CheckCircle className="h-4 w-4 text-black" />
                                        <span className="text-gray-600 text-sm">
                                          {req}
                                        </span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-2">
                                    Processing Time:
                                  </h5>
                                  <div className="flex items-center space-x-2">
                                    <Clock className="h-4 w-4 text-black" />
                                    <span className="text-gray-700">
                                      {program.processing}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Immigration Process
            </h2>
            <p className="text-xl text-gray-300">
              Step-by-step guidance for your immigration journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Eligibility Assessment",
                description:
                  "Comprehensive evaluation of your profile and immigration options",
              },
              {
                step: "02",
                title: "Documentation",
                description:
                  "Preparation and verification of all required documents",
              },
              {
                step: "03",
                title: "Application & Follow-up",
                description:
                  "Application submission and status tracking until approval",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${theme.primaryBg} py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Your Immigration Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free assessment of your immigration eligibility and explore
            your options with our expert counselors.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Get Free Assessment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Immigration;
