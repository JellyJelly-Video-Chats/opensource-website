'use client';

import { motion } from 'framer-motion';
import { Smartphone, Github, Mail, ArrowRight, Code, Users, Shield, TrendingUp, Coins, Rocket, ArrowRightCircle, ArrowDownRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DotBackground from '@/components/DotBackground';
import MouseFollower from '@/components/MouseFollower';
import IOS_Banner from '@/assets/images/ios_banner.jpeg';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative font-[Satoshi]">
      <DotBackground />
      <MouseFollower />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.h1 
                className="text-7xl font-bold mb-6 text-white relative"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                JellyJelly
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                The fastest way to post clips from a video chat.
                Join the revolution in authentic social networking.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/JellyJelly-Video-Chats/jelly-android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 cursor-pointer z-10"
                >
                  <Github size={20} />
                  Contribute to Android App
                  <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:support@jellyjelly.dev"
                  className="px-8 py-3 border border-white/20 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer z-10"
                >
                  <Mail size={20} />
                  Contact Us
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden"
                animate={{
                  background: [
                    "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                    "linear-gradient(to bottom right, rgba(255,255,255,0.15), rgba(255,255,255,0.1))",
                    "linear-gradient(to bottom right, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <div className="relative z-10 p-8">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="p-4 rounded-xl bg-black/50 backdrop-blur-lg border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Coins className="w-6 h-6 text-white" />
                      <p className="text-lg font-semibold">JMJ Coin</p>
                    </div>
                    <p className="text-2xl font-bold">$10M+</p>
                    <p className="text-gray-400 text-sm">Market Cap</p>
                  </motion.div>
                  <motion.div
                    className="p-4 rounded-xl bg-black/50 backdrop-blur-lg border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-6 h-6 text-white" />
                      <p className="text-lg font-semibold">Community</p>
                    </div>
                    <p className="text-2xl font-bold">Growing</p>
                    <p className="text-gray-400 text-sm">Active Members</p>
                  </motion.div>
                  <motion.div
                    className="p-4 rounded-xl bg-black/50 backdrop-blur-lg border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="w-6 h-6 text-white" />
                      <p className="text-lg font-semibold">Open Source</p>
                    </div>
                    <p className="text-2xl font-bold">New</p>
                    <p className="text-gray-400 text-sm">Initiative</p>
                  </motion.div>
                  <motion.div
                    className="p-4 rounded-xl bg-black/50 backdrop-blur-lg border border-white/10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Rocket className="w-6 h-6 text-white" />
                      <p className="text-lg font-semibold">Development</p>
                    </div>
                    <p className="text-2xl font-bold">24/7</p>
                    <p className="text-gray-400 text-sm">Active</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contribution Flow Section */}
      <section id="contribution-flow" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            How to Contribute & Earn
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <motion.div
              className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Code className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-xl font-semibold mb-4">Contribute</h3>
              <p className="text-gray-400">Join our open-source community and help build the future of social media.</p>
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Rocket className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-xl font-semibold mb-4">Post</h3>
              <p className="text-gray-400">Share your contributions and get feedback from the community.</p>
            </motion.div>
            <motion.div
              className="p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Coins className="w-12 h-12 mb-6 text-white" />
              <h3 className="text-xl font-semibold mb-4">Earn</h3>
              <p className="text-gray-400">Receive tips and rewards from the community for your contributions.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects" className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.a
              href="https://github.com/JellyJelly-Video-Chats/jelly-android"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Smartphone className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">JellyJelly Android App</h3>
              <p className="text-gray-400 mb-4">The main mobile application for JellyJelly social media platform.</p>
              <div className="flex items-center text-white">
                View Project <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.a>
            <motion.a
              href="https://github.com/JellyJelly-Video-Chats/opensource-website"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Code className="w-12 h-12 mb-6 text-white group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-4">JellyJellyDev Website</h3>
              <p className="text-gray-400 mb-4">The official website for JellyJelly platform and community.</p>
              <div className="flex items-center text-white">
                View Project <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.a>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://jellyjelly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Want to see more? Make a Jelly and share it!
              <ArrowDownRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
