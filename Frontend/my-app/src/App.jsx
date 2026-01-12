import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Heart, ChevronRight, Play, 
  BookOpen, Activity, Droplets, ArrowRight, 
  CheckCircle2, Globe, Users 
} from 'lucide-react';

// --- Configuration & Theme ---
const theme = {
  colors: {
    gold: '#C5A059',
    navy: '#0F172A',
    slate: '#334155',
    cream: '#F9FAFB'
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-10 h-10 bg-[#C5A059] rounded-full flex items-center justify-center text-white font-serif font-bold text-xl">S</div>
          <span className={`font-serif text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
            Sparkling Global Foundation<span className="text-[#C5A059]">.</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex items-center gap-8 font-medium text-sm tracking-wide ${isScrolled ? 'text-[#0F172A]' : 'text-white/90'}`}>
          {['Mission', 'Impact', 'Programs', 'Stories'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-[#C5A059] transition-colors">{item}</a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${isScrolled ? 'bg-[#0F172A] text-white hover:bg-[#C5A059]' : 'bg-white text-[#0F172A] hover:bg-[#C5A059] hover:text-white'}`}>
            Donate Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#C5A059]">
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 absolute w-full"
          >
            <div className="flex flex-col p-6 gap-4 text-[#0F172A]">
              {['Mission', 'Impact', 'Programs', 'Stories'].map((item) => (
                <a key={item} href="#" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>{item}</a>
              ))}
              <button className="w-full py-3 bg-[#C5A059] text-white rounded-lg font-bold">Donate Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]); // Parallax effect

  return (
    <header className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/60 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="md:w-2/3 lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white text-xs tracking-wider uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse"></span>
            Global Impact Award 2025
          </motion.div>
          
          <motion.h1 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
          >
            Illuminating <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C5A059] to-yellow-200">Futures.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-lg"
          >
            We bridge the gap between privilege and poverty. Join the Sparkling Foundation in creating sustainable change for children worldwide.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-[#C5A059] text-white font-semibold rounded-full shadow-xl shadow-[#C5A059]/20 hover:bg-white hover:text-[#0F172A] transition-all duration-300">
              Start Donating
            </button>
            <button className="px-8 py-4 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group">
              <Play className="w-5 h-5 fill-current" />
              Watch Our Story
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const Stats = () => {
  return (
    <section className="relative z-20 -mt-20 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {[
            { label: 'Lives Impacted', value: '12M+' },
            { label: 'Countries', value: '54' },
            { label: 'Fund Efficiency', value: '98%' },
            { label: 'Years Active', value: '20+' },
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center px-4"
            >
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-[#0F172A] mb-2">{stat.value}</h3>
              <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Mission = () => {
  return (
    <section className="py-24 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C5A059]/10 rounded-full blur-2xl"></div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?auto=format&fit=crop&w=800&q=80" alt="Child" className="rounded-2xl shadow-xl w-full h-64 object-cover transform translate-y-8" />
            <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80" alt="Volunteer" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-[#C5A059] font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h4>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#0F172A] mb-6">Building a Legacy of <span className="italic text-[#C5A059]">Compassion</span></h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At Sparkling Foundation, we believe transparency creates trust. Our sophisticated approach to philanthropy ensures that every dollar you contribute is tracked, managed, and deployed with the highest level of efficiency.
          </p>
          <button className="group flex items-center gap-2 text-[#0F172A] font-semibold hover:text-[#C5A059] transition-colors">
            Read our Annual Report 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const ProgramCard = ({ title, icon: Icon, image, desc }) => (
  <motion.div 
    variants={fadeInUp}
    className="group relative overflow-hidden rounded-2xl cursor-pointer h-[450px]"
  >
    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500 z-10" />
    <img src={image} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt={title} />
    
    <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-serif text-white font-bold mb-2">{title}</h3>
      <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Programs = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl font-bold text-[#0F172A] mb-4">Our Core Initiatives</h2>
          <p className="text-gray-500">Targeted interventions designed for maximum long-term impact.</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          <ProgramCard 
            title="Global Education" 
            icon={BookOpen} 
            image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
            desc="Building schools and providing digital access to remote villages."
          />
          <ProgramCard 
            title="Healthcare" 
            icon={Activity} 
            image="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800&q=80"
            desc="Mobile clinics and vaccination drives in high-risk zones."
          />
          <ProgramCard 
            title="Clean Water" 
            icon={Droplets} 
            image="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=800&q=80"
            desc="Implementing sustainable filtration systems."
          />
        </motion.div>
      </div>
    </section>
  );
};

const DonateSection = () => {
  const [amount, setAmount] = useState(100);
  const [frequency, setFrequency] = useState('monthly');

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#334155]/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Make Your Impact Felt
        </motion.h2>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mt-12"
        >
          <div className="flex justify-center gap-4 mb-8 bg-gray-100 p-1 rounded-full w-fit mx-auto">
            {['one-time', 'monthly'].map((freq) => (
              <button
                key={freq}
                onClick={() => setFrequency(freq)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${frequency === freq ? 'bg-[#0F172A] text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
              >
                {freq === 'one-time' ? 'One Time' : 'Monthly'}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[25, 50, 100, 250].map((val) => (
              <button
                key={val}
                onClick={() => setAmount(val)}
                className={`py-4 rounded-xl font-serif text-xl font-bold border-2 transition-all duration-300 ${amount === val ? 'border-[#C5A059] bg-[#C5A059] text-white' : 'border-gray-100 text-[#0F172A] hover:border-[#C5A059]'}`}
              >
                ${val}
              </button>
            ))}
          </div>

          <div className="bg-[#F9FAFB] rounded-xl p-6 mb-8 text-left border border-gray-100">
            <h4 className="font-bold text-[#0F172A] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#C5A059]" />
              Your ${amount} {frequency} donation provides:
            </h4>
            <p className="text-gray-600 text-sm">
              Complete school supplies and hot meals for {Math.floor(amount / 5)} children for an entire semester.
            </p>
          </div>

          <button className="w-full py-4 bg-[#0F172A] text-white font-bold rounded-xl shadow-lg hover:bg-[#C5A059] transition-colors text-lg">
            Donate ${amount} {frequency === 'monthly' ? 'Monthly' : 'Today'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-[#0F172A] text-white/60 py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#C5A059] rounded-full flex items-center justify-center text-white font-serif font-bold italic">S</div>
        <span className="font-serif text-xl font-bold text-white">Sparkling.</span>
      </div>
      <p className="text-sm">© 2025 Sparkling Foundation. All rights reserved.</p>
      <div className="flex gap-6">
        <Users className="w-5 h-5 hover:text-white cursor-pointer" />
        <Globe className="w-5 h-5 hover:text-white cursor-pointer" />
        <Heart className="w-5 h-5 hover:text-white cursor-pointer" />
      </div>
    </div>
  </footer>
);

// --- Main App Component ---

const SparklingFoundation = () => {
  return (
    <div className="font-sans text-[#0F172A] antialiased bg-[#F9FAFB]">
      <Navbar />
      <Hero />
      <Stats />
      <Mission />
      <Programs />
      <DonateSection />
      <Footer />
    </div>
  );
};

export default SparklingFoundation;