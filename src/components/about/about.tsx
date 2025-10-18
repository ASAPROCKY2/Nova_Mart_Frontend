import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import founderImg from "../../assets/images/founder.jpg";
import shopImg from "../../assets/images/shop.jpg";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const useAnimatedSection = () => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });
    return { ref, inView };
  };

  const { ref: storyRef, inView: storyInView } = useAnimatedSection();
  const { ref: founderRef, inView: founderInView } = useAnimatedSection();
  const { ref: missionRef, inView: missionInView } = useAnimatedSection();
  const { ref: statsRef, inView: statsInView } = useAnimatedSection();
  const { ref: valuesRef, inView: valuesInView } = useAnimatedSection();

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: "💫", color: "from-purple-500 to-pink-500" },
    { number: "5+", label: "Years Experience", icon: "🚀", color: "from-blue-500 to-cyan-500" },
    { number: "100+", label: "Products", icon: "🛍️", color: "from-green-500 to-emerald-500" },
    { number: "24/7", label: "Customer Support", icon: "⚡", color: "from-orange-500 to-red-500" }
  ];

  const values = [
    { title: "Innovation", description: "Pioneering wholesale solutions", icon: "💡" },
    { title: "Excellence", description: "Uncompromising quality standards", icon: "⭐" },
    { title: "Community", description: "Empowering local businesses", icon: "🤝" },
    { title: "Growth", description: "Driving mutual success", icon: "📈" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-white/5 rounded"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* 🚀 Hero Section - Futuristic */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full blur-3xl opacity-20"
            animate={{
              scale: [1.2, 1, 1.2],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-10 text-center max-w-6xl mx-auto"
        >
          {/* Animated Title */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 tracking-tighter">
              NOVAMART
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12"
          >
            <div className="inline-block bg-black/30 backdrop-blur-md border border-white/10 rounded-full px-8 py-4 mb-6">
              <span className="text-cyan-300 text-lg font-semibold tracking-widest">
                THE FUTURE OF WHOLESALE
              </span>
            </div>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-2xl md:text-4xl text-white/90 font-light leading-relaxed max-w-4xl mx-auto"
            >
              Revolutionizing wholesale with{" "}
              <span className="text-cyan-400 font-bold">cutting-edge technology</span>,{" "}
              <span className="text-purple-400 font-bold">unbeatable value</span>, and{" "}
              <span className="text-pink-400 font-bold">exceptional service</span>
            </motion.p>
          </motion.div>

          {/* Animated Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* 📊 Stats Section - Holographic */}
      <section ref={statsRef} className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              BY THE NUMBERS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={statsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center group-hover:border-cyan-400/30 transition-all duration-300">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-4xl mb-4"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.h3 
                    className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    initial={{ scale: 0 }}
                    animate={statsInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-white/70 font-semibold text-lg">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 Story Section - Cyberpunk */}
      <section ref={storyRef} className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={storyInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <div className="inline-flex items-center space-x-4 mb-6">
                  <div className="w-3 h-12 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full"></div>
                  <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    OUR STORY
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={storyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xl text-white/80 leading-relaxed"
                  >
                    At <strong className="text-cyan-400">NovaMart</strong>, we're not just another wholesale platform. We're the architects of a new era in commerce, where technology meets tradition to create unparalleled value.
                  </motion.p>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={storyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-xl text-white/80 leading-relaxed"
                  >
                    Born from a vision to democratize wholesale access, we've built an ecosystem that empowers businesses of all sizes to thrive in the digital economy.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={storyInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="flex space-x-4 pt-6"
                  >
                    {["AI-Powered", "Blockchain", "Cloud-Native"].map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0 }}
                        animate={storyInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                        className="bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 px-4 py-2 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur-xl opacity-30"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={shopImg}
                  alt="NovaMart Shop"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-black/50 backdrop-blur-md rounded-xl p-4 border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold">Live Innovation Hub</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 👤 Founder Section - Futuristic */}
      <section ref={founderRef} className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-3xl overflow-hidden border-2 border-cyan-400/30"
                >
                  <img
                    src={founderImg}
                    alt="Founder of NovaMart"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10"></div>
                </motion.div>
              </div>
              
              {/* Floating Tech Elements */}
              <motion.div
                className="absolute -top-6 -left-6 w-12 h-12 bg-cyan-400 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-500 rounded-full opacity-20"
                animate={{
                  scale: [1.5, 1, 1.5],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="bg-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={founderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                    VISIONARY LEADER
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                    Ian Mwangi Kamunya
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-6"></div>
                </motion.div>

                <div className="space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={founderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg text-white/80 leading-relaxed"
                  >
                    A true pioneer in the digital wholesale space, Ian Mwangi envisioned a platform that would bridge the gap between traditional commerce and cutting-edge technology.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={founderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-lg text-white/80 leading-relaxed"
                  >
                    His leadership has propelled NovaMart to become a beacon of innovation, serving as a catalyst for economic growth across East Africa and beyond.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={founderInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="pt-6 border-t border-white/10"
                  >
                    <div className="flex flex-wrap gap-4">
                      {["Tech Innovator", "Business Strategist", "Community Builder"].map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ scale: 0 }}
                          animate={founderInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 1.1 + index * 0.2 }}
                          className="bg-purple-500/10 text-purple-400 border border-purple-400/30 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌟 Values Section - New */}
      <section ref={valuesRef} className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
              OUR VALUES
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, rotateY: 90 }}
                animate={valuesInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-md border border-white/10 rounded-3xl p-8 text-center group-hover:border-cyan-400/30 transition-all duration-300 h-full">
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    animate={valuesInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-5xl mb-6"
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-lg leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 Mission Section - Epic */}
      <section ref={missionRef} className="py-32 px-6 md:px-12 relative overflow-hidden">
        {/* Animated Space Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 to-cyan-900/50"></div>
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={missionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={missionInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-8"
          >
            <div className="bg-black/30 backdrop-blur-md border border-cyan-400/30 rounded-full px-8 py-4">
              <span className="text-cyan-300 text-lg font-semibold tracking-widest">
                MISSION STATEMENT
              </span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-12 leading-tight"
          >
            OUR MISSION
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-black/40 backdrop-blur-2xl rounded-3xl p-12 border border-white/10 shadow-2xl"
          >
            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
              To <span className="text-cyan-400 font-bold">revolutionize</span> wholesale commerce through 
              <span className="text-purple-400 font-bold"> innovative technology</span>, creating a 
              <span className="text-pink-400 font-bold"> connected ecosystem</span> where businesses 
              of all scales can thrive and redefine their potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={missionInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 flex justify-center space-x-12"
          >
            {["🌌", "🚀", "💫", "⚡"].map((emoji, index) => (
              <motion.div
                key={emoji}
                initial={{ scale: 0, rotate: -180 }}
                animate={missionInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.5, rotate: 360 }}
                className="text-5xl cursor-pointer"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;