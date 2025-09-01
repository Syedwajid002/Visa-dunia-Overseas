import React from "react";
import { Link } from "react-router-dom";
import { Star, MapPin, Calendar, ArrowRight, Quote } from "lucide-react";

const Gallery = () => {
  const successStories = [
    {
      name: "Sneha Reddy",
      university: "Technical University of Munich",
      country: "Germany",
      program: "MS in Mechanical Engineering",
      year: "2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNhgwV9uI6WL_EkfafSiSxyejNt52q5kF1-NgjEBuwxOErxVtcP3WXKPeU-GPrtDJIAtI&usqp=CAU",
      testimonial:
        "Studying in Germany was affordable and high-quality thanks to Visa Dunia's guidance. They helped me understand the German education system and secure admission without any hassle.",
      achievement: "DAAD Scholarship Recipient",
    },
    {
      name: "Imran Shareef",
      university: "University of Toronto",
      country: "Canada",
      program: "Master in Computer Science",
      year: "2023",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SpdrXZoDj1cXjViBoK6aWwShGpBfPRBRgw&s",
      testimonial:
        "Visa Dunia made my dream of studying in Canada a reality. Their guidance through the application and visa process was exceptional. Now I'm pursuing my Master's at one of the top universities in the world!",
      achievement: "Full Scholarship + Research Assistantship",
    },
    {
      name: "Vikram Singh",
      university: "University of Oxford",
      country: "UK",
      program: "Master in International Relations",
      year: "2024",
      image:
        "https://thumbs.dreamstime.com/b/photo-handsome-stylish-casual-young-indian-25662209.jpg",
      testimonial:
        "Oxford was always a dream, and Visa Dunia made it possible. Their expertise in UK applications and scholarship guidance was invaluable. Forever grateful!",
      achievement: "Rhodes Scholarship Finalist",
    },
    {
      name: "Rahul Patel",
      university: "Stanford University",
      country: "USA",
      program: "MBA",
      year: "2025",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTutGVPJIbETSqlTMGyIkpZes-LhMb1xkjCLIpSsNd7IdI_y8AqwS2q1e4Yq0Vevvo6Zzw&usqp=CAU",
      testimonial:
        "The team at Visa Dunia provided incredible support throughout my MBA application process. Their essay writing guidance and interview preparation were game-changers. Stanford here I come!",
      achievement: "50% Merit Scholarship",
    },
    {
      name: "Anita Gupta",
      university: "University of Melbourne",
      country: "Australia",
      program: "Master in Data Science",
      year: "2023",
      image:
        "https://qph.cf2.quoracdn.net/main-qimg-76fbf73bddb3e3da099a94b2673ac2fc-pjlq",
      testimonial:
        "Professional, reliable, and supportive - that's Visa Dunia in three words. They helped me navigate the complex Australian visa process and secured my place at Melbourne University.",
      achievement: "Graduate Research Position",
    },
    {
      name: "Arjun Mehta",
      university: "University of Sydney",
      country: "Australia",
      program: "Master in Business Analytics",
      year: "2024",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw63x3Ip1ueINusDZ-P7B83A6QftyET5G0SQ&s",
      testimonial:
        "The personalized attention and detailed guidance I received from Visa Dunia was outstanding. They made the entire process smooth and stress-free.",
      achievement: "Graduate Placement in Fortune 500",
    },
  ];

  const galleryImages = [
    {
      title: "Graduation Ceremony - Canada",
      image:
        "https://leapscholar.com/blog/wp-content/uploads/2023/08/Indian-student-in-Canada-1024x576.jpg",
      description: "Our students celebrating their graduation success",
    },
    {
      title: "Campus Life - USA",
      image: "https://rostrumedu.com/wp-content/uploads/image4-16.png",
      description: "Students enjoying campus activities",
    },
    {
      title: "Study Group - UK",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mLNXpJC7O4ZXRCNY6zTNxZDh5NvD_-RP7w&s",
      description: "Collaborative learning environment",
    },
    {
      title: "Research Lab - Australia",
      image:
        "https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Advanced research facilities",
    },
    {
      title: "University Campus - Germany",
      image: "https://www.avanse.com/blogs/images/Untitled%20design%20(2).png",
      description: "Beautiful university architecture",
    },
    {
      title: "Student Activities - France",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSutvibLAww_Adj6jinsns4mnv_f9y23v3hlw&s",
      description: "Cultural exchange programs",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Student Success Gallery
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Celebrating the achievements of our students who are now thriving
              in universities around the world.
            </p>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from real students who achieved their dreams
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900">
                        {story.name}
                      </h3>
                      <p className="text-gray-700 font-semibold">
                        {story.program}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>
                            {story.university}, {story.country}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{story.year}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg mb-4">
                    <div className="text-gray-900 font-semibold text-sm">
                      Achievement:
                    </div>
                    <div className="text-gray-700">{story.achievement}</div>
                  </div>

                  <div className="relative">
                    <Quote className="h-8 w-8 text-gray-300 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic leading-relaxed pl-6">
                      {story.testimonial}
                    </p>
                  </div>

                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-gray-800 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Student Life Around the World
            </h2>
            <p className="text-xl text-gray-600">
              Glimpses of student experiences in top destinations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students Guided" },
              { number: "500+", label: "Universities" },
              { number: "25+", label: "Countries" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Want to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful students and start your study abroad
            journey with expert guidance.
          </p>
          <Link
            to="/contact"
            className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
