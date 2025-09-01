import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  DollarSign,
  Clock,
  Award,
  CheckCircle,
  Users,
  BookOpen,
} from "lucide-react";

const CountryPage = () => {
  const { country } = useParams();

  const countryData = {
    usa: {
      name: "United States",
      flag: "🇺🇸",
      hero: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=800",
      overview:
        "The United States hosts the world's largest number of international students, offering unparalleled diversity in higher education with over 4,000 institutions.",
      stats: {
        universities: "4,000+",
        students: "1M+",
        tuition: "$20,000-$70,000",
        duration: "2-4 years",
      },
      highlights: [
        "World-class research facilities",
        "Diverse academic programs",
        "Strong industry connections",
        "Post-study work opportunities (OPT)",
        "Scholarship opportunities",
        "Cultural diversity",
      ],
      topUniversities: [
        "Harvard University",
        "MIT",
        "Stanford University",
        "University of California Berkeley",
        "Columbia University",
        "University of Chicago",
        "Princeton University",
        "Yale University",
      ],
      requirements: {
        academic: [
          "Bachelor's degree (for Master's)",
          "3.0+ GPA recommended",
          "Transcripts",
        ],
        tests: [
          "TOEFL (80+) or IELTS (6.5+)",
          "GRE/GMAT (program dependent)",
          "SAT/ACT (undergraduate)",
        ],
        documents: [
          "Statement of Purpose",
          "Letters of Recommendation",
          "Financial statements",
          "Passport",
        ],
      },
      workRights:
        "F-1 students can work 20 hours/week on-campus during studies and are eligible for Optional Practical Training (OPT) for 12-36 months post-graduation.",
      livingCost:
        "$15,000-$25,000 per year depending on location and lifestyle choices.",
    },
    // (UK, Canada, Australia same structure – keep as is)
  };

  const data = countryData[country?.toLowerCase()] || countryData.usa;

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0">
          <img
            src={data.hero}
            alt={data.name}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl mb-6">{data.flag}</div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Study in {data.name}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            {data.overview}
          </p>
          <Link
            to="/contact"
            className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Apply for {data.name}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MapPin />,
                label: "Universities",
                value: data.stats.universities,
              },
              {
                icon: <Users />,
                label: "International Students",
                value: data.stats.students,
              },
              {
                icon: <DollarSign />,
                label: "Annual Tuition",
                value: data.stats.tuition,
              },
              {
                icon: <Clock />,
                label: "Program Duration",
                value: data.stats.duration,
              },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="h-8 w-8 text-black mx-auto mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Why Study in {data.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm border"
              >
                <CheckCircle className="h-6 w-6 text-black" />
                <span className="text-gray-800">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12">
            Top Universities in {data.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.topUniversities.map((university, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border text-center hover:shadow-md transition-shadow"
              >
                <Award className="h-8 w-8 text-black mx-auto mb-3" />
                <h3 className="font-semibold">{university}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
            Admission Requirements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Requirements",
                icon: <BookOpen />,
                items: data.requirements.academic,
              },
              {
                title: "Standardized Tests",
                icon: <Award />,
                items: data.requirements.tests,
              },
              {
                title: "Required Documents",
                icon: <Users />,
                items: data.requirements.documents,
              },
            ].map((req, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm border"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="h-6 w-6 text-black mr-2">{req.icon}</span>
                  {req.title}
                </h3>
                <ul className="space-y-3">
                  {req.items.map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-black" />
                      <span className="text-gray-800">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Living & Working */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <DollarSign className="h-6 w-6 text-black mr-2" />
              Living Costs
            </h3>
            <p className="text-lg text-gray-700">{data.livingCost}</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Users className="h-6 w-6 text-black mr-2" />
              Work Rights
            </h3>
            <p className="text-lg text-gray-700">{data.workRights}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Study in {data.name}?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get personalized guidance and start your application process with
            our expert counselors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Apply for {data.name}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/test-prep"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Prepare for Tests
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountryPage;
