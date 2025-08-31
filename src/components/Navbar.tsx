import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import Logo from "../Assets/VSO Logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownData = {
    'why-study-abroad': [
      {
        title: 'Global Exposure',
        link: '/why-study-abroad',
        image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Experience diverse cultures and perspectives'
      },
      {
        title: 'Career Opportunities',
        link: '/why-study-abroad',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Enhance your global career prospects'
      },
      {
        title: 'Quality Education',
        link: '/why-study-abroad',
        image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Access world-class education systems'
      },
      {
        title: 'Personal Growth',
        link: '/why-study-abroad',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Develop independence & confidence'
      }
    ],
    'destinations': [
      {
        title: 'USA',
        link: '/country/usa',
        image: 'https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Land of opportunities & innovation'
      },
      {
        title: 'UK',
        link: '/country/uk',
        image: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Historic excellence in education'
      },
      {
        title: 'Canada',
        link: '/country/canada',
        image: 'https://images.pexels.com/photos/1574937/pexels-photo-1574937.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Welcoming & diverse society'
      },
      {
        title: 'Australia',
        link: '/country/australia',
        image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'High quality of life & education'
      },
      {
        title: 'Germany',
        link: '/country/germany',
        image: 'https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Engineering & technology hub'
      },
      {
        title: 'France',
        link: '/country/france',
        image: 'https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Art, culture & business excellence'
      }
    ],
    'services': [
      {
        title: 'Admission Guidance',
        link: '/student-services',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'University selection & applications'
      },
      {
        title: 'Visa Assistance',
        link: '/student-services',
        image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Complete visa processing support'
      },
      {
        title: 'Accommodation Support',
        link: '/student-services',
        image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Find perfect student housing'
      },
      {
        title: 'Pre-Departure Sessions',
        link: '/student-services',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Prepare for your journey abroad'
      }
    ],
    'test-prep': [
      {
        title: 'IELTS Preparation',
        link: '/test-prep',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'English proficiency test coaching'
      },
      {
        title: 'TOEFL Preparation',
        link: '/test-prep',
        image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Academic English assessment prep'
      },
      {
        title: 'GRE Coaching',
        link: '/test-prep',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Graduate studies entrance exam'
      },
      {
        title: 'GMAT Training',
        link: '/test-prep',
        image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'MBA entrance exam preparation'
      }
    ],
    'company': [
      {
        title: 'About Us',
        link: '/company',
        image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Our mission & vision'
      },
      {
        title: 'Our Team',
        link: '/company',
        image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Meet our expert counselors'
      },
      {
        title: 'Success Stories',
        link: '/gallery',
        image: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Student achievements & testimonials'
      },
      {
        title: 'Awards & Recognition',
        link: '/company',
        image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Industry awards & certifications'
      }
    ],
    'immigration': [
      {
        title: 'Express Entry (Canada)',
        link: '/immigration',
        image: 'https://images.pexels.com/photos/1574937/pexels-photo-1574937.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Federal skilled worker program'
      },
      {
        title: 'Provincial Nominee',
        link: '/immigration',
        image: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Province-specific programs'
      },
      {
        title: 'Study to Work Pathway',
        link: '/immigration',
        image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Post-graduation immigration routes'
      },
      {
        title: 'Skilled Independent (Australia)',
        link: '/immigration',
        image: 'https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=150',
        description: 'Points-based skilled migration'
      }
    ]
  };

  const handleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 my-4">

            <img src={Logo} alt="" className='h-20 w-20' />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Why Study Abroad Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors py-2"
                onClick={() => handleDropdown('why-study-abroad')}
              >
                <span>Why Study Abroad</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'why-study-abroad' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 grid grid-cols-2 gap-2 p-4">
                  {dropdownData['why-study-abroad'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Study Destinations Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors py-2"
                onClick={() => handleDropdown('destinations')}
              >
                <span>Study Destinations</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'destinations' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 grid grid-cols-2 gap-2 p-4">
                  {dropdownData['destinations'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Student Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors py-2"
                onClick={() => handleDropdown('services')}
              >
                <span>Student Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 grid grid-cols-2 gap-2 p-4">
                  {dropdownData['services'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Test Prep Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors py-2"
                onClick={() => handleDropdown('test-prep')}
              >
                <span>Test Prep</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'test-prep' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 grid grid-cols-2 gap-2 p-4">
                  {dropdownData['test-prep'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors py-2"
                onClick={() => handleDropdown('company')}
              >
                <span>Company</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'company' && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 grid grid-cols-2 gap-2 p-4">
                  {dropdownData['company'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Immigration Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 transition-colors py-2"
                onClick={() => handleDropdown('immigration')}
              >
                <span>Immigration</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'immigration' && (
                <div className="absolute top-full right-0 mt-2 w-96 bg-white shadow-xl rounded-lg border border-gray-200 grid grid-cols-2 gap-2 p-4">
                  {dropdownData['immigration'].map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <img src={item.image} alt={item.title} className="w-12 h-12 object-cover rounded" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-600">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link to="/gallery" className="text-gray-700 hover:text-blue-700 transition-colors py-2">
              Gallery
            </Link>
            {/* <Link to="/refer-earn" className="text-gray-700 hover:text-blue-700 transition-colors py-2">
              Refer & Earn
            </Link> */}

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link to="/why-study-abroad" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Why Study Abroad
            </Link>
            <Link to="/study-destinations" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Study Destinations
            </Link>
            <Link to="/student-services" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Student Services
            </Link>
            <Link to="/test-prep" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Test Prep
            </Link>
            <Link to="/company" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Company
            </Link>
            <Link to="/immigration" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Immigration
            </Link>
            <Link to="/gallery" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Gallery
            </Link>
            {/* <Link to="/refer-earn" className="block py-2 px-4 text-gray-700 hover:bg-gray-50 rounded">
              Refer & Earn
            </Link> */}
            <Link to="/contact" className="block py-2 px-4 bg-orange-500 text-white rounded mx-4 text-center">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;