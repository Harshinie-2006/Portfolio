"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, Menu, X, ExternalLink, FileText } from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const projects = [
    {
      title: "Geolocation Based Attendance Tracking System",
      description: "Smart attendance system using geolocation with React and modern UI design",
      tags: ["React", "UI Design", "Geolocation"],
      achievement: "🏆 1st Prize - Department Level Project Expo (Ruby'24)",
      github: "https://github.com/Harshinie-2006/Geolocation-Based-Attedence-Tracking",
    },
    {
      title: "Smart Traffic Management",
      description: "Intelligent traffic management system for efficient urban mobility",
      tags: ["AI", "Traffic Systems"],
      location: "CIT",
      github: "https://github.com/Harshinie-2006",
    },
    {
      title: "Fault Detector in Rotors",
      description: "AI-powered system for detecting and analyzing rotor faults",
      tags: ["AI", "Machine Learning"],
      location: "SSN",
      github: "https://github.com/Harshinie-2006/fault-monitoring-dashboard",
    },
    {
      title: "Automatic Multi Vendor PO Generator",
      description: "B2B system that detects low stock via billing data, auto-generates purchase orders, and notifies vendors",
      tags: ["MERN", "DevOps", "B2B"],
      location: "Kongu Engineering College",
      github: "https://github.com/Harshinie-2006/PO-generator",
    },
  ]

  const skills = [
    { category: "Frontend", items: ["React", "UI/UX Design", "Responsive Design"] },
    { category: "Programming", items: ["C Programming", "Java", "Data Structures"] },
    { category: "Specializations", items: ["Web Development", "UI/UX Design", "AI Integration"] },
  ]

  const certifications = [
    { 
      title: "Oracle Certified Java Developer SE17", 
      issuer: "Oracle",
      link: "https://drive.google.com/file/d/1xYg0aasiJ_PudlRD_b6qyFotfhqTVWrw/view?usp=sharing"
    },
    { 
      title: "MongoDB Certified Associate Developer", 
      issuer: "MongoDB",
      link: "https://drive.google.com/file/d/1faVVc4LED25Zv_n_f-rVkGCoOegVEKKs/view?usp=sharing"
    },
  ]

  const trainings = [
    { title: "Frontend Development", company: "SBS Technologies", date: "July 15-18, 2024" },
    { title: "Poster Design", company: "UNIQ Softech", date: "Dec 24-31, 2024" },
  ]

  const presentations = [
    { 
      title: "Smart Traffic Management", 
      event: "Coimbatore Institute of Technology" 
    },
    { 
      title: "Robotics in Machineries", 
      event: "Techathon'24 at Ramakrishna Institute of Technology",
      link: "https://drive.google.com/file/d/1RI0fTuxkxr7JokloyUWuac9Y4nNHecjh/view?usp=sharing"
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-emerald-600">H</div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
              className={`${isMenuOpen ? "block" : "hidden"} md:block absolute md:relative top-16 md:top-0 left-0 md:left-0 w-full md:w-auto bg-slate-50 md:bg-transparent`}
            >
              <div className="flex flex-col md:flex-row gap-8 p-4 md:p-0">
                <a href="#about" className="text-slate-500 hover:text-emerald-600 transition">
                  About
                </a>
                <a href="#projects" className="text-slate-500 hover:text-emerald-600 transition">
                  Projects
                </a>
                <a href="#skills" className="text-slate-500 hover:text-emerald-600 transition">
                  Skills
                </a>
                <a href="#contact" className="text-slate-500 hover:text-emerald-600 transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
                <span className="text-emerald-600">Harshini</span>
              </h1>
              <p className="text-xl text-slate-500 mb-4">Computer Science & Engineering</p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Passionate developer focused on creating beautiful, intuitive interfaces and robust web applications.
                Currently pursuing BE at Kongu Engineering College with a CGPA of 9.23.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://drive.google.com/file/d/1xYg0aasiJ_PudlRD_b6qyFotfhqTVWrw/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white hover:bg-emerald-600 rounded-lg transition font-medium"
                >
                  <FileText size={20} /> Resume
                </a>
                <a
                  href="https://github.com/Harshinie-2006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-900 hover:bg-slate-100 rounded-lg transition"
                >
                  <Github size={20} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/harshini-e-a40087315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-500 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition"
                >
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="w-full aspect-square bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Education</h3>
              <p className="text-slate-600 mb-2">Kongu Engineering College (2023-2027)</p>
              <p className="text-slate-500 text-sm">BE Computer Science & Engineering</p>
              <p className="text-slate-500 text-sm">CGPA: 9.23</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Leadership</h3>
              <ul className="text-slate-600 space-y-2">
                <li>✓ Executive Member - Self Development Club</li>
                <li>✓ Executive Member - CSI</li>
                <li>✓ Placement Coordinator</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">Languages</h3>
              <ul className="text-slate-600 space-y-2">
                <li>English - Fluent</li>
                <li>Tamil - Native</li>
                <li>Hindi - Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-lg p-6 hover:border-emerald-500 transition flex flex-col h-full relative group"
              >
                <h3 className="text-xl font-semibold mb-3 text-balance pr-8">{project.title}</h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-6 right-6 text-slate-500 hover:text-emerald-600 transition"
                  >
                    <Github size={20} />
                  </a>
                )}
                <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  {project.achievement && <p className="text-emerald-600 text-sm font-semibold mb-1">{project.achievement}</p>}
                  {project.location && <p className="text-slate-500 text-sm">📍 {project.location}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-emerald-600 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-slate-600 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Presentations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Certifications, Training & Presentations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-6">Certifications</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <a 
                    key={index} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border-l-2 border-emerald-500 pl-4 hover:border-emerald-500 group cursor-pointer"
                  >
                    <p className="font-semibold text-slate-900 group-hover:text-emerald-600 transition flex items-center gap-2">
                      {cert.title}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition" />
                    </p>
                    <p className="text-slate-500 text-sm">{cert.issuer}</p>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-6">Training & Internships</h3>
              <div className="space-y-4">
                {trainings.map((training, index) => (
                  <div key={index} className="border-l-2 border-emerald-500 pl-4">
                    <p className="font-semibold text-slate-900">{training.title}</p>
                    <p className="text-slate-500 text-sm">{training.company}</p>
                    <p className="text-slate-500 text-xs">{training.date}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-emerald-600 mb-6">Paper Presentations</h3>
              <div className="space-y-4">
                {presentations.map((presentation, index) => (
                  presentation.link ? (
                    <a 
                      key={index} 
                      href={presentation.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block border-l-2 border-emerald-500 pl-4 hover:border-emerald-500 group cursor-pointer"
                    >
                      <p className="font-semibold text-slate-900 group-hover:text-emerald-600 transition flex items-center gap-2">
                        {presentation.title}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition" />
                      </p>
                      <p className="text-slate-500 text-sm">{presentation.event}</p>
                    </a>
                  ) : (
                    <div key={index} className="border-l-2 border-emerald-500 pl-4">
                      <p className="font-semibold text-slate-900">{presentation.title}</p>
                      <p className="text-slate-500 text-sm">{presentation.event}</p>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:harshinie.23cse@kongu.edu"
              className="group bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-lg p-8 hover:border-emerald-500 transition text-center"
            >
              <Mail className="w-12 h-12 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition" />
              <p className="font-semibold mb-2">Email</p>
              <p className="text-slate-500 text-sm break-all">harshinie.23cse@kongu.edu</p>
            </a>
            <a
              href="https://github.com/Harshinie-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-lg p-8 hover:border-emerald-500 transition text-center"
            >
              <Github className="w-12 h-12 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition" />
              <p className="font-semibold mb-2">GitHub</p>
              <p className="text-slate-500 text-sm">View my projects</p>
            </a>
            <a
              href="https://www.linkedin.com/in/harshini-e-a40087315/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white shadow-sm hover:shadow-md border border-slate-200 rounded-lg p-8 hover:border-emerald-500 transition text-center"
            >
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-emerald-600 group-hover:scale-110 transition" />
              <p className="font-semibold mb-2">LinkedIn</p>
              <p className="text-slate-500 text-sm">Connect with me</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center text-slate-500">
          <p>© 2025 Harshini. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
