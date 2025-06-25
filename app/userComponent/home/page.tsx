"use client";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  Clock,
  Users,
  Heart,
  BookOpen,
  Menu,
  X,
  Play,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const services = [
    {
      time: "8:00 AM",
      name: "First Service",
      description: "Traditional worship with hymns and choir",
    },
    {
      time: "10:30 AM",
      name: "Second Service",
      description: "Contemporary worship with live band",
    },
    {
      time: "6:00 PM",
      name: "Evening Service",
      description: "Intimate worship and fellowship",
    },
  ];
  const ministries = [
    {
      name: "Youth Ministry",
      icon: Users,
      description: "Empowering the next generation",
      age: "Ages 13-25",
    },
    {
      name: "Children's Church",
      icon: Heart,
      description: "Building strong foundations",
      age: "Ages 4-12",
    },
    {
      name: "Bible Study",
      icon: BookOpen,
      description: "Growing in God's word",
      age: "All Ages",
    },
    {
      name: "Prayer Warriors",
      icon: Star,
      description: "Interceding for our community",
      age: "All Ages",
    },
  ];
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "RCCG Eagles Assembly has been my spiritual home for 3 years. The love and support I've received here is incredible.",
      role: "Youth Leader",
    },
    {
      name: "David Okonkwo",
      text: "This church changed my life. The teachings are powerful and the community is so welcoming.",
      role: "Men's Fellowship",
    },
    {
      name: "Grace Adebayo",
      text: "I found my purpose here. The pastors are caring and the worship experience is truly heaven on earth.",
      role: "Choir Member",
    },
  ];
  const upcomingEvents = [
    {
      date: "Jun 22",
      title: "Youth Conference 2025",
      time: "9:00 AM - 5:00 PM",
    },
    { date: "Jun 25", title: "Midweek Bible Study", time: "7:00 PM - 8:30 PM" },
    { date: "Jun 29", title: "Community Outreach", time: "10:00 AM - 2:00 PM" },
  ];
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isVisible
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  RCCG Eagles Assembly
                </h1>
                <p className="text-sm text-gray-600">Soaring to New Heights</p>
              </div>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#ministries"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Ministries
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Join Us
              </button>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <a
                href="#home"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </a>
              <a
                href="#ministries"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Ministries
              </a>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </a>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-full">
                Join Us
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="absolute inset-0 bg-dot-white/20"></div>
          </div>
        </div>
        <div
          className={`relative z-10 text-center text-white px-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Welcome Home
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience God's love, grow in faith, and soar to new heights with
            the Eagles Assembly family
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <Play size={20} /> */}
            <Link
              href="/userComponent/createUsers"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              {/* <Play size={20} /> */}
              Add Members
            </Link>
            <Link
              href="/userComponent/bulkSms"
              className="group bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              {/* <Play size={20} /> */}
              Send Bulk Sms
            </Link>
            {/* <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              /> */}
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/70" />
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-32 h-32 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
      </section>
      {/* Service Times */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Join Us for Worship
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience powerful worship, inspiring messages, and genuine
              fellowship every Sunday
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Clock size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">
                    {service.time}
                  </p>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Soaring to New Heights in Faith
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                RCCG Eagles Assembly is a vibrant community of believers
                dedicated to worship, fellowship, and spiritual growth. Like
                eagles, we rise above challenges and soar to new spiritual
                heights together.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our mission is to create an environment where every person can
                encounter God's love, discover their purpose, and develop their
                God-given potential.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Members</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-gray-600">Years Serving</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-gray-600">Ministries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl h-96 flex items-center justify-center">
                <div className="text-white text-center">
                  <Users size={80} className="mx-auto mb-4 opacity-80" />
                  <p className="text-xl font-semibold">Building Community</p>
                  <p className="text-lg opacity-90">Growing Together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Ministries */}
      <section id="ministries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Ministries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your place and grow in faith through our diverse ministry
              opportunities
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ministries.map((ministry, index) => {
              const IconComponent = ministry.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {ministry.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{ministry.description}</p>
                  <span className="text-sm text-blue-600 font-semibold">
                    {ministry.age}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-16">What Our Family Says</h2>
          <div className="relative h-64 overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 ${
                  index === activeTestimonial
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <blockquote className="text-xl md:text-2xl mb-8 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div>
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-blue-200">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeTestimonial ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for these special gatherings
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-lg p-3 text-center min-w-16">
                    <div className="text-sm font-bold">{event.date}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-1">
                      <Clock size={16} />
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-300 mb-8">
                We'd love to hear from you. Reach out with any questions or to
                plan your visit.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-300">
                      123 Faith Avenue, Ikeja, Lagos
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-300">+234 801 234 5678</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-300">info@rccgeagles.org</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <div>
                  <h3 className="font-bold">RCCG Eagles Assembly</h3>
                  <p className="text-sm text-gray-400">
                    Soaring to New Heights
                  </p>
                </div>
              </div>
              <p className="text-gray-400">
                A place where faith takes flight and community soars together.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="#about"
                  className="block hover:text-white transition-colors"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="block hover:text-white transition-colors"
                >
                  Service Times
                </a>
                <a
                  href="#ministries"
                  className="block hover:text-white transition-colors"
                >
                  Ministries
                </a>
                <a
                  href="#contact"
                  className="block hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Service Times</h4>
              <div className="space-y-2 text-gray-400">
                <p>Sunday: 8:00 AM, 10:30 AM, 6:00 PM</p>
                <p>Wednesday: 7:00 PM</p>
                <p>Friday: 7:00 PM</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-gray-400">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>YouTube</p>
                <p>WhatsApp</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 RCCG Eagles Assembly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
