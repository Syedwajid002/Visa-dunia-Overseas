import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MapPin, DollarSign, Clock, Award, CheckCircle, Users, BookOpen } from 'lucide-react';

const CountryPage = () => {
  const { country } = useParams();
  
  const countryData = {
    usa: {
      name: 'United States',
      flag: '🇺🇸',
      hero: 'https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'The United States hosts the world\'s largest number of international students, offering unparalleled diversity in higher education with over 4,000 institutions.',
      stats: {
        universities: '4,000+',
        students: '1M+',
        tuition: '$20,000-$70,000',
        duration: '2-4 years'
      },
      highlights: [
        'World-class research facilities',
        'Diverse academic programs',
        'Strong industry connections',
        'Post-study work opportunities (OPT)',
        'Scholarship opportunities',
        'Cultural diversity'
      ],
      topUniversities: [
        'Harvard University', 'MIT', 'Stanford University', 'University of California Berkeley',
        'Columbia University', 'University of Chicago', 'Princeton University', 'Yale University'
      ],
      requirements: {
        academic: ['Bachelor\'s degree (for Master\'s)', '3.0+ GPA recommended', 'Transcripts'],
        tests: ['TOEFL (80+) or IELTS (6.5+)', 'GRE/GMAT (program dependent)', 'SAT/ACT (undergraduate)'],
        documents: ['Statement of Purpose', 'Letters of Recommendation', 'Financial statements', 'Passport']
      },
      workRights: 'F-1 students can work 20 hours/week on-campus during studies and are eligible for Optional Practical Training (OPT) for 12-36 months post-graduation.',
      livingCost: '$15,000-$25,000 per year depending on location and lifestyle choices.'
    },
    uk: {
      name: 'United Kingdom',
      flag: '🇬🇧',
      hero: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'The UK is home to some of the world\'s oldest and most prestigious universities, offering excellent education with shorter degree programs.',
      stats: {
        universities: '150+',
        students: '500K+',
        tuition: '£15,000-£35,000',
        duration: '1-3 years'
      },
      highlights: [
        'Shorter degree duration',
        'Historic universities',
        'Gateway to Europe',
        'Rich cultural heritage',
        'Post-study work visa',
        'Research opportunities'
      ],
      topUniversities: [
        'Oxford University', 'Cambridge University', 'Imperial College London', 'UCL',
        'King\'s College London', 'Edinburgh University', 'Manchester University', 'LSE'
      ],
      requirements: {
        academic: ['Bachelor\'s degree equivalent', 'Good academic standing', 'Transcripts'],
        tests: ['IELTS (6.5+) or TOEFL (90+)', 'GRE/GMAT (some programs)', 'Subject-specific tests'],
        documents: ['Personal Statement', 'References', 'CV/Resume', 'Financial proof']
      },
      workRights: 'Students can work 20 hours/week during term time and full-time during holidays. Graduate visa allows 2-3 years post-study work.',
      livingCost: '£12,000-£20,000 per year depending on location, with London being more expensive.'
    },
    canada: {
      name: 'Canada',
      flag: '🇨🇦',
      hero: 'https://images.pexels.com/photos/1574937/pexels-photo-1574937.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Canada offers high-quality education at affordable costs with excellent post-graduation immigration opportunities and a welcoming multicultural environment.',
      stats: {
        universities: '100+',
        students: '400K+',
        tuition: 'CAD $15,000-$35,000',
        duration: '2-4 years'
      },
      highlights: [
        'Immigration-friendly policies',
        'Safe and welcoming environment',
        'Affordable tuition fees',
        'Work while studying',
        'Post-graduation work permit',
        'Pathway to permanent residency'
      ],
      topUniversities: [
        'University of Toronto', 'McGill University', 'UBC', 'University of Waterloo',
        'McMaster University', 'University of Alberta', 'York University', 'Concordia University'
      ],
      requirements: {
        academic: ['Bachelor\'s degree', 'Good academic record', 'Official transcripts'],
        tests: ['IELTS (6.5+) or TOEFL (86+)', 'GRE/GMAT (some programs)'],
        documents: ['Statement of Purpose', 'Letters of Reference', 'Resume', 'Financial proof']
      },
      workRights: 'Students can work 20 hours/week off-campus during studies. Post-graduation work permit for 1-3 years based on program length.',
      livingCost: 'CAD $12,000-$18,000 per year, significantly lower than USA and UK.'
    },
    australia: {
      name: 'Australia',
      flag: '🇦🇺',
      hero: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=800',
      overview: 'Australia combines world-class education with an exceptional quality of life, offering strong job prospects and beautiful natural environments.',
      stats: {
        universities: '40+',
        students: '300K+',
        tuition: 'AUD $20,000-$45,000',
        duration: '2-4 years'
      },
      highlights: [
        'High quality of life',
        'Beautiful natural environment',
        'Strong job market',
        'Post-study work rights',
        'Multicultural society',
        'Research excellence'
      ],
      topUniversities: [
        'Australian National University', 'University of Melbourne', 'University of Sydney', 'UNSW',
        'University of Queensland', 'Monash University', 'University of Western Australia', 'University of Adelaide'
      ],
      requirements: {
        academic: ['Bachelor\'s degree', 'Good academic standing', 'Official transcripts'],
        tests: ['IELTS (6.5+) or TOEFL (79+)', 'GRE/GMAT (some programs)'],
        documents: ['Statement of Purpose', 'CV/Resume', 'Academic references', 'Financial capacity']
      },
      workRights: 'Students can work 48 hours per fortnight during studies. Temporary Graduate visa (485) provides 2-4 years post-study work rights.',
      livingCost: 'AUD $18,000-$25,000 per year, varies by city with Sydney and Melbourne being more expensive.'
    }
  };

  const data = countryData[country?.toLowerCase()] || countryData.usa;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="absolute inset-0">
          <img src={data.hero} alt={data.name} className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-8xl mb-6">{data.flag}</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Study in {data.name}
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              {data.overview}
            </p>
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
            >
              Apply for {data.name}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <MapPin className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{data.stats.universities}</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{data.stats.students}</div>
              <div className="text-gray-600">International Students</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <DollarSign className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{data.stats.tuition}</div>
              <div className="text-gray-600">Annual Tuition</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{data.stats.duration}</div>
              <div className="text-gray-600">Program Duration</div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Study in {data.name}?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-md">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Top Universities in {data.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.topUniversities.map((university, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center hover:shadow-lg transition-shadow">
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{university}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Admission Requirements
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 text-orange-500 mr-2" />
                Academic Requirements
              </h3>
              <ul className="space-y-3">
                {data.requirements.academic.map((req, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-orange-500 mr-2" />
                Standardized Tests
              </h3>
              <ul className="space-y-3">
                {data.requirements.tests.map((test, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{test}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-orange-500 mr-2" />
                Required Documents
              </h3>
              <ul className="space-y-3">
                {data.requirements.documents.map((doc, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Living & Working */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <DollarSign className="h-6 w-6 text-orange-500 mr-2" />
                Living Costs
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">{data.livingCost}</p>
            </div>
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-orange-500 mr-2" />
                Work Rights
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">{data.workRights}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Study in {data.name}?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get personalized guidance and start your application process with our expert counselors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Apply for {data.name}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/test-prep"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
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