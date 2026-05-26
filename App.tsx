import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronDown,
  Sparkles,
  Car,
  Shield,
  Droplets,
  Zap,
  Award,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'about', 'gallery', 'testimonials', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Services', 'About', 'Gallery', 'Testimonials', 'Contact'];
  const bookingUrl = 'https://detailr.co/book/ardetailing';

  const services = [
    {
      id: 'luxury-valeting',
      title: 'Luxury Mobile Valeting & Deep Cleans',
      description: 'Comprehensive interior and exterior transformation for showroom-quality results.',
      duration: '3-5 hours',
      price: 'From £180',
      features: ['Hand wash & clay bar', 'Interior deep clean', 'Steam extraction', 'Leather conditioning', 'Engine bay detail'],
      popular: true,
    },
    {
      id: 'paint-correction',
      title: 'Paint Correction & Scratch Removal',
      description: 'Professional multi-stage correction to remove swirls, scratches, and oxidation.',
      duration: '1-2 days',
      price: 'From £350',
      features: ['Multi-stage machine polish', 'Swirl mark removal', 'Deep scratch removal', 'Paint depth measurement', 'Gloss enhancement'],
    },
    {
      id: 'ceramic-coating',
      title: 'Ceramic Coatings & Paint Protection',
      description: 'Industry-leading ceramic coatings for ultimate protection and lasting shine.',
      duration: '1-2 days',
      price: 'From £450',
      features: ['Paint correction prep', '9H ceramic coating', '5+ year durability', 'Hydrophobic properties', 'UV & chemical resistance'],
    },
    {
      id: 'full-detail',
      title: 'Full Detail Package',
      description: 'Complete interior and exterior overhaul with every premium treatment included.',
      duration: 'Full day',
      price: 'From £650',
      features: ['Full valeting service', 'Paint correction', 'Ceramic sealant', 'Interior protection', 'Glass coating'],
    },
    {
      id: 'interior-detail',
      title: 'Interior Rejuvenation',
      description: 'Deep interior cleaning and restoration for a fresh, like-new cabin.',
      duration: '3-4 hours',
      price: 'From £150',
      features: ['Steam deep clean', 'Stain removal', 'Odor elimination', 'Leather care', 'Fabric protection'],
    },
    {
      id: 'maintenance',
      title: 'Maintenance Valet',
      description: 'Regular upkeep to maintain your vehicle in showroom condition.',
      duration: '1-2 hours',
      price: 'From £90',
      features: ['Hand wash & dry', 'Wheel arch clean', 'Quick interior', 'Glass polish', 'Tire dressing'],
    },
  ];

  const testimonials = [
    {
      name: 'James Whitmore',
      location: 'Chelsea, London',
      rating: 5,
      text: 'Absolutely phenomenal service. My Range Rover has never looked better. The attention to detail is truly exceptional. Worth every penny.',
      car: 'Range Rover Sport',
    },
    {
      name: 'Sarah Chen',
      location: 'Kingston, Surrey',
      rating: 5,
      text: 'AR Detailing transformed my 5-year-old BMW into a showroom car. The ceramic coating is incredible - water just beads right off!',
      car: 'BMW 5 Series',
    },
    {
      name: 'Michael Okonkwo',
      location: 'Sevenoaks, Kent',
      rating: 5,
      text: 'Professional, punctual, and perfectionist. They detailed my Mercedes at my office and the results were stunning. Highly recommend!',
      car: 'Mercedes S-Class',
    },
    {
      name: 'Emma Richardson',
      location: 'Richmond, Surrey',
      rating: 5,
      text: 'Finally found a detailer who treats my Porsche with the care it deserves. The paint correction removed years of swirls. Incredible work!',
      car: 'Porsche 911',
    },
  ];

  const stats = [
    { number: '2,500+', label: 'Cars Detailed' },
    { number: '8+', label: 'Years Excellence' },
    { number: '5.0', label: 'Star Rating' },
    { number: '100%', label: 'Satisfaction' },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-zinc-950/95 backdrop-blur-xl shadow-2xl shadow-black/50' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-black text-lg sm:text-xl">AR</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-lg font-bold tracking-tight text-white">AR Detailing</span>
                <span className="text-[10px] font-medium text-yellow-400 tracking-widest uppercase">Premium Valeting</span>
              </div>
              <span className="sm:hidden text-sm font-bold tracking-tight text-white">AR Detailing</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-yellow-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-2.5 rounded-full text-sm font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-lg shadow-yellow-500/25"
              >
                Book Instantly
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-zinc-950/98 backdrop-blur-xl border-t border-zinc-800">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 font-medium hover:text-yellow-400 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full text-center font-bold mt-6"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Instantly Online
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
        }}
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center gap-2 bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-full px-4 py-2 mb-6 sm:mb-8">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm font-semibold text-gray-300 ml-2">5.0 · 500+ Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 leading-tight tracking-tight">
            Top-Rated Mobile Detailing
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent">
              London • Surrey • Kent
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Luxury showroom-quality results delivered to your driveway or workplace.
            <br className="hidden sm:block" />
            Experience the ultimate convenience with our award-winning mobile service.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:from-yellow-300 hover:via-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-2xl shadow-yellow-500/30 flex items-center justify-center gap-3"
            >
              Book Instantly Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+4477123456789"
              className="w-full sm:w-auto bg-white/5 backdrop-blur border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-6 sm:gap-12 text-gray-500 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>Premium Products</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-yellow-400" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative bg-gradient-to-b from-black via-zinc-900 to-zinc-900 py-12 sm:py-16 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative bg-zinc-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold text-yellow-400 uppercase tracking-wider">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
              Premium Detailing Packages
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              From maintenance washes to full transformations, we offer bespoke packages tailored to your vehicle's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative group bg-zinc-950 rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-2 ${
                  service.popular
                    ? 'border-yellow-400/50 shadow-2xl shadow-yellow-500/10'
                    : 'border-zinc-800 hover:border-yellow-400/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{service.title}</h3>
                  <span className="text-xs text-gray-500 bg-zinc-900 px-2 py-1 rounded">{service.duration}</span>
                </div>

                <p className="text-sm text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-zinc-800 flex items-center justify-between">
                  <div className="text-2xl sm:text-3xl font-black text-yellow-400">{service.price}</div>
                  <a
                    href={bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-yellow-400 transition-colors flex items-center gap-1"
                  >
                    Check Prices <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative bg-zinc-950 py-16 sm:py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-400 uppercase tracking-wider">Why Choose Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Where Passion Meets
                <br />
                <span className="text-yellow-400">Perfection</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed">
                At AR Detailing, we don't just clean cars - we curate automotive experiences. With over 8 years of expertise across London, Surrey, and Kent, we've refined our craft to deliver nothing short of showroom excellence.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {[
                  { icon: <MapPin className="w-5 h-5" />, title: 'Mobile Convenience', text: 'We come to you' },
                  { icon: <Shield className="w-5 h-5" />, title: 'Fully Insured', text: 'Complete peace of mind' },
                  { icon: <Sparkles className="w-5 h-5" />, title: 'Premium Products', text: 'Industry-leading brands' },
                  { icon: <Clock className="w-5 h-5" />, title: 'Flexible Hours', text: '7 days a week' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 bg-zinc-900/50 rounded-xl p-3 sm:p-4 border border-zinc-800">
                    <div className="text-yellow-400 flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="font-semibold text-white text-sm sm:text-base">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-500">{feature.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {['Gtechniq Accredited', 'Auto Glym Certified', 'Gyeon Authorised'].map((badge, index) => (
                  <div key={index} className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg text-xs sm:text-sm text-gray-300 font-medium">
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <img
                  src="https://images.pexels.com/photos/3806255/pexels-photo-3806255.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Detailing work"
                  className="rounded-xl w-full h-36 sm:h-48 md:h-56 object-cover border-2 border-zinc-800"
                />
                <img
                  src="https://images.pexels.com/photos/3315837/pexels-photo-3315837.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Interior cleaning"
                  className="rounded-xl w-full h-36 sm:h-48 md:h-56 object-cover border-2 border-zinc-800"
                />
              </div>
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <img
                  src="https://images.pexels.com/photos/1705196/pexels-photo-1705196.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Polishing"
                  className="rounded-xl w-full h-36 sm:h-48 md:h-56 object-cover border-2 border-zinc-800"
                />
                <img
                  src="https://images.pexels.com/photos/2619906/pexels-photo-2619906.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional service"
                  className="rounded-xl w-full h-36 sm:h-48 md:h-56 object-cover border-2 border-zinc-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="relative bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 py-16 sm:py-24 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6">
            <MapPin className="w-4 h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-semibold text-yellow-400 uppercase tracking-wider">Coverage Area</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
            We Travel To You
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
            Premium mobile detailing across <span className="text-yellow-400 font-semibold">London</span>, <span className="text-yellow-400 font-semibold">Surrey</span>, and <span className="text-yellow-400 font-semibold">Kent</span>. We bring showroom-quality results to your doorstep or workplace.
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {['London', 'Surrey', 'Kent', 'Central London', 'South London', 'Kingston', 'Richmond', 'Wimbledon', 'Sevenoaks', 'Tonbridge', 'Tunbridge Wells', 'Croydon'].map((area, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm text-gray-300 font-medium hover:border-yellow-400/30 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Outside our coverage area? Contact us - we may be able to accommodate your request.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative bg-zinc-900 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6">
              <Car className="w-4 h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold text-yellow-400 uppercase tracking-wider">Our Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
              Recent Transformations
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              See the difference professional detailing makes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { src: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800', car: 'Porsche 911' },
              { src: 'https://images.pexels.com/photos/3806255/pexels-photo-3806255.jpeg?auto=compress&cs=tinysrgb&w=800', car: 'Land Rover Range Rover' },
              { src: 'https://images.pexels.com/photos/3315837/pexels-photo-3315837.jpeg?auto=compress&cs=tinysrgb&w=800', car: 'BMW M4' },
              { src: 'https://images.pexels.com/photos/1705196/pexels-photo-1705196.jpeg?auto=compress&cs=tinysrgb&w=800', car: 'Mercedes-AMG GT' },
              { src: 'https://images.pexels.com/photos/2619906/pexels-photo-2619906.jpeg?auto=compress&cs=tinysrgb&w=800', car: 'Audi RS6' },
              { src: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=800', car: 'Bentley Continental' },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl border-2 border-zinc-800 hover:border-yellow-400/30 transition-all">
                <img
                  src={item.src}
                  alt={`${item.car} detailing`}
                  className="w-full h-48 sm:h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4 sm:p-6">
                  <p className="text-white font-bold text-lg sm:text-xl">{item.car}</p>
                  <p className="text-yellow-400 text-xs sm:text-sm">Premium Detailing</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative bg-zinc-950 py-16 sm:py-24 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold text-yellow-400 uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
              Join hundreds of satisfied clients across London, Surrey, and Kent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-800 hover:border-yellow-400/20 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  <div>
                    <p className="font-semibold text-white text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs sm:text-sm text-gray-500">Vehicle</p>
                    <p className="text-xs sm:text-sm text-yellow-400 font-medium">{testimonial.car}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-zinc-900 via-yellow-500/10 to-zinc-900 py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
            Ready for Showroom
            <br />
            <span className="text-yellow-400">Perfection?</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 max-w-xl mx-auto">
            Book online in under 2 minutes. We'll bring everything needed to transform your vehicle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-500 text-black px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base sm:text-lg font-bold hover:from-yellow-300 hover:via-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-105 shadow-2xl shadow-yellow-500/30 flex items-center justify-center gap-3"
            >
              Book Instantly Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>No Booking Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-yellow-400" />
              <span>Flexible Rescheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-zinc-950 py-16 sm:py-24 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full px-4 py-1.5 mb-4 sm:mb-6">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm font-semibold text-yellow-400 uppercase tracking-wider">Contact Us</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                Let's Discuss Your
                <br />
                <span className="text-yellow-400">Vehicle's Needs</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-10">
                Ready to experience the AR Detailing difference? Get in touch and we'll respond within the hour.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+4477123456789"
                  className="flex items-center gap-4 p-4 sm:p-5 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-yellow-400/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                    <Phone className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Call Anytime</p>
                    <p className="text-lg font-semibold text-white">+44 7712 345 6789</p>
                  </div>
                </a>

                <a
                  href="mailto:info@ardetailing.co.uk"
                  className="flex items-center gap-4 p-4 sm:p-5 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-yellow-400/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400/20 transition-colors">
                    <Mail className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Email Us</p>
                    <p className="text-lg font-semibold text-white">info@ardetailing.co.uk</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 sm:p-5 bg-zinc-900 rounded-xl border border-zinc-800">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Working Hours</p>
                    <p className="text-base font-semibold text-white">Mon - Sun: 8AM - 8PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/30 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/30 transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-800">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Send a Message</h3>

              <form className="space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 sm:py-4 text-white text-sm sm:text-base focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 sm:py-4 text-white text-sm sm:text-base focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-2 font-medium">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 sm:py-4 text-white text-sm sm:text-base focus:border-yellow-400 focus:outline-none transition-colors placeholder:text-gray-600"
                    placeholder="+44 7712 345 6789"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-2 font-medium">Service Interested In</label>
                  <select className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 sm:py-4 text-white text-sm sm:text-base focus:border-yellow-400 focus:outline-none transition-colors">
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm text-gray-400 mb-2 font-medium">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-3 sm:py-4 text-white text-sm sm:text-base focus:border-yellow-400 focus:outline-none transition-colors resize-none placeholder:text-gray-600"
                    placeholder="Tell us about your vehicle and preferred date..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 sm:py-4 rounded-xl text-sm sm:text-base font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all transform hover:scale-[1.02] shadow-lg shadow-yellow-500/20"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black py-12 sm:py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center">
                  <span className="text-black font-black text-xl sm:text-2xl">AR</span>
                </div>
                <div className="text-left">
                  <p className="text-base sm:text-lg font-bold text-white">AR Detailing</p>
                  <p className="text-xs sm:text-sm text-gray-500">Premium Mobile Valeting & Detailing</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/ardetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/30 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com/ardetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-11 sm:h-11 bg-zinc-900 border border-zinc-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-yellow-400 hover:border-yellow-400/30 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <span>London</span>
              <span className="hidden sm:inline">•</span>
              <span>Surrey</span>
              <span className="hidden sm:inline">•</span>
              <span>Kent</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
              >
                Book Online
              </a>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a
                href="tel:+4477123456789"
                className="text-gray-400 hover:text-white transition-colors"
              >
                +44 7712 345 6789
              </a>
              <span className="hidden sm:inline text-gray-600">•</span>
              <a
                href="mailto:info@ardetailing.co.uk"
                className="text-gray-400 hover:text-white transition-colors"
              >
                info@ardetailing.co.uk
              </a>
            </div>

            <p className="text-xs text-gray-600 text-center">
              © {new Date().getFullYear()} AR Detailing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
