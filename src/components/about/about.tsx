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

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
      {/* Simple Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-green-200"></div>
      </div>

      {/* 🌟 Hero Section - Local & Authentic */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          {/* Simple Background Elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200 rounded-full blur-3xl opacity-40"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-40"
            animate={{
              scale: [1.2, 1, 1.2],
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
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 mb-4">
              NOVAMART
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-12"
          >
            <div className="inline-block bg-white/80 backdrop-blur-md border border-emerald-200 rounded-full px-8 py-4 mb-6 shadow-lg">
              <span className="text-green-700 text-lg font-semibold tracking-widest">
                YOUR TRUSTED SHOP IN ISIOLO
              </span>
            </div>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed"
            >
              Serving Isiolo County with quality products,{" "}
              <span className="text-emerald-600 font-bold">fair prices</span>, and{" "}
              <span className="text-green-600 font-bold">friendly service</span> since 2018
            </motion.p>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 inline-block border border-green-200 shadow-lg"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-lg">
                📍 Isiolo Town, Isiolo County, Kenya
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 🏪 Our Story Section */}
      <section ref={storyRef} className="py-20 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-emerald-100 overflow-hidden">
                <img
                  src={shopImg}
                  alt="Novamart Shop in Isiolo"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 bg-gradient-to-r from-emerald-50 to-green-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-semibold">Open Now • 7AM - 9PM</span>
                  </div>
                  <p className="text-gray-600 font-medium">
                    Visit our physical store in Isiolo Town Center
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={storyInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-100 shadow-xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={storyInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mb-8"
                >
                  <div className="inline-flex items-center space-x-4 mb-6">
                    <div className="w-3 h-12 bg-gradient-to-b from-emerald-500 to-green-500 rounded-full"></div>
                    <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600">
                      OUR STORY
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={storyInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="text-lg text-gray-700 leading-relaxed"
                    >
                      <strong className="text-emerald-600">Novamart</strong> started as a small kiosk in Isiolo Town back in 2018. Our founder, <strong>John Kamunya Thiriku</strong>, had a simple vision: to provide quality goods at fair prices to the local community.
                    </motion.p>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={storyInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-lg text-gray-700 leading-relaxed"
                    >
                      What began as a humble family business has grown into one of Isiolo's most trusted shops, known for our reliable service and commitment to the community that made us who we are today.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={storyInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="flex flex-wrap gap-3 pt-6"
                    >
                      {["Family-Owned", "Community-First", "Fair Prices", "Quality Guaranteed"].map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ scale: 0 }}
                          animate={storyInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 1.2 + index * 0.2 }}
                          className="bg-emerald-100 text-emerald-700 border border-emerald-300 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 👤 Founder Section */}
      <section ref={founderRef} className="py-20 px-6 md:px-12 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
            >
              <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-green-100 shadow-xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={founderInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <div className="inline-block bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                    FOUNDER & OWNER
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-4">
                    John Kamunya Thiriku
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mb-6"></div>
                </motion.div>

                <div className="space-y-6">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={founderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    John started Novamart with nothing but a small savings and a big dream. Born and raised in Isiolo County, he understood the needs of his community and was determined to create a business that would serve them with honesty and integrity.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={founderInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-lg text-gray-700 leading-relaxed"
                  >
                    Through hard work and dedication, John has built Novamart into a beloved local institution. He's often at the shop, greeting customers by name and ensuring every person who walks through our doors feels like family.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={founderInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="pt-6 border-t border-emerald-100"
                  >
                    <div className="flex flex-wrap gap-4">
                      {["Local Entrepreneur", "Community Leader", "Family Man", "Isiolo Native"].map((tag, index) => (
                        <motion.span
                          key={tag}
                          initial={{ scale: 0 }}
                          animate={founderInView ? { scale: 1 } : {}}
                          transition={{ duration: 0.4, delay: 1.1 + index * 0.2 }}
                          className="bg-green-100 text-green-700 border border-green-300 px-4 py-2 rounded-full text-sm font-semibold"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={founderInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
                <img
                  src={founderImg}
                  alt="John Kamunya Thiriku - Founder of Novamart"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">John Kamunya Thiriku</h3>
                  <p className="text-green-600 font-medium">Founder & Owner</p>
                  <p className="text-gray-600 text-sm mt-2">Serving Isiolo Community since 2018</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🎯 What Makes Us Different */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-6">
              WHY CHOOSE NOVAMART?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Local & Trusted",
                description: "We're your neighbors in Isiolo. Family-owned and community-focused since day one."
              },
              {
                icon: "💰",
                title: "Fair Prices",
                description: "Quality products at prices that respect your hard-earned money."
              },
              {
                icon: "⭐",
                title: "Quality Guarantee",
                description: "We stand behind every product we sell with our quality promise."
              },
              {
                icon: "🤝",
                title: "Friendly Service",
                description: "We know our customers by name and treat everyone like family."
              },
              {
                icon: "🚚",
                title: "Local Delivery",
                description: "Free delivery within Isiolo Town for orders over KSh 2,000."
              },
              {
                icon: "📞",
                title: "Easy Ordering",
                description: "Call, WhatsApp, or visit us in person. We make shopping simple."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-black text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 Our Mission */}
      <section ref={missionRef} className="py-20 px-6 md:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={missionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-3xl p-12 text-white shadow-2xl">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-black mb-8"
              >
                OUR PROMISE TO ISIOLO
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl leading-relaxed font-light"
              >
                To be <span className="font-bold">Isiolo's most trusted shop</span>, where quality meets affordability, and every customer feels like family. We're committed to growing with our community and serving you with the honesty and care you deserve.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={missionInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-12 flex justify-center gap-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-black">5+</div>
                  <div className="text-emerald-100">Years Serving</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black">1000+</div>
                  <div className="text-emerald-100">Happy Families</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black">24/7</div>
                  <div className="text-emerald-100">Customer Care</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📍 Visit Us Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-6">
              COME VISIT US
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              We'd love to welcome you to our shop in Isiolo Town
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-3xl p-8 border border-emerald-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">📍 Our Location</h3>
                  <p className="text-gray-700 text-lg mb-2">Novamart Isiolo</p>
                  <p className="text-gray-600 mb-4">Isiolo Town Center</p>
                  <p className="text-gray-600 mb-2">Next to Isiolo Market</p>
                  <p className="text-gray-600">Isiolo County, Kenya</p>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">🕒 Opening Hours</h3>
                  <p className="text-gray-700 mb-2">Monday - Saturday: 7:00 AM - 9:00 PM</p>
                  <p className="text-gray-700 mb-4">Sunday: 8:00 AM - 8:00 PM</p>
                  <p className="text-green-600 font-semibold">Open 363 days a year!</p>
                </div>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8 inline-block bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
              >
                📞 Call Us: +254 7XX XXX XXX
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;