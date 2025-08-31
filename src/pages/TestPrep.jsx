import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, ArrowRight, CheckCircle, Users, Target } from 'lucide-react';

const TestPrep = () => {
  const tests = [
    {
      name: 'IELTS',
      fullName: 'International English Language Testing System',
      icon: <BookOpen className="h-12 w-12 text-orange-500" />,
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '2 hours 45 minutes',
      validity: '2 years',
      format: 'Computer/Paper-based',
      description: 'The world\'s most popular English proficiency test, accepted by universities worldwide.',
      sections: ['Listening (30 min)', 'Reading (60 min)', 'Writing (60 min)', 'Speaking (11-14 min)'],
      tips: [
        'Practice all four skills daily',
        'Take mock tests regularly',
        'Focus on time management',
        'Build vocabulary systematically'
      ],
      scoreRange: '0-9 bands',
      countries: ['UK', 'Australia', 'Canada', 'New Zealand']
    },
    {
      name: 'TOEFL',
      fullName: 'Test of English as a Foreign Language',
      icon: <Target className="h-12 w-12 text-orange-500" />,
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '3 hours',
      validity: '2 years',
      format: 'Internet-based (iBT)',
      description: 'Preferred by US universities, TOEFL tests academic English skills in university settings.',
      sections: ['Reading (54-72 min)', 'Listening (41-57 min)', 'Speaking (17 min)', 'Writing (50 min)'],
      tips: [
        'Master note-taking skills',
        'Practice integrated tasks',
        'Improve academic vocabulary',
        'Time management is crucial'
      ],
      scoreRange: '0-120 points',
      countries: ['USA', 'Canada', 'Germany', 'France']
    },
    {
      name: 'GRE',
      fullName: 'Graduate Record Examination',
      icon: <TrendingUp className="h-12 w-12 text-orange-500" />,
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '3 hours 45 minutes',
      validity: '5 years',
      format: 'Computer-based',
      description: 'Required for graduate school admissions, especially for MS/PhD programs in various fields.',
      sections: ['Verbal Reasoning', 'Quantitative Reasoning', 'Analytical Writing'],
      tips: [
        'Build strong vocabulary',
        'Master quantitative concepts',
        'Practice analytical writing',
        'Take adaptive test strategies'
      ],
      scoreRange: '260-340 (V+Q), 0-6 (AW)',
      countries: ['USA', 'Canada', 'Australia', 'Germany']
    },
    {
      name: 'GMAT',
      fullName: 'Graduate Management Admission Test',
      icon: <Award className="h-12 w-12 text-orange-500" />,
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=500',
      duration: '3 hours 7 minutes',
      validity: '5 years',
      format: 'Computer-adaptive',
      description: 'Essential for MBA and business master\'s program admissions worldwide.',
      sections: ['Quantitative Reasoning', 'Verbal Reasoning', 'Integrated Reasoning', 'Analytical Writing'],
      tips: [
        'Focus on data sufficiency',
        'Master critical reasoning',
        'Practice time management',
        'Understand business concepts'
      ],
      scoreRange: '200-800 total',
      countries: ['USA', 'UK', 'Canada', 'Australia']
    }
  ];

  const preparationFeatures = [
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Expert Faculty",
      description: "Learn from certified trainers with years of teaching experience"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Flexible Timing",
      description: "Weekend and evening batches to fit your schedule"
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Personalized Approach",
      description: "Customized study plans based on your strengths and weaknesses"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Proven Results",
      description: "95% of our students achieve their target scores"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Test Preparation Programs
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Achieve your target scores with our comprehensive test preparation programs designed for success.
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              Enroll Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Test Prep Programs?
            </h2>
            <p className="text-xl text-gray-600">
              Get the best preparation with our proven methodology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {preparationFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tests Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Test Preparation Programs
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive preparation for all major standardized tests
            </p>
          </div>
          <div className="space-y-12">
            {tests.map((test, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      {test.icon}
                      <div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{test.name}</h3>
                        <p className="text-gray-600">{test.fullName}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">{test.description}</p>
                    
                    {/* Test Details */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-orange-500 font-semibold">Duration</div>
                        <div className="text-gray-700">{test.duration}</div>
                      </div>
                      <div>
                        <div className="text-orange-500 font-semibold">Validity</div>
                        <div className="text-gray-700">{test.validity}</div>
                      </div>
                      <div>
                        <div className="text-orange-500 font-semibold">Format</div>
                        <div className="text-gray-700">{test.format}</div>
                      </div>
                      <div>
                        <div className="text-orange-500 font-semibold">Score Range</div>
                        <div className="text-gray-700">{test.scoreRange}</div>
                      </div>
                    </div>

                    {/* Test Sections */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Test Sections:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {test.sections.map((section, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700">{section}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Preparation Tips */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Preparation Tips:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {test.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Accepted Countries */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Widely Accepted In:</h4>
                      <div className="flex flex-wrap gap-2">
                        {test.countries.map((country, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to="/contact"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                    >
                      Enroll for {test.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  <div className="lg:p-8">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Start Your Test Preparation Today
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join our proven test preparation programs and achieve your target scores with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Book Free Demo Class
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestPrep;