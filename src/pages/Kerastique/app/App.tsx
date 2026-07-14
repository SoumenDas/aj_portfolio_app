import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ChevronDown, Users, Map, GitBranch, Layout, Sparkles, Target, Lightbulb,
  Award, ArrowRight, MessageSquare, TrendingUp, Zap, Shield, Globe,
  DollarSign, Clock, CheckCircle2, AlertCircle
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';


const login1Image = '/assets/kerastique/imports_Login1.png';;
const login2Image = '/assets/kerastique/imports_Login2.png';;
const login3Image = '/assets/kerastique/imports_Login3.png';;
const addressBarImage = '/assets/kerastique/imports_Address_Bar.png';;
const homePageImage = '/assets/kerastique/imports_Home.png';;
const collectionsImage = '/assets/kerastique/imports_Collections.png';;
const productDetailImage = '/assets/kerastique/imports_Product_Detail.png';;
const demosImage = '/assets/kerastique/imports_Demos-1.png';;
const contactUsImage = '/assets/kerastique/imports_Contact_Us.png';;
import Group43546 from '../imports/Group43546/Group43546';
import Group43547 from '../imports/Group43547/Group43547';
import Group43548 from '../imports/Group43548/Group43548';
import Group43552 from '../imports/Group43552/Group43552';
import Group43550 from '../imports/Group43550/Group43550';
import Frame44214 from '../imports/Frame44214/Frame44214';
import { NavigationBar, NAV_ITEMS } from './components/NavigationBar';

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [activeHomeTab, setActiveHomeTab] = useState(0);
  const [loginScreen, setLoginScreen] = useState<'default' | 'login' | 'signup'>('default');
  const loginTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loginScreen === 'login' || loginScreen === 'signup') {
      if (loginTimerRef.current) clearTimeout(loginTimerRef.current);
      loginTimerRef.current = setTimeout(() => setLoginScreen('default'), 3000);
    }
    return () => {
      if (loginTimerRef.current) clearTimeout(loginTimerRef.current);
    };
  }, [loginScreen]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / (windowHeight * 0.9));
      setActiveSection(section);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight * 0.9,
      behavior: 'smooth'
    });
  };

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#4E342E] via-[#A87C51] to-[#4E342E] origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {['Hero', 'Stakeholders', 'Challenge', 'Personas', 'Flow', 'Journey', 'IA', 'Designs', 'Impact'].map((label, index) => (
          <div key={index} className="group flex items-center gap-3">
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: activeSection === index ? 1 : 0, x: 0 }}
              className="text-white/80 text-sm font-medium bg-[#1A110D]/80 backdrop-blur-sm px-3 py-1 rounded-lg"
            >
              {label}
            </motion.span>
            <button
              onClick={() => scrollToSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === index
                  ? 'bg-gradient-to-r from-[#4E342E] to-[#A87C51] scale-150 shadow-lg shadow-[#A87C51]/50'
                  : 'bg-white/30 hover:bg-white/50 hover:scale-125'
              }`}
              aria-label={`Go to ${label}`}
            />
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(74, 64, 115, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(125, 121, 121, 0.15) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(74, 64, 115, 0.15) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative z-10 px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="text-center"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#4E342E]/20 to-[#A87C51]/20 border border-white/10 text-white px-6 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-xl"
            >
              <Sparkles className="w-4 h-4" />
              AI-DRIVEN UX CASE STUDY
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-8xl font-black mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-[#E2C09F] to-white bg-clip-text text-transparent">
                Hair Care
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#C29562] via-[#E2C09F] to-[#C29562] bg-clip-text text-transparent">
                Revolution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-2xl text-white/60 mb-4 max-w-4xl mx-auto leading-relaxed"
            >
              Transforming product discovery with <span className="text-[#D4A373] font-semibold">personalized AI recommendations</span> for salon artists and beauty enthusiasts
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-white/40 mb-12"
            >
              KERASTIQUE - Premium Hair Care Brand | E-commerce Platform
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {[
                { value: '8 weeks', label: 'Project Duration', icon: '⏱️' },
                { value: '2 Personas', label: 'User Research', icon: '👥' },
                { value: '5 Stages', label: 'User Journey', icon: '🗺️' },
                { value: 'Lead UX', label: 'My Role', icon: '✨' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group cursor-pointer"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-white/30" />
        </motion.div>
      </section>

      {/* Stakeholder Insights Section - NEW! */}
      <section className="min-h-screen py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,64,115,0.15),transparent_70%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3E2723]/10 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <MessageSquare className="w-6 h-6 text-[#D4A373]" />
              <span className="font-semibold text-white">DISCOVERY PHASE</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">Stakeholder Insights</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Understanding business goals, user needs, and success metrics from key decision makers
            </p>
          </motion.div>

          {/* Business Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A87C51]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#D4A373]/20 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-[#D4A373]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Business Vision</h3>
                    <p className="text-[#E2C09F]/60">Strategic objectives and market positioning</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <Target className="w-5 h-5 text-[#D4A373] mt-1" />
                        <div>
                          <h4 className="text-white font-semibold mb-2">Primary Goal</h4>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Launch premium hair care brand (KERASTIQUE) with exceptionally high quality,
                            technology & research-driven formulations to compete with existing local and
                            overseas brands PAN India
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <Zap className="w-5 h-5 text-[#E2C09F] mt-1" />
                        <div>
                          <h4 className="text-white font-semibold mb-2">Key Differentiator</h4>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Path-breaking technology in hair care addressing current shortcomings of
                            existing products, providing potent hair rejuvenation & long-lasting
                            fortifying effects
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <Globe className="w-5 h-5 text-[#A87C51] mt-1" />
                        <div>
                          <h4 className="text-white font-semibold mb-2">Market Opportunity</h4>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Expansion to existing business of personal care and cosmetics category,
                            launching specialized hair care range for specific treatments and hair
                            care issues
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                      <div className="flex items-start gap-3 mb-3">
                        <Award className="w-5 h-5 text-[#C29562] mt-1" />
                        <div>
                          <h4 className="text-white font-semibold mb-2">Success Definition</h4>
                          <p className="text-white/70 text-sm leading-relaxed">
                            Register as very efficient, effective, premium, user-friendly brand with
                            global presence, focusing on product attributes, customer satisfaction,
                            and end-to-end effectiveness
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Insights from Stakeholders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A87C51]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#C29562]/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#C29562]" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Target Audience</h3>
                    <p className="text-[#E2C09F]/60">Who we're designing for and why they care</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="text-3xl mb-4">👥</div>
                    <h4 className="text-white font-semibold mb-3">Primary Users</h4>
                    <p className="text-white/70 text-sm mb-4">
                      Top, medium, and lower-to-medium category of female clientele
                    </p>
                    <div className="bg-[#C29562]/10 rounded-lg p-3">
                      <p className="text-[#E2C09F] text-xs font-semibold">Age Range: 26-55</p>
                      <p className="text-[#E2C09F]/70 text-xs">Sweet Spot: 28-45 years</p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="text-3xl mb-4">💡</div>
                    <h4 className="text-white font-semibold mb-3">User Motivation</h4>
                    <ul className="space-y-2 text-white/70 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A87C51] mt-0.5 flex-shrink-0" />
                        <span>Seeking safer, cleaner hair care solutions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A87C51] mt-0.5 flex-shrink-0" />
                        <span>Need effective therapy at affordable prices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#A87C51] mt-0.5 flex-shrink-0" />
                        <span>Want easily accessible products</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div className="text-3xl mb-4">🎯</div>
                    <h4 className="text-white font-semibold mb-3">User Behavior</h4>
                    <p className="text-white/70 text-sm mb-4">
                      <strong className="text-white">High-tier users:</strong> Seek top-notch brands
                      with market presence, celebrity endorsements, status symbol
                    </p>
                    <p className="text-white/70 text-sm">
                      <strong className="text-white">Medium-tier users:</strong> Eager to try new
                      brands based on attributes, presence, and overall experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Market Gap Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-3xl p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-[#C29562]/20 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="w-8 h-8 text-[#C29562]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">Market Gap</h3>
                  <p className="text-[#E2C09F]/60">Current market shortcomings and opportunities</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#8B5A2B] rounded-full" />
                    Current Problems
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mt-2 flex-shrink-0" />
                      <span>Very few options for safer, efficient, cleaner, natural hair care therapies</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mt-2 flex-shrink-0" />
                      <span>Limited price-conscious segment of quality products</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[#8B5A2B] rounded-full mt-2 flex-shrink-0" />
                      <span>Growing working class of women in medium-to-high income group with unmet grooming needs</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#A87C51] rounded-full" />
                    Our Solution
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[#A87C51] rounded-full mt-2 flex-shrink-0" />
                      <span>Technology and research-driven formulations addressing specific hair care needs</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[#A87C51] rounded-full mt-2 flex-shrink-0" />
                      <span>Premium quality at affordable and accessible price points</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 bg-[#A87C51] rounded-full mt-2 flex-shrink-0" />
                      <span>Major trend setter in safety, efficiency, cleanliness, and natural ingredients</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* UX Requirements & Project Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* UX Deliverables */}
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#D4A373]/20 rounded-xl flex items-center justify-center">
                  <Layout className="w-6 h-6 text-[#D4A373]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">UX Requirements</h3>
                  <p className="text-[#E2C09F]/60 text-sm">Design deliverables</p>
                </div>
              </div>

              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4A373] mt-0.5 flex-shrink-0" />
                  <span>Highlight brand in all aspects with high professional visual experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4A373] mt-0.5 flex-shrink-0" />
                  <span>Scientific and technical data presented elegantly and efficiently</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4A373] mt-0.5 flex-shrink-0" />
                  <span>Interactive options for exploring brand types and variants</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4A373] mt-0.5 flex-shrink-0" />
                  <span>AI-based consultancy platform for next-level user experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#D4A373] mt-0.5 flex-shrink-0" />
                  <span>Keep customers attached through engaging, interactive web experience</span>
                </li>
              </ul>
            </div>

            {/* Project Details */}
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#A87C51]/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#A87C51]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Project Details</h3>
                  <p className="text-[#D4A373]/60 text-sm">Timeline & stakeholders</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Decision Maker</span>
                  </div>
                  <p className="text-white font-semibold">Kedar Gadilkar</p>
                  <p className="text-white/50 text-xs">Co Director, Research Director, Production & Plant Head</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Timeline</span>
                  </div>
                  <p className="text-white font-semibold">February 2024 (End)</p>
                  <p className="text-white/50 text-xs">8-week intensive design sprint</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/60 text-sm">Brand Assets</span>
                  </div>
                  <p className="text-white font-semibold">In Process</p>
                  <p className="text-white/50 text-xs">Guidelines, design system, stylesheet coordination</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Takeaways */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Stakeholder Takeaways</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: '🎯', label: 'Premium positioning in competitive market' },
                { icon: '👥', label: 'Target working women 26-55 years' },
                { icon: '🔬', label: 'Technology & research-driven approach' },
                { icon: '🌟', label: 'AI consultancy platform requirement' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 text-center border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-white/80 text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="min-h-screen flex items-center py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/10 to-[#A87C51]/10" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <Lightbulb className="w-6 h-6 text-[#E2C09F]" />
              <span className="font-semibold text-white">DEFINE PHASE</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">The Challenge</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#A87C51] to-transparent mx-auto" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A87C51]/10 to-[#D4A373]/10 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 p-10 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#8B5A2B]/20 rounded-2xl flex items-center justify-center text-4xl">
                    ⚠️
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Pain Points</h3>
                    <p className="text-[#C29562]/60">What users struggled with</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    'Wasting hours in Mumbai traffic to reach wholesale shops',
                    'Overwhelming product choices without proper guidance',
                    'Lack of educational resources about product usage',
                    'No personalized recommendations for different hair types',
                    'Difficulty tracking loyalty points and rewards',
                  ].map((pain, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start group"
                    >
                      <div className="w-6 h-6 rounded-full bg-[#8B5A2B]/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-[#8B5A2B]/40 transition-colors">
                        <div className="w-2 h-2 bg-[#8B5A2B] rounded-full" />
                      </div>
                      <p className="text-white/80 text-lg">{pain}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A87C51]/10 to-[#D4A373]/10 rounded-3xl blur-xl" />
              <div className="relative bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 p-10 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-[#A87C51]/20 rounded-2xl flex items-center justify-center text-4xl">
                    💡
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">Solutions</h3>
                    <p className="text-[#D4A373]/60">How we solved it</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { text: 'AI-powered hair diagnosis survey', icon: '🤖' },
                    { text: 'Smart product recommendations engine', icon: '🎯' },
                    { text: 'Video tutorials and educational content', icon: '📚' },
                    { text: 'Personalized product matching system', icon: '✨' },
                    { text: 'Gamified loyalty rewards program', icon: '🎁' },
                  ].map((solution, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4 items-start group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-xl bg-[#A87C51]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-xl">{solution.icon}</span>
                      </div>
                      <p className="text-white/80 text-lg pt-1">{solution.text}</p>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mt-8 bg-gradient-to-r from-[#3E2723]/40 to-[#1A110D]/40 border border-[#A87C51]/30 p-4 rounded-2xl"
                >
                  <p className="text-[#D4A373] font-semibold text-center">
                    Result: 40% reduction in decision time ⚡
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="min-h-screen py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,64,115,0.1),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <Users className="w-6 h-6 text-[#D4A373]" />
              <span className="font-semibold text-white">USER RESEARCH</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">Meet Our Users</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Deep dive into two distinct personas representing our primary user segments
            </p>
          </motion.div>

          {/* Persona Overview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {/* Persona 1 Quick Stats */}
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#C29562]/20 rounded-full flex items-center justify-center text-3xl">
                  💼
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Poonam Bhawar</h3>
                  <p className="text-[#E2C09F]/80">Salon Artist • Age 31 • Navi Mumbai</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-[#C29562] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-semibold">Primary Goal</p>
                    <p className="text-white/60">Find quality products quickly without traveling to wholesale shops</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#C29562] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-semibold">Main Frustration</p>
                    <p className="text-white/60">Time spent in Mumbai traffic & lack of product research resources</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#E2C09F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-semibold">Personality</p>
                    <p className="text-white/60">Passionate, Dedicated, Detail-oriented, Organized, Empathetic</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Persona 2 Quick Stats */}
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-[#D4A373]/20 rounded-full flex items-center justify-center text-3xl">
                  💻
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Nikita Patil</h3>
                  <p className="text-[#E2C09F]/80">IT Professional • Age 28 • Navi Mumbai</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <Target className="w-4 h-4 text-[#D4A373] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-semibold">Primary Goal</p>
                    <p className="text-white/60">Maintain healthy hair with quality products without time investment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#C29562] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-semibold">Main Frustration</p>
                    <p className="text-white/60">Busy schedule, public transport reliance, limited product awareness</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-[#E2C09F] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/90 font-semibold">Personality</p>
                    <p className="text-white/60">Passionate, Creative, Dedicated, Health-conscious, Proactive</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Full Persona Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Persona 1 - Full Detail */}
            <motion.div
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#A87C51]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#A87C51]/20">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#3E2723]/40 to-transparent w-64 h-64 rounded-full blur-3xl" />
                <div className="relative">
                  {/* Header */}
                  <div className="p-6 bg-gradient-to-r from-[#4E342E]/50 to-transparent">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-[#C29562] rounded-full animate-pulse" />
                      <span className="text-[#E2C09F] text-sm font-semibold">SALON ARTIST</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Poonam Bhawar</h3>
                  </div>

                  {/* Persona Visual */}
                  <div className="p-4">
                    <div className="bg-[#f7f7f7] rounded-2xl overflow-x-auto overflow-y-hidden shadow-2xl">
                      <div className="transform scale-[0.95] origin-center">
                        <Group43546 />
                      </div>
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div className="p-6 space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h4 className="text-white font-semibold mb-2 text-sm">Roles & Responsibilities</h4>
                      <ul className="space-y-1 text-white/70 text-xs">
                        <li>• Provides hair treatments (spa, smoothening, keratin)</li>
                        <li>• Freelance bridal/groom makeup for events</li>
                        <li>• Conducts training for students</li>
                        <li>• Manages household responsibilities</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h4 className="text-white font-semibold mb-2 text-sm">Expectations</h4>
                      <ul className="space-y-1 text-white/70 text-xs">
                        <li>• Study material for products</li>
                        <li>• Good results & proven effectiveness</li>
                        <li>• Time-saving buying process</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#3E2723]/90 backdrop-blur-xl rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold text-center">Business User - B2B Focus</p>
                  <p className="text-white/70 text-sm text-center">Needs efficiency & product education</p>
                </div>
              </div>
            </motion.div>

            {/* Persona 2 - Full Detail */}
            <motion.div
              initial={{ opacity: 0, rotateY: 15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group perspective-1000"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#D4A373]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4A373]/20">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-[#D4A373]/20 to-transparent w-64 h-64 rounded-full blur-3xl" />
                <div className="relative">
                  {/* Header */}
                  <div className="p-6 bg-gradient-to-r from-[#D4A373]/30 to-transparent">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-[#D4A373] rounded-full animate-pulse" />
                      <span className="text-[#E2C09F] text-sm font-semibold">DIRECT CUSTOMER</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Nikita Patil</h3>
                  </div>

                  {/* Persona Visual */}
                  <div className="p-4">
                    <div className="bg-[#f7f7f7] rounded-2xl overflow-x-auto overflow-y-hidden shadow-2xl">
                      <div className="transform scale-[0.95] origin-center">
                        <Group43547 />
                      </div>
                    </div>
                  </div>

                  {/* Key Insights */}
                  <div className="p-6 space-y-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h4 className="text-white font-semibold mb-2 text-sm">Roles & Responsibilities</h4>
                      <ul className="space-y-1 text-white/70 text-xs">
                        <li>• Software engineer at IT MNC</li>
                        <li>• Balances work and healthy lifestyle</li>
                        <li>• Visits beauty parlor weekly/bi-weekly</li>
                        <li>• Manages self-care & household work</li>
                      </ul>
                    </div>

                    <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                      <h4 className="text-white font-semibold mb-2 text-sm">Expectations</h4>
                      <ul className="space-y-1 text-white/70 text-xs">
                        <li>• Good & natural self-care products</li>
                        <li>• Less time/effort on buying activities</li>
                        <li>• Learn how to use products at home</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-[#D4A373]/90 backdrop-blur-xl rounded-2xl p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-semibold text-center">Consumer User - B2C Focus</p>
                  <p className="text-white/70 text-sm text-center">Needs convenience & education</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Persona Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Common Pain Points & Needs</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-[#8B5A2B]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#8B5A2B]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Time Constraints</h4>
                <p className="text-white/60 text-sm">Both struggle with finding time to research and buy products</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-[#E2C09F]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-[#E2C09F]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Need Education</h4>
                <p className="text-white/60 text-sm">Both want to learn about products and proper usage</p>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                <div className="w-12 h-12 bg-[#A87C51]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#A87C51]" />
                </div>
                <h4 className="text-white font-semibold mb-2">Quality Matters</h4>
                <p className="text-white/60 text-sm">Both seek effective, natural products with proven results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* User Flow */}
      <section className="min-h-screen py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/10 via-transparent to-[#1A110D]/10" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <GitBranch className="w-6 h-6 text-[#D4A373]" />
              <span className="font-semibold text-white">DESIGN PHASE</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">User Flow</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              From first touch to successful purchase
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-[#A87C51]/30 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#A87C51]/5 to-[#3E2723]/5" />
            <div className="relative p-8">
              <div className="bg-white rounded-2xl overflow-x-auto overflow-y-hidden shadow-2xl">
                <div className="transform scale-[0.95] origin-center">
                  <Group43548 />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-5 gap-4 mt-8"
          >
            {['Login', 'Survey', 'Browse', 'Select', 'Purchase'].map((step, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-10 h-10 bg-gradient-to-br from-[#A87C51]/20 to-[#3E2723]/20 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">
                  {i + 1}
                </div>
                <p className="text-white/80 text-sm font-medium">{step}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Map */}
      <section className="min-h-screen py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#A87C51]/10 via-transparent to-[#3E2723]/10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <Map className="w-6 h-6 text-[#A87C51]" />
              <span className="font-semibold text-white">EXPERIENCE MAPPING</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">Customer Journey Map</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8">
              Mapping emotions, thoughts, actions, and key touchpoints throughout the user experience
            </p>

            {/* Journey Overview Stats */}
            <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { icon: '🎯', value: '5 Stages', label: 'Journey Steps' },
                { icon: '💭', value: 'Emotional', label: 'Analysis' },
                { icon: '✅', value: 'Key Points', label: 'Identified' },
                { icon: '🚀', value: 'Actions', label: 'Mapped' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-lg font-bold text-white">{stat.value}</div>
                  <div className="text-white/50 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Stages Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 grid md:grid-cols-5 gap-4"
          >
            {[
              { step: '1', title: 'Login', emotion: '🤔', color: 'blue' },
              { step: '2', title: 'Survey', emotion: '🤨', color: 'purple' },
              { step: '3', title: 'Choose Product', emotion: '😊', color: 'green' },
              { step: '4', title: 'Cart & Purchase', emotion: '😃', color: 'yellow' },
              { step: '5', title: 'Footer', emotion: '✅', color: 'emerald' },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/20 backdrop-blur-xl border border-[#A87C51]/20 rounded-xl p-4 text-center`}
              >
                <div className="w-10 h-10 bg-white/10 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-white font-bold">{stage.step}</span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{stage.title}</h4>
                <div className="text-3xl">{stage.emotion}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Journey Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden mb-12"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3E2723]/5 to-[#A87C51]/5" />
            <div className="relative p-8">
              <div className="bg-white rounded-2xl overflow-x-auto overflow-y-hidden shadow-2xl">
                <div className="transform scale-[0.95] origin-center">
                  <Group43552 />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Emotional Highs */}
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#A87C51]/20 rounded-xl flex items-center justify-center text-2xl">
                  😃
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Positive Moments</h3>
                  <p className="text-[#D4A373]/60 text-sm">User satisfaction peaks</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white font-semibold mb-2">Product Discovery</p>
                  <p className="text-white/70 text-sm">"Yeah, I hope whatever you're doing should come up with better suitable product for my hairs this makes my life easier"</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white font-semibold mb-2">Multiple Options</p>
                  <p className="text-white/70 text-sm">Users appreciate having multiple sign-in methods and payment options</p>
                </div>
              </div>
            </div>

            {/* Pain Points */}
            <div className="bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#C29562]/20 rounded-xl flex items-center justify-center text-2xl">
                  🤔
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Areas of Concern</h3>
                  <p className="text-[#E2C09F]/60 text-sm">User anxiety moments</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white font-semibold mb-2">Survey Uncertainty</p>
                  <p className="text-white/70 text-sm">"It's Interesting but I hope it will give my suitable product"</p>
                </div>

                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white font-semibold mb-2">Product Relevance</p>
                  <p className="text-white/70 text-sm">"May this products helps me" - Need for reassurance about effectiveness</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Actions Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 bg-gradient-to-r from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Key User Actions Across Journey</h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: 'Login', actions: ['Sign up', 'Social media sign in', 'Multiple methods'] },
                { title: 'Survey', actions: ['Relevant questions', 'Picture references', 'Submit answers'] },
                { title: 'Browse', actions: ['View products', 'Learn details', 'Compare options'] },
                { title: 'Select', actions: ['Add to cart', 'View similar', 'Check offers'] },
                { title: 'Purchase', actions: ['UPI/Card payment', 'Multiple methods', 'Complete order'] },
              ].map((stage, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-white font-semibold mb-3 text-sm">{stage.title}</h4>
                  <ul className="space-y-1">
                    {stage.actions.map((action, j) => (
                      <li key={j} className="text-white/60 text-xs flex items-start gap-2">
                        <CheckCircle2 className="w-3 h-3 text-[#A87C51] mt-0.5 flex-shrink-0" />
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Information Architecture */}
      <section className="min-h-screen py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A110D]/10 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <Layout className="w-6 h-6 text-[#C29562]" />
              <span className="font-semibold text-white">STRUCTURE & ORGANIZATION</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">Information Architecture</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Complete site structure and content organization
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden mb-12"
          >
            <div className="p-8">
              <div className="bg-white rounded-2xl overflow-x-auto overflow-y-hidden shadow-2xl">
                <div className="transform scale-[0.9] origin-center">
                  <Group43550 />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#C29562]/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Home Page</h3>
                  <p className="text-white/50 text-sm">Landing experience</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#C29562]">•</span>
                  <span>Brand story</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C29562]">•</span>
                  <span>Hero banners</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C29562]">•</span>
                  <span>Product videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C29562]">•</span>
                  <span>Shop by hair type</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#C29562]">•</span>
                  <span>Loyalty points info</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#D4A373]/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🛍️</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Product Pages</h3>
                  <p className="text-white/50 text-sm">Discovery & details</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A373]">•</span>
                  <span>Product listings with filters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A373]">•</span>
                  <span>Secondary category filters</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A373]">•</span>
                  <span>Detailed descriptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A373]">•</span>
                  <span>Related products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#D4A373]">•</span>
                  <span>Reviews & ratings</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#A87C51]/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">User Profile</h3>
                  <p className="text-white/50 text-sm">Account management</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[#A87C51]">•</span>
                  <span>Order history</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A87C51]">•</span>
                  <span>Shopping cart</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A87C51]">•</span>
                  <span>Wishlist items</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A87C51]">•</span>
                  <span>Account settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#A87C51]">•</span>
                  <span>Multiple payment options</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-[#D4A373]/20 rounded-2xl flex items-center justify-center text-4xl">
                🎁
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Loyalty Rewards Program</h3>
                <p className="text-[#E2C09F]/60">Gamification & engagement strategy</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">Earn Points</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Shop online purchases</li>
                  <li>• Write product reviews</li>
                  <li>• Complete hair quiz</li>
                  <li>• SMS enrollment</li>
                  <li>• Birthday rewards</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">Redeem Rewards</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Discount coupons</li>
                  <li>• Free products</li>
                  <li>• Anniversary gifts</li>
                  <li>• VIP membership perks</li>
                  <li>• Exclusive offers</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="text-white font-semibold mb-3">Auto Benefits</h4>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>• Account creation bonus</li>
                  <li>• Refillable product points</li>
                  <li>• Automatic point tracking</li>
                  <li>• Tier upgrades</li>
                  <li>• Special events access</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
                <span className="text-2xl">📚</span>
                Educational Content
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C29562]" />
                  <span>Product demonstration videos</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C29562]" />
                  <span>Hair care tutorials</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C29562]" />
                  <span>Theory and USP explanations</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#C29562]" />
                  <span>Brand inspiration stories</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-3">
                <span className="text-2xl">💬</span>
                Customer Support
              </h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#D4A373]" />
                  <span>Multi-channel support (Phone, Email)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#D4A373]" />
                  <span>AI-powered chatbot assistance</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#D4A373]" />
                  <span>Branch locations & addresses</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-1 text-[#D4A373]" />
                  <span>24/7 customer service access</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/40 backdrop-blur-xl border border-[#A87C51]/20 rounded-3xl p-8 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(99,102,241,0.1),transparent_70%)]" />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Complete Content Architecture</h3>
                <p className="text-indigo-300/70">Detailed breakdown of all platform sections</p>
              </div>

              <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-sm">
                <div className="relative overflow-x-auto">
                  <div className="transform scale-90 origin-top">
                    <Frame44214 />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mt-8">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🎨</div>
                  <h4 className="text-white font-semibold text-sm mb-1">About Product</h4>
                  <p className="text-white/60 text-xs">Tagline graphics, USP, Theory, Brand inspiration</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">⭐</div>
                  <h4 className="text-white font-semibold text-sm mb-1">Reviews Section</h4>
                  <p className="text-white/60 text-xs">Product reviews, testimonials, brand feedback</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">🔍</div>
                  <h4 className="text-white font-semibold text-sm mb-1">Search & Filter</h4>
                  <p className="text-white/60 text-xs">Product lists, filters, secondary filters, related items</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="text-2xl mb-2">📋</div>
                  <h4 className="text-white font-semibold text-sm mb-1">Product Details</h4>
                  <p className="text-white/60 text-xs">Full descriptions, specifications, usage guides</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Designs - NEW SECTION */}
      <section className="min-h-screen py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/10 via-[#1A110D]/10 to-[#A87C51]/10" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <Layout className="w-6 h-6 text-indigo-400" />
              <span className="font-semibold text-white">FINAL DELIVERABLES</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">Design Showcase</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              High-fidelity screens designed for the KERASTIQUE platform
            </p>
          </motion.div>

          {/* Design Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-4 mb-16"
          >
            {[
              { icon: '🔐', label: 'Authentication', count: '1 Screen' },
              { icon: '🏠', label: 'Home & Browse', count: '3 Screens' },
              { icon: '📦', label: 'Product Details', count: '2 Screens' },
              { icon: '📞', label: 'Contact & Support', count: '1 Screen' },
            ].map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-white font-semibold mb-1">{category.label}</h3>
                <p className="text-white/50 text-sm">{category.count}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* iMac Mockup - Home */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Homepage & Navigation</h3>
              <p className="text-white/60">Engaging landing experience with product discovery</p>
            </div>

            <div className="relative group">
              {/* iMac Frame */}
              <div className="relative bg-gradient-to-b from-[#3E2723] to-[#1A110D] rounded-t-3xl shadow-2xl overflow-hidden border-8 border-[#1A110D]">
                {/* Screen Bezel */}
                <div className="bg-black rounded-t-2xl p-6">
                  {/* Actual Screen Content - Home Page Image */}
                  <div className="bg-black rounded-lg overflow-y-auto overflow-x-hidden shadow-inner aspect-[16/10] relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <div className="w-full z-20 sticky top-0 flex flex-col">
                      <ImageWithFallback src={addressBarImage} alt="Browser Address Bar" className="w-full h-auto z-10 relative" />
                      <NavigationBar onNavClick={setActiveHomeTab} activeIndex={activeHomeTab} />
                    </div>
                    <div className="w-full h-auto min-h-full flex flex-col relative z-0">
                      {activeHomeTab === 0 ? (
                        <ImageWithFallback src={homePageImage} alt="Home Page Mockup" className="w-full h-auto" />
                      ) : activeHomeTab === 1 ? (
                        <ImageWithFallback src={collectionsImage} alt="Collections Mockup" className="w-full h-auto" />
                      ) : activeHomeTab === 2 ? (
                        <ImageWithFallback src={demosImage} alt="Demos Mockup" className="w-full h-auto" />
                      ) : activeHomeTab === 3 ? (
                        <ImageWithFallback src={contactUsImage} alt="Contact Us Mockup" className="w-full h-auto" />
                      ) : (
                        <div className="flex-1 flex items-center justify-center min-h-[400px] p-8">
                          <div className="w-full h-full border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <p className="text-white/50 font-medium text-lg">
                              Placeholder for {NAV_ITEMS[activeHomeTab]?.name || `Page ${activeHomeTab + 1}`} Image
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Webcam */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-600 rounded-full z-10" />
              </div>

              {/* iMac Stand */}
              <div className="relative h-20 flex items-end justify-center">
                <div className="w-64 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
                <div className="absolute bottom-0 w-80 h-10 bg-gradient-to-b from-[#3E2723] to-[#1A110D] rounded-b-3xl shadow-xl" />
              </div>

              {/* Glow Effect Removed */}
            </div>
          </motion.div>

          {/* Grid of Screens */}
          <div className="space-y-24">
            {/* Home Pages */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Authentication & Discovery</h3>
                <p className="text-white/60">Seamless login and product exploration</p>
              </div>

              <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
                {/* Login Screen */}
                <div className="relative group pb-8">
                  <div className="relative bg-gradient-to-b from-[#3E2723] to-[#1A110D] rounded-2xl shadow-2xl overflow-hidden border-6 border-[#1A110D] p-4">
                    <div className="bg-black rounded-xl overflow-hidden aspect-[16/10] relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                      <div className="w-full z-20 sticky top-0 flex flex-col">
                        <ImageWithFallback src={addressBarImage} alt="Browser Address Bar" className="w-full h-auto z-10 relative" />
                      </div>
                      <div className="w-full h-auto min-h-full flex flex-col relative z-0">
                        <div className="relative w-full">
                          <ImageWithFallback 
                            src={loginScreen === 'login' ? login3Image : loginScreen === 'signup' ? login2Image : login1Image} 
                            alt="Login Screen" 
                            className="w-full h-auto block" 
                          />
                          {loginScreen === 'default' && (
                            <>
                              <button
                                type="button"
                                onClick={() => setLoginScreen('login')}
                                className="absolute left-[65.2%] top-[45.2%] z-10 h-[4.1%] w-[5.8%] cursor-pointer opacity-0 outline-none"
                                aria-label="Open Login screen"
                                title="Open Login"
                              />
                              <button
                                type="button"
                                onClick={() => setLoginScreen('signup')}
                                className="absolute left-[73.5%] top-[45.2%] z-10 h-[4.1%] w-[6.7%] cursor-pointer opacity-0 outline-none"
                                aria-label="Open Sign Up screen"
                                title="Open Sign Up"
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 shadow-lg">
                    <p className="text-white text-sm font-semibold">Login Experience</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Product & Demos */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 text-center">
                <h3 className="text-3xl font-bold text-white mb-2">Product Discovery</h3>
                <p className="text-white/60">Detailed product views and educational demos</p>
              </div>

              <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto">
                {/* Product Detail */}
                <div className="relative group pb-8">
                  <div className="relative bg-gradient-to-b from-[#3E2723] to-[#1A110D] rounded-2xl shadow-2xl overflow-hidden border-6 border-[#1A110D] p-4">
                    <div className="bg-[#1A110D] rounded-xl overflow-hidden aspect-[16/10] relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-auto overflow-x-hidden">
                      <div className="w-full z-20 sticky top-0 flex flex-col bg-[#1A110D]">
                        <ImageWithFallback src={addressBarImage} alt="Browser Address Bar" className="w-full h-auto z-10 relative" />
                        <NavigationBar onNavClick={() => {}} activeIndex={1} />
                      </div>
                      <div className="w-full h-auto flex flex-col relative z-0">
                        <ImageWithFallback src={productDetailImage} alt="Product Details" className="w-full h-auto block" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-2 shadow-lg">
                    <p className="text-white text-sm font-semibold">Product Details</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Design System Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-purple-900/20 to-gray-500/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Design System Components</h3>
            <div className="grid md:grid-cols-5 gap-6">
              {[
                { icon: '🎨', label: 'Color Palette', value: 'Purple & Gold' },
                { icon: '✍️', label: 'Typography', value: 'Montserrat, Roboto' },
                { icon: '📐', label: 'Grid System', value: '12-Column Layout' },
                { icon: '🧩', label: 'Components', value: '50+ Elements' },
                { icon: '📱', label: 'Responsive', value: 'Desktop First' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-6 text-center border border-white/10">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="text-white font-semibold mb-1 text-sm">{item.label}</h4>
                  <p className="text-white/60 text-xs">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact & Outcomes */}
      <section className="min-h-screen flex items-center justify-center py-20 px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,64,115,0.2),transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full mb-6">
              <Award className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold text-white">PROJECT IMPACT</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-4">Key Outcomes</h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Measurable results and design insights
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: 'Personalization',
                description: 'AI-driven hair diagnosis reduces product selection time by 40%',
                color: 'purple',
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: 'Education',
                description: 'Video tutorials and guides empower users with product knowledge',
                color: 'blue',
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: 'Engagement',
                description: 'Gamified loyalty program increases repeat purchases by 35%',
                color: 'amber',
              },
            ].map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`bg-gradient-to-br from-[#3E2723]/40 to-[#1A110D]/20 backdrop-blur-xl border border-[#A87C51]/20 p-8 rounded-2xl cursor-pointer group`}
              >
                <div className={`w-16 h-16 bg-[#A87C51]/20 rounded-2xl flex items-center justify-center text-[#D4A373] mb-4 group-hover:scale-110 transition-transform`}>
                  {outcome.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{outcome.title}</h3>
                <p className="text-white/70 leading-relaxed">{outcome.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#4E342E] via-[#A87C51] to-[#4E342E] p-12 rounded-3xl text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8">Design Deliverables</h3>
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { value: '2', label: 'User Personas', icon: '👥' },
                  { value: '5', label: 'Journey Stages', icon: '🗺️' },
                  { value: '15+', label: 'Screens Designed', icon: '📱' },
                  { value: '3', label: 'Payment Methods', icon: '💳' },
                  { value: '100%', label: 'User Focused', icon: '❤️' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                  >
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-white/70 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <p className="text-white/50 mb-3">Designed & Researched by</p>
              <p className="text-3xl font-black bg-gradient-to-r from-[#4E342E] via-white to-[#D4A373] bg-clip-text text-transparent mb-2">
                Lead UX Designer
              </p>
              <p className="text-white/60">KERASTIQUE Hair Care Platform • 2024</p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <Sparkles className="w-5 h-5 text-purple-400" />
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
