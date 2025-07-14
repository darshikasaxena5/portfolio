import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from './assets/Darshika.jpeg';
import heroImage from './assets/icon1.webp';

import {
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiMysql,
  DiPython,
  DiDocker,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiGit,
  DiDatabase,
  DiLinux,
  DiWindows,
  DiPostgresql,
} from 'react-icons/di';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiTensorflow, 
  SiFlutter, 
  SiKotlin, 
  SiDart, 
  SiFirebase, 
  SiCplusplus, 
  SiAndroidstudio,
  SiFastapi,
  SiPostman,
  SiNumpy,
  SiTableau,
  SiSqlite,
  SiLatex,
} from 'react-icons/si';

import TechnologyCard from './components/TechnologyCard';

const App = () => {
  const technologies = [
    { name: 'Python', icon: <DiPython />, color: 'text-[#3776AB]' },
    { name: 'C++', icon: <SiCplusplus />, color: 'text-[#00599C]' },
    { name: 'C', icon: <span className="font-bold">C</span>, color: 'text-gray-400' },
    { name: 'JavaScript', icon: <DiJavascript1 />, color: 'text-[#F7DF1E]' },
    { name: 'SQL/NoSQL', icon: <DiDatabase />, color: 'text-gray-400' },
    { name: 'HTML', icon: <DiHtml5 />, color: 'text-[#E34F26]' },
    { name: 'CSS', icon: <DiCss3 />, color: 'text-[#1572B6]' },
    { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
    { name: 'React.js', icon: <DiReact />, color: 'text-[#61DAFB]' },
    { name: 'Express.js', icon: <SiExpress />, color: 'text-white' },
    { name: 'Hugging Face', icon: <span className="font-bold">🤗</span>, color: 'text-[#FFD000]' },
    { name: 'NumPy', icon: <SiNumpy />, color: 'text-[#4D77CF]' },
    { name: 'Tableau', icon: <SiTableau />, color: 'text-[#E97627]' },
    { name: 'PostgreSQL', icon: <DiPostgresql />, color: 'text-[#336791]' },
    { name: 'MongoDB', icon: <DiMongodb />, color: 'text-[#47A248]' },
    { name: 'SQLite', icon: <SiSqlite />, color: 'text-[#003B57]' },
    { name: 'Git', icon: <DiGit />, color: 'text-[#F05032]' },
    { name: 'MySQL', icon: <DiMysql />, color: 'text-[#4479A1]' },
  ];

const experience = [
  {
    period: 'Nov 2024 - Feb 2025',
    role: 'Full Stack Developer Intern',
    company: 'Pratinik Infotech Pvt. Limited',
    achievements: [
      'Architected a CNN model for defect detection using VGG16 and ResNet50 for metal casting analysis.',
      'Reduced model convergence time by 15% by integrating SGD and Adam optimizers, accelerating training cycles and boosting overall model performance.',
      'Improved model accuracy by 20% via data augmentation techniques that addressed class imbalance.',
    ],
  },
  {
    period: 'Jan 2024 - June 2024',
    role: 'Software Engineer Intern',
    company: 'Echoes',
    achievements: [
      'Led web development of two Next.js applications which are Reverb (live music social-dating) and Cirkle (digital card POS dashboard) deployed to Vercel and Railway.',
      'For Reverb, built anonymous chat, event-based matching, and push notifications using WebSockets and Firebase Cloud Messaging, supporting over 100+ user flows.',
      'For Cirkle, implemented card issuance UI, balance lookup, top-up workflows, refunds, and a POS-style ordering interface with structured component architecture.',
      'Tech stack: React.js, Next.js, TypeScript, Firebase Auth, Firestore, REST APIs, GitHub.',
    ],
  },
];

  const projects = [
  {
    title: 'Code Review Analyzer',
    tech: 'Python | AST Parsing | Mermaid Diagrams | FastAPI | React.js',
    description: [
      'Developed a full-stack platform to upload and analyze Python code via AST parsing, generating Mermaid diagrams and reducing manual code review time by 40%.',
      'Integrated GPT-4 to enable natural language Q&A over parsed code, improving comprehension and debugging experience.',
      'Engineered the backend with FastAPI and the frontend with React.js, delivering real-time feedback with <1s latency and improving user task completion speed by 30%.',
    ],
    link: 'https://github.com/darshikasaxena5',
  },
  {
    title: 'Inquire PDF',
    tech: 'React.js | FastAPI | Hugging Face | FAISS | SQLite',
    description: [
      'Built a full-stack PDF Q&A platform with React.js, FastAPI, and a fine-tuned T5 LLM, delivering real-time (<1s) responses and handling 1,000+ concurrent queries via SQLite and Uvicorn.',
      'Constructed semantic search using FAISS and sentence embeddings, achieving 35% faster retrieval across large documents and establishing real-time error tracking for robust performance.',
    ],
    link: 'https://github.com/darshikasaxena5',
  },
];

  const positions = [
    {
      period: 'Sep 2023 - Oct 2024',
      role: 'Joint Secretary at Strokes Design Club IIIT Nagpur',
      company: 'IIIT Nagpur',
      achievements: [
        "Spearheaded Nagpur's first women-centric hackathon with 100+ participants from 10+ institutes, handling outreach, logistics, and event operations.",
      ],
    },
    {
      period: 'Sep 2024 - Oct 2024',
      role: 'WomenInDev Hackathon Lead - Tantrafiesta',
      company: 'IIIT Nagpur',
      achievements: [
        "Spearheaded Nagpur's first women-centric hackathon with 100+ participants from 10+ institutes, handling outreach, logistics, and event operations.",
      ],
    },
  ];


  return (
    <div className="min-h-screen text-gray-200 font-sans relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-black pointer-events-none">
        {/* Animated gradient overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(128, 0, 128, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 0% 0%, rgba(0, 0, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 100% 100%, rgba(255, 0, 128, 0.1) 0%, transparent 50%)
            `,
            animation: 'gradient-rotation 20s linear infinite',
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10"
              style={{
                width: Math.random() * 4 + 1 + 'px',
                height: Math.random() * 4 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float-${i} ${Math.random() * 10 + 10}s linear infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Header with glass morphism */}
      <header className="fixed top-0 w-full bg-black/40 backdrop-blur-md z-50 border-b border-white/10">
  <div className="px-4 md:px-16 py-4 flex justify-between items-center"> {/* Removed max-w-6xl mx-auto and changed px-4 to pl-4 */}
    <div className="flex items-center space-x-2">
      <motion.img
        src={profileImage}
        alt="Darshika Saxena"
        className="w-10 h-10 rounded-full ring-2 ring-purple-500/20" // Kept original size
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <h1 className="text-2xl font-bold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">DS</h1> {/* Kept original size */}
    </div>
    <div className="flex space-x-4 pr-4 md:pr-24"> {/* Added pr-4 for right padding */}
      <a
        href="https://github.com/darshikasaxena5"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
        aria-label="GitHub"
      >
        <Github size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/darshikasaxena/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
        aria-label="LinkedIn"
      >
        <Linkedin size={24} />
      </a>
      <a
        href="mailto:darshika13517@gmail.com"
        className="text-gray-400 hover:text-pink-500 transition-all duration-300 transform hover:scale-110"
        aria-label="Email"
      >
        <Mail size={24} />
      </a>
    </div>
  </div>
</header>

      <main className="relative z-10 pt-20 max-w-6xl mx-auto px-4">
        {/* Hero Section with enhanced styling */}
        <section className="min-h-screen flex flex-col justify-center relative pt-20">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
          
          <motion.div
            className="flex flex-col md:flex-row items-center md:items-start gap-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Removed the box around the name by adjusting the container */}
            <motion.div
  className="md:w-1/2 mt-4 md:-mt-20 ml-0 md:-ml-20"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Typewriter container */}
  <div className="relative flex flex-col space-y-4">
        {/* First line */}
        <div className="relative mb-1">
          <h1 className="text-5xl md:text-5xl font-serif font-semibold 
                       overflow-hidden whitespace-nowrap
                       w-[3ch]
                       animate-[typewriter-hi_0.6s_steps(3)_forwards]">
            {"Hi,".split('').map((char, index) => (
              <span 
                key={index}
                className="inline-block transition-all duration-200 hover:text-purple-400 
                         hover:-translate-y-1 hover:scale-110"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Second line */}
        <div className="relative mt-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold
                       overflow-hidden whitespace-nowrap
                       w-[22ch]
                       opacity-0
                       animate-[typewriter-name_1.4s_steps(20)_1s_forwards,fade-in_0.5s_1s_forwards]">
            {"I am Darshika Saxena".split('').map((char, index) => (
              <span 
                key={index}
                className="inline-block transition-all duration-200 hover:text-purple-400 
                         hover:-translate-y-1 hover:scale-110"
                style={{ animationDelay: `${(index + 2) * 2}ms` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Institution name with delayed animation */}
        <motion.div 
          className="flex items-center gap-6 my-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            delay: 2,
            ease: "easeOut"
          }}
        >
          <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-purple-600 
                       text-transparent bg-clip-text font-semibold font-serif">
            Indian Institute of Information Technology Nagpur
          </h2>
          <motion.span 
            className="text-2xl"
            animate={{ y: [-8, 0, -8] }}
            transition={{
              duration: 1.5,
              repeat: 4,
              delay: 2.5
            }}
          >
            🎓
          </motion.span>
        </motion.div>
        <div className="h-6"></div>
        {/* Description with delayed animation and increased bottom margin */}
        <motion.p
          className="text-gray-400 leading-relaxed mb-20 mt-148 opacity-0 
                   animate-[fade-in_0.8s_3s_forwards]"
        >
          Bachelor of Technology - Computer Science (June 2022 - June 2026)
        </motion.p>
      </div>
  {/* Resume button */}
  <motion.a
    href="/Darshika__Resume_.pdf"
    download="Darshika_Saxena_Resume.pdf"
    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
               text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 
               transition-all duration-300 transform hover:scale-105 active:scale-95 
               hover:shadow-pink-500/25 focus:outline-none focus:ring-2 focus:ring-pink-500 
               focus:ring-opacity-50 opacity-0 animate-[fade-in_0.5s_3.5s_forwards]
               mt-6" // Added margin top
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    <Download className="w-5 h-5 mr-2" />
    <span className="font-medium">Download Resume</span>
  </motion.a>
</motion.div>
<div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-8 md:-mt-20"> {/* Added -mt-32 to move up */}
    <div className="relative w-full max-w-md h-auto rounded-lg shadow-2xl object-cover 
             filter brightness-105 hover:brightness-110 transition-all duration-300">
      {/* Border container */}
      <div className="absolute -inset-[1px] rounded-lg overflow-hidden">
        <div className="absolute top-0 left-[-100%] h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-slide-right"/>
        <div className="absolute right-0 top-[-100%] w-[2px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-slide-down"/>
        <div className="absolute bottom-0 right-[-100%] h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-slide-left"/>
        <div className="absolute left-0 bottom-[-100%] w-[2px] h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-slide-up"/>
      </div>

      {/* Image with hover effect */}
      <img
        src={heroImage}
        alt="Darshika Saxena"
        className="relative w-[80vw] md:w-100 max-w-md h-auto rounded-lg shadow-2xl object-cover 
             filter brightness-105 hover:brightness-110 transition-all duration-300 
             ml-auto mr-4 md:mr-14"
        loading="lazy"
      />
      
      {/* Optional: Adding a subtle gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"/>
    </div>
  </div>
</motion.div>
        </section>

        {/* Technologies Section with enhanced cards */}
        <motion.section
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Technologies
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={index}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                delay={index * 0.1}
              />
            ))}
          </div>
        </motion.section>

        {/* Experience Section with enhanced timeline */}
        <motion.section
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent" />
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Experience
          </h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="border-l-4 border-pink-500 pl-8 relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="absolute -left-2 top-0 w-4 h-4
                bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>
                <p className="text-gray-400 mb-2">{exp.period}</p>
                <h3 className="text-2xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{exp.role}</h3>
                <p className="text-gray-400 mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-2 text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{
                        delay: index * 0.2 + i * 0.1,
                        duration: 0.5,
                      }}
                    >
                      <ExternalLink
                        size={16}
                        className="mt-1 flex-shrink-0 text-pink-500"
                        aria-hidden="true"
                      />
                      <span className="hover:text-gray-300 transition-colors duration-300">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Projects Section with enhanced cards */}
        <motion.section
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center justify-between bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:text-pink-400 transition-colors transform hover:scale-110 duration-300"
                      aria-label={`View ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </h3>
                <p className="text-pink-500 text-sm mb-4">{project.tech}</p>
                <ul className="space-y-2">
                  {project.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <ExternalLink
                        size={14}
                        className="mt-1 flex-shrink-0 text-pink-500"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Position of Responsibility Section */}
        <motion.section
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent" />
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Position of Responsibility
          </h2>
          <div className="space-y-12">
          {positions.map((pos, index) => (
          <motion.div
            key={index}
            className="border-l-4 border-pink-500 pl-8 relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="absolute -left-2 top-0 w-4 h-4 bg-pink-500 rounded-full shadow-lg shadow-pink-500/50"></div>
            <p className="text-gray-400 mb-2">{pos.period}</p>
            <h3 className="text-2xl font-semibold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{pos.role}</h3>
            <p className="text-gray-400 mb-4">{pos.company}</p>
            <ul className="space-y-3">
            {pos.achievements.map((achievement, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-2 text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                delay: index * 0.2 + i * 0.1,
                duration: 0.5,
              }}
            >
               <ExternalLink
                        size={16}
                        className="mt-1 flex-shrink-0 text-pink-500"
                        aria-hidden="true"
                      />
              <span className="hover:text-gray-300 transition-colors duration-300">{achievement}</span>
            </motion.li>
            ))}
            </ul>
          </motion.div>
          ))}
          </div>
        </motion.section>

        {/* Contact Section with enhanced buttons */}
        <motion.section
          className="py-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent" />
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Get In Touch
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
             {/* Phone Number Button */}
      <motion.a
        href="tel:+918435514330"
        className="inline-flex items-center px-4 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
             text-white rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 
             transition-all duration-300 text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        aria-label="Call +91-8435514330"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        <span className="font-medium">+91-8435514330</span>
      </motion.a>

              {/* Connect on LinkedIn Button */}
              <motion.a
                href="https://www.linkedin.com/in/darshikasaxena/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg 
                          hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/10
                          hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                aria-label="Connect on LinkedIn"
              >
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-md py-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>
            Contact:{" "}
            <a
              href="mailto:darshika13517@gmail.com"
              className="underline hover:text-pink-500 transition-colors duration-300"
            >
              darshika13517@gmail.com
            </a>
          </p>
        </div>
      </footer>

      {/* Global animations */}
      <style jsx global>{`
        @keyframes gradient-rotation {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        ${Array.from({ length: 10 }).map((_, i) => `
          @keyframes float-${i} {
            0%, 100% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
            }
            50% {
              transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
            }
            75% {
              transform: translate(${Math.random() * 50 - 25}px, ${Math.random() * 50 - 25}px);
            }
          }
        `).join('\n')}
      `}</style>
    </div>
  );
};

export default App;
