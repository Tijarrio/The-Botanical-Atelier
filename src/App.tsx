import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Instagram, Mail, MapPin } from "lucide-react";

// --- Components ---

const Navbar = ({ activeSection, onNavigate }: { activeSection: string, onNavigate: (section: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center bg-gradient-to-b from-atelier-bg to-transparent">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col cursor-pointer"
        onClick={() => onNavigate("home")}
      >
        <span className="font-serif text-2xl tracking-tighter uppercase font-bold">The Botanical</span>
        <span className="font-display text-xs tracking-[0.5em] uppercase opacity-70 ml-1">Atelier</span>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-12 text-atelier-cream">
        {["home", "services", "gallery"].map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item)}
            className={`font-display text-xs uppercase tracking-[0.2em] transition-all hover:text-atelier-accent relative ${
              activeSection === item ? "text-atelier-accent" : "text-atelier-cream/60"
            }`}
          >
            {item}
            {activeSection === item && (
              <motion.div 
                layoutId="nav-underline"
                className="absolute -bottom-2 left-0 w-full h-[1px] bg-atelier-accent"
              />
            )}
          </button>
        ))}
      </div>

      {/* Mobile Toggle */}
      <button className="md:hidden text-atelier-cream" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-atelier-bg flex flex-col items-center justify-center gap-8 md:hidden text-atelier-cream"
          >
            {["home", "services", "gallery"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  onNavigate(item);
                  setIsOpen(false);
                }}
                className="font-serif text-4xl uppercase italic hover:text-atelier-accent"
              >
                {item}
              </button>
            ))}
            <button onClick={() => setIsOpen(false)} className="mt-12 opacity-50">
              <X size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Home = () => {
  return (
    <section id="home" className="min-h-screen pt-32 px-6 md:px-12 flex flex-col justify-center">
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10"
        >
          <h1 className="text-huge font-serif italic text-atelier-accent">Refined</h1>
          <h1 className="text-huge font-serif text-atelier-cream -mt-4 md:-mt-12 ml-12 md:ml-24">Artisanship.</h1>
          
          <div className="mt-12 md:mt-24 max-w-xl md:ml-32">
            <p className="text-lg md:text-xl font-light leading-relaxed text-atelier-cream/80 italic">
              Crafting liquid visual anthologies through the alchemy of rare botanicals and precision mixology.
            </p>
            <motion.button 
              whileHover={{ x: 10 }}
              className="mt-8 flex items-center gap-4 font-display text-sm uppercase tracking-widest text-atelier-gold"
            >
              Explore the Studio <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

        {/* Asymmetric Image Decor */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="absolute -top-12 right-0 w-1/3 aspect-[3/4] hidden xl:block"
        >
          <img 
            src="https://images.unsplash.com/photo-1547517023-7ca0c162f816?auto=format&fit=crop&q=80&w=800" 
            alt="Botanical Still Life" 
            className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-6 -left-6 bg-atelier-bg p-8 border border-white/10">
            <span className="font-display text-[10px] uppercase tracking-[0.3em] opacity-50 block mb-2 text-atelier-cream">Portfolio No. 01</span>
            <span className="font-serif text-atelier-cream">The Juniper Essence</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Vertical Text */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 overflow-hidden hidden md:block">
        <motion.span 
          animate={{ y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="vertical-rl font-display text-[10px] uppercase tracking-[0.5em] opacity-20 whitespace-nowrap text-atelier-cream"
        >
          Botanical Mixology &bull; Liquid Art &bull; Sensory Journey &bull; The Atelier
        </motion.span>
      </div>
    </section>
  );
};

const Services = () => {
  const offerings = [
    {
      title: "Atmospheric Curation",
      desc: "Bespoke mixology tailored to the soul of your environment.",
      img: "https://images.unsplash.com/photo-1574096079513-d8259312b785?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Liquid Narratives",
      desc: "Story-driven cocktails that speak of distant lands and hidden gardens.",
      img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Botanical Foraging",
      desc: "Sourcing wild-crafted ingredients for truly ethereal flavors.",
      img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="min-h-screen py-32 px-6 md:px-12 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div>
            <span className="font-display text-xs uppercase tracking-widest opacity-50 block mb-4 text-atelier-cream">Our Craft</span>
            <h2 className="text-5xl md:text-7xl font-serif text-atelier-cream">Services</h2>
          </div>
          <p className="max-w-md text-atelier-cream/60 font-light italic">
            Beyond the glass, we curate experiences that linger in the memory like a faded perfume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {offerings.map((service, idx) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-atelier-bg/20 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif mb-4 group-hover:text-atelier-accent transition-colors text-atelier-cream">{service.title}</h3>
              <p className="text-sm font-light leading-relaxed opacity-60 italic text-atelier-cream">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1547517023-7ca0c162f816",
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b",
    "https://images.unsplash.com/photo-1574096079513-d8259312b785",
    "https://images.unsplash.com/photo-1502741224143-90386d7f8c82",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
  ];

  return (
    <section id="gallery" className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif mb-24 text-center text-atelier-cream">Anthology</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid"
            >
              <img 
                src={`${src}?auto=format&fit=crop&q=80&w=800`} 
                alt={`Atelier scene ${i}`} 
                className="w-full h-auto grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-500 rounded-px"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex flex-col mb-8 text-atelier-cream">
            <span className="font-serif text-3xl font-bold uppercase">The Botanical Atelier</span>
            <span className="font-display text-xs tracking-[0.5em] uppercase opacity-50">Liquid Anthologies</span>
          </div>
          <p className="max-w-sm opacity-60 font-light italic text-sm text-atelier-cream">
            Available for private curation, luxury events, and editorial collaborations globally.
          </p>
        </div>
        
        <div className="text-atelier-cream">
          <h4 className="font-display text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Contact</h4>
          <ul className="space-y-4 text-sm font-light italic">
            <li className="flex items-center gap-3 hover:text-atelier-accent cursor-pointer"><Mail size={14} /> studio@botanicalatelier.com</li>
            <li className="flex items-center gap-3 hover:text-atelier-accent cursor-pointer"><Instagram size={14} /> @botanical.atelier</li>
          </ul>
        </div>

        <div className="text-atelier-cream">
          <h4 className="font-display text-[10px] uppercase tracking-[0.3em] opacity-40 mb-6">Studio Location</h4>
          <ul className="space-y-4 text-sm font-light italic">
            <li className="flex items-center gap-3"><MapPin size={14} /> Mayfair, London</li>
            <li className="flex items-center gap-3"><MapPin size={14} /> Marais, Paris</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex justify-between items-center opacity-30 text-[10px] uppercase tracking-widest text-atelier-cream">
        <span>&copy; 2025 The Botanical Atelier</span>
        <span>Crafted with Intention</span>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "gallery"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-hidden bg-atelier-bg">
      <Navbar activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <Home />
        <Services />
        <Gallery />
      </main>

      <Footer />

      {/* Atmospheric Background Noise/Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] contrast-150 brightness-150 z-[100] bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
      {/* Decorative Floating Circles */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed -top-32 -left-32 w-96 h-96 rounded-full bg-atelier-accent blur-[120px] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.1, 0.05],
          x: [0, -40, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-0 -right-32 w-[30rem] h-[30rem] rounded-full bg-atelier-gold blur-[140px] pointer-events-none z-0" 
      />
    </div>
  );
}
