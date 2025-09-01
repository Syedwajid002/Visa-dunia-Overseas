import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Plane,
  Home,
  BookOpen,
  CreditCard,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const StudentServices = () => {
  const services = [
    {
      icon: <FileText className="h-12 w-12 text-orange-500" />,
      title: "Admission Guidance",
      description:
        "Complete assistance with university selection, application preparation, and document verification for successful admissions.",
      features: [
        "University shortlisting",
        "Application essay writing",
        "Document preparation",
        "Interview preparation",
      ],
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Plane className="h-12 w-12 text-orange-500" />,
      title: "Visa Assistance",
      description:
        "Expert visa consultation and application support to ensure smooth visa approval with minimal hassle.",
      features: [
        "Visa category selection",
        "Document checklist",
        "Application filing",
        "Interview preparation",
      ],
      image:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Home className="h-12 w-12 text-orange-500" />,
      title: "Accommodation Support",
      description:
        "Find safe, comfortable, and affordable housing options near your university or college campus.",
      features: [
        "On-campus housing",
        "Off-campus apartments",
        "Homestay options",
        "Roommate matching",
      ],
      image:
        "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-orange-500" />,
      title: "Pre-Departure Sessions",
      description:
        "Comprehensive orientation sessions to prepare you for life and studies in your destination country.",
      features: [
        "Cultural orientation",
        "Academic expectations",
        "Living tips",
        "Emergency contacts",
      ],
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <CreditCard className="h-12 w-12 text-orange-500" />,
      title: "Financial Planning",
      description:
        "Guidance on education loans, scholarships, and financial planning for your international education.",
      features: [
        "Education loan assistance",
        "Scholarship guidance",
        "Budget planning",
        "Foreign exchange",
      ],
      image:
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: "Post-Arrival Support",
      description:
        "Continued support even after you reach your destination to ensure a smooth transition and success.",
      features: [
        "Airport pickup",
        "Bank account opening",
        "SIM card assistance",
        "Local orientation",
      ],
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-neutral-950 to-neutral-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-neutral-50">
              Comprehensive Student Services
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8">
              From application to arrival and beyond - we provide complete
              support throughout your study abroad journey.
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-50 mb-4">
              End-to-End Support Services
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
              Our comprehensive range of services ensures that every aspect of
              your study abroad journey is taken care of.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    {service.icon}
                    <h3 className="text-2xl lg:text-3xl font-bold text-neutral-50">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-neutral-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 bg-neutral-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-50 mb-4">
              Our Service Timeline
            </h2>
            <p className="text-xl text-neutral-400">
              A clear roadmap of how we support you at every step
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-500/30"></div>
            <div className="space-y-12">
              {[
                {
                  phase: "Initial Consultation",
                  time: "Week 1",
                  description: "Free profile evaluation and goal setting",
                },
                {
                  phase: "University Selection",
                  time: "Week 2-3",
                  description: "Shortlist universities based on your profile",
                },
                {
                  phase: "Application Preparation",
                  time: "Week 4-8",
                  description:
                    "Complete application with all required documents",
                },
                {
                  phase: "Visa Processing",
                  time: "Week 9-12",
                  description: "Visa application and interview preparation",
                },
                {
                  phase: "Pre-Departure",
                  time: "Week 13-14",
                  description: "Orientation and final preparations",
                },
                {
                  phase: "Post-Arrival",
                  time: "Ongoing",
                  description: "Continued support in your destination country",
                },
              ].map((step, index) => (
                <div key={index} className="relative flex items-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"></div>
                  <div
                    className={`w-1/2 ${
                      index % 2 === 0 ? "pr-12 text-right" : "pl-12 ml-auto"
                    }`}
                  >
                    <div className="bg-neutral-900 p-6 rounded-lg shadow-lg">
                      <div className="text-orange-500 font-semibold mb-2">
                        {step.time}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-50 mb-2">
                        {step.phase}
                      </h3>
                      <p className="text-neutral-300">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-neutral-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Our Complete Support?
          </h2>
          <p className="text-xl text-neutral-400 mb-8">
            Join thousands of successful students who trusted us with their
            study abroad journey.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Start Your Journey Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudentServices;
