import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, DollarSign, Clock } from 'lucide-react';

const StudyDestinations = () => {
  const destinations = [
    {
      country: 'USA',
      flag: '🇺🇸',
      image: 'https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=500',
      universities: '4,000+',
      students: '1M+',
      tuition: '$20,000-$70,000',
      duration: '2-4 years',
      highlights: ['World-class research facilities', 'Diverse academic programs', 'Strong alumni networks', 'Post-study work opportunities'],
      description: 'Home to the world\'s top-ranked universities and a leader in research and innovation.'
    },
    {
      country: 'UK',
      flag: '🇬🇧',
      image: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=500',
      universities: '150+',
      students: '500K+',
      tuition: '£15,000-£35,000',
      duration: '1-3 years',
      highlights: ['Historic universities', 'Shorter degree programs', 'Gateway to Europe', 'Rich cultural heritage'],
      description: 'Experience centuries of academic excellence in the birthplace of the English language.'
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      image: 'https://images.pexels.com/photos/1574937/pexels-photo-1574937.jpeg?auto=compress&cs=tinysrgb&w=500',
      universities: '100+',
      students: '400K+',
      tuition: 'CAD $15,000-$35,000',
      duration: '2-4 years',
      highlights: ['Immigration-friendly policies', 'Safe and welcoming', 'Affordable tuition', 'Work while studying'],
      description: 'Known for its welcoming immigration policies and high-quality, affordable education.'
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=500',
      universities: '40+',
      students: '300K+',
      tuition: 'AUD $20,000-$45,000',
      duration: '2-4 years',
      highlights: ['High quality of life', 'Beautiful landscapes', 'Strong job market', 'Post-study work rights'],
      description: 'Combines excellent education with an outstanding lifestyle in a safe, multicultural environment.'
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      image: 'https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=500',
      universities: '400+',
      students: '350K+',
      tuition: '€500-€20,000',
      duration: '2-3 years',
      highlights: ['Low tuition fees', 'Strong economy', 'Engineering excellence', 'Central European location'],
      description: 'Europe\'s largest economy offering affordable, high-quality education, especially in engineering and technology.'
    },
    {
      country: 'France',
      flag: '🇫🇷',
      image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=500',
      universities: '300+',
      students: '250K+',
      tuition: '€170-€15,000',
      duration: '2-3 years',
      highlights: ['Art and culture hub', 'Affordable education', 'Fashion and design', 'Culinary excellence'],
      description: 'The heart of European culture, offering exceptional programs in arts, business, and culinary arts.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Study Destinations Around the World
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore top study destinations and find the perfect country for your international education journey.
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              Get Personalized Guidance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {destinations.map((dest, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img src={dest.image} alt={dest.country} className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-2xl mr-2">{dest.flag}</span>
                    <span className="font-bold text-gray-900">{dest.country}</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{dest.description}</p>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{dest.universities} Universities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{dest.students} Students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{dest.tuition}/year</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{dest.duration}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {dest.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/country/${dest.country.toLowerCase()}`}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center w-full justify-center"
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

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Can't Decide Which Country Is Right for You?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Our expert counselors will help you choose the perfect destination based on your goals, budget, and preferences.
          </p>
          <Link
            to="/contact"
            className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Get Free Country Selection Guidance
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default StudyDestinations;