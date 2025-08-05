import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  detailsUrl?: string;
  githubUrl?: string;
  image: string;
}

interface Skill {
  name: string;
  level: number;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "A.I. Sentiment Analysis",
      description: "This software uses an pretrained A.I. model to detect the sentiment/feeling a certain user has based on the text written. It is usable in any language since I integrated it with Google Translate and it is perfect for bussy days where you receive messages left and right. Just have the A.I. analize your messages and detect wether they have Negative, Neutral or Positive feelings. Now you know to focus on those Negative ones because they are the priority.",
      technologies: ["A.I. Model", "Python", "Flask", "Jinja2", "HuggingFace", "GoogleTranslate"],
      githubUrl: "https://github.com/VladSoltaniuc/Sentiment-Analysis",
      detailsUrl: "https://github.com/VladSoltaniuc/Sentiment-Analysis/blob/master/README.md",
      image: "/Sentiment.JPG"
    },
    {
      id: 2,
      title: "Dissertation Thesis - Disambiguation Degree: 9.40",
      description: "I've conducted research into the field of A.I. Machine Learning. This software is ment to prove the concept and usage of Word Disambiguation by search engines such as Google. When you hear the word 'Bat' do you think of a baseball bat or a nocturnal animal? This softwre identifies the meaning of the word 'Bat' by analizing the context of the sentaince it is found in.",
      technologies: ["Python", "NLP Tools (NLTK)", "Tokenization"],
      githubUrl: "https://github.com/VladSoltaniuc/Query-Dezambiguization",
      detailsUrl: "https://github.com/VladSoltaniuc/Query-Dezambiguization/blob/master/Soltaniuc-Vlad-Documentatie%20Disertatie.pdf",
      image: "/Animal-Obiect.jpg"
    },
    {
      id: 3,
      title: "Number Prediction",
      description: "This software uses an pretrained A.I. model in order to predict numbers from 0 to 9 from pictures of hand written numbers. We all have a diferent way to write numbers by hand, such as 1, 4 and 7. It aims to solve confusion by analizing the handwriting and guessing the most likely outcome.",
      technologies: ["A.I. Model", "Python", "MNIST Dataset"],
      githubUrl: "https://github.com/VladSoltaniuc/Vision2Number",
      detailsUrl: "https://github.com/VladSoltaniuc/Vision2Number/tree/master#readme",
      image: "/AI.JPG"
    },
    
    {
      id: 4,
      title: "Security Tracker",
      description: "Software designed to organize and catalogue, events, planning and resources, featuring interactive maps and data vizualization. Me and the team had to develop this project localy at the site of our client, completely offline, which proved it's own set of chalanges, I loved working on this project.",
      technologies: [".Net", "C#", "API", "MongoDB", "Leaflet", "OpenStreetMap", "HTML", "JavaScript", "CSS"],
      image: "/Confidential.png"
    },
    {
      id: 5,
      title: "Amazon Price Checker",
      description: "Software that checks Amazon price listings for the selected item. When the item goes below a certain choosen value, the user is informed via email of the oprotunity to buy it for a low price. I was researching inflation and price fluctuation, which gave me this idea. I see an similar oportunity here for Food Ordering Apps.",
      technologies: ["JavaScript", "Mailchimp"],
      githubUrl: "https://github.com/VladSoltaniuc/Amazon-Price-Checker",
      detailsUrl: "https://github.com/VladSoltaniuc/Amazon-Price-Checker/blob/main/EmailReciever.JPG",
      image: "/EmailReciverContents.jpeg"
    },
    {
      id: 6,
      title: "University Microservices",
      description: "University management system, with features such as: enrollment, student dashboard, professor administration, scheduler, notifications, Import/Export etc. Extensive number of API routes using the Next.js standard and TypeORM conventions. This app covers everything related to a University's flow of work.",
      technologies: ["Nest.js", "Next.js", "TypeORM", "Typescript", "API", "PostgreSQL"],
      image: "/Confidential.png"
    },
    {
      id: 7,
      title: "Weather APP",
      description: "Software for checking the temperature, chances of rain and wind-speed in real time. Using Open Weather API, which gathers data live from weather stations. It features a Select2 type searchbox that allows the user to search by city name.",
      technologies: ["OpenWeatherMap API", "HTML", "JavaScript", "CSS"],
      githubUrl: "https://github.com/VladSoltaniuc/Weather-App",
      detailsUrl: "https://github.com/VladSoltaniuc/Weather-App/blob/main/Weather%20APP.JPG",
      image: "/Weather APP.jpeg"
    },
    {
      id: 8,
      title: "Sales CRM",
      description: "Cloud Software designed to help companies organize their data. Offering multi-tennant Invoicing, Stocks, Finance, Notifications, Logs, Import/Export etc. It is modularized and sections can be enable/disabled based on user requirements via roles and permissions.",
      technologies: [".Net", "C#", "API", "SQL", "HTML", "JavaScript", "CSS"],
      image: "/Confidential.png"
    },
    {
      id: 9,
      title: "Car Helper",
      description: "Cloud Software designed to manage Car information, such as distance traveled, care plate number, VIN and repair history. It is integrated to send data towards the official API entity upon service inspection.",
      technologies: [".Net", "C#", "API", "HTML", "SQL", "JavaScript", "CSS"],
      image: "/Confidential.png"
    },
    {
      id: 10,
      title: "Area31",
      description: "Arward winning project made for 3ITC's programmers contest. It features a laser gun that interacts diferently based on the surface you shoot at. After introduceing the played through a short tutorial, you are faced with a series of puzzles where you have to use your wit and imagination to pass. Can you succeed? And more importantly, will you find the hidden Golden Trophy? Click on 'Details' for dowload instructions.",
      technologies: ["Unreal Engine 4", "UE Build System", "Blueprints"],
      githubUrl: "https://github.com/VladSoltaniuc/Area31",
      detailsUrl: "https://github.com/VladSoltaniuc/Area31/blob/master/GameplayArena31.3gp",
      image: "/Area1.jpg"
    },
    {
      id: 11,
      title: "Cubsain",
      description: "A race against time, a game where you play as a cube traveling through an unknown land of obstacles and rewards. Will you reach the end until the time runs out? Good luck! Click on 'Details' and then 'View raw' to dowload the installer.",
      technologies: ["Unity 2020.3", "C#"],
      githubUrl: "https://github.com/VladSoltaniuc/CUBSAIN",
      detailsUrl: "https://github.com/VladSoltaniuc/CUBSAIN/blob/main/Gameplay.mp4",
      image: "/Cubesain.jpg"
    },
    {
      id: 11,
      title: "Coming Soon",
      description: "-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------",
      technologies: [],
      githubUrl: "",
      detailsUrl: "",
      image: "/ComingSoon.png"
    },
  ];

  const skills: Skill[] = [
    { name: ".Net MVC", level: 80 },
    { name: "SSMS", level: 90 },
    { name: "C#", level: 80 },
    { name: "SQL", level: 90 },
    { name: "REST API", level: 90 },
    { name: "MongoDB", level: 70 },
    { name: "TypeORM", level: 50 },
    { name: "PostgreSQL", level: 70 },
    { name: "Nest.js", level: 60 },
    { name: "Next.js", level: 40 },
    { name: "Git", level: 70 },
    { name: "HTML", level: 90 },
    { name: "TypeScript", level: 60 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 60 },
    { name: "English", level: 90 },
    { name: "Research", level: 90 },
    { name: "Communication", level: 90 },
    { name: "Analysis", level: 90 },
    { name: "React", level: 30 },
    { name: "Python", level: 20 },
    { name: "A.I. Integration", level: 40 },
    { name: "Leaflet", level: 20 },
    { name: "A.I. Machine Learning", level: 30 },
    { name: "UnrealEngine4", level: 20 },
    { name: "Unity", level: 20 },
  ];

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Name and Motto */}
            <div className="flex items-center space-x-8">
              <div className="text-2xl font-bold text-white">Vlad.dev</div>
              <div className="hidden md:block">
                <span className="text-white font-medium">Analyze. </span>
                <span className="text-white font-medium">Code. </span>
                <span className="text-green-400 font-medium italic">Create. </span>
                <span className="text-white font-medium">Innovate.</span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home','quotes', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-300 hover:text-white transition-colors capitalize font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Toggle */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="text-center py-2 border-b border-gray-700 mb-2">
                <span className="text-white font-medium">Analyze. </span>
                <span className="text-white font-medium">Code. </span>
                <span className="text-green-400 font-medium italic">Create. </span>
                <span className="text-white font-medium">Innovate.</span>
              </div>
              {['home', 'quotes', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-gray-300 hover:text-white transition-colors capitalize w-full text-left hover:bg-gray-800/50 rounded font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero + About Combined Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Hero/Introduction */}
            <div className="text-center lg:text-center">
              <div className="w-full">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-green-600 to-dark-400 mx-auto mb-8 flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-white">VS</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Vlad Soltaniuc
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Developer
              </p>
              <div className="flex justify-center lg:justify-center space-x-6 mb-8">
                <a href="https://github.com/VladSoltaniuc" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform" target="_blank">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vlad-soltaniuc-048ba2172/" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform" target="_blank">
                  <Linkedin size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform">
                  <Mail size={24} />
                </a>
              </div>
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-green-600 to-dark-500 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-dark-600 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                View My Work
              </button>
            </div>
            {/* Right Side - About Me */}
            <div>
            <br />
              <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 shadow-xl">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Software Developing isn't just a <b>Job</b>, it's a <b>Hobby</b>, a choice of <b>Lifestyle</b> to 
                  always be improving. At the moment I'm having lots of fun learning <b>A.I. models</b> and the math underneath them.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed">
                  I have over <b>2 years of professional experience</b> in which I've created solutions for multiple fields,
                  be it <b>Security</b>, <b>Education</b>, <b>Medical</b>, <b>Commercial</b> etc. A good Developer means more than just writing code,
                  we need to have a time analytic thinking.
                  <br />
                  <ul className="text-gray-300 text-lg leading-relaxed mb-2 list-disc list-inside">
                    <li><b>How long</b> will this feature take to implement?</li>
                    <li>Is there already <b>an existing solution</b> in need of tweaking?</li>
                  </ul>
                  You would be surprised how much <b>time</b> you can <b>save</b> when we ask the <b>Right Questions</b>. That is why proper Analysis is a <b>Must-Have</b> before diving into code.
                </p>
                <br />
                <p className="text-gray-300 text-lg leading-relaxed">
                  When I'm not coding, you can find me playing my guitar, recording song covers or enjoying outdoor activities.
                </p>
              </div>
                <br />
            </div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Quotes I will always remember</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-xl">
              <div className="text-6xl text-green-400 mb-4">"</div>
              <p className="text-gray-300 text-lg italic mb-4">
                "The road ahead is a hard one, but becoming a Developer unlocks endless posibilities." (Translated)
              </p>
              <p className="text-green-400 font-medium">— Daniela Schiopu</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-xl">
              <div className="text-6xl text-green-400 mb-4">"</div>
              <p className="text-gray-300 text-lg italic mb-4">
                "If it seems like a common problem, most likely someone already found the solution." (Translated)
              </p>
              <p className="text-green-400 font-medium">— Vlad Lepadatu</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-xl">
              <div className="text-6xl text-green-400 mb-4">"</div>
              <p className="text-gray-300 text-lg italic mb-4">
                "With only a few lines of code, your vision can become reality." (Translated)
              </p>
              <p className="text-green-400 font-medium">— Constantin Scheau</p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-xl">
              <div className="text-6xl text-green-400 mb-4">"</div>
              <p className="text-gray-300 text-lg italic mb-4">
                "Creativity is crucial, but let's not reinvent the wheel." (Translated)
              </p>
              <p className="text-green-400 font-medium">— Andrei Ristea </p>
            </div>
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-xl">
              <div className="text-6xl text-green-400 mb-4">"</div>
              <p className="text-gray-300 text-lg italic mb-4">
                "Anything can be achieved given time and determination." (Translated)
              </p>
              <p className="text-green-400 font-medium">— Vlad Soltaniuc</p>
            </div>
            
            <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-xl">
              <div className="text-6xl text-green-400 mb-4">"</div>
              <p className="text-gray-300 text-lg italic mb-4">
                "Force push to main."
              </p>
              <p className="text-green-400 font-medium">— Steve Jobs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-slate-800/80 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all border border-slate-700/50 shadow-xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" className="flex items-center text-green-400 hover:text-blue-400 transition-colors">
                        <Github size={16} className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.detailsUrl && (
                      <a href={project.detailsUrl} target="_blank" className="flex items-center text-green-400 hover:text-blue-400 transition-colors">
                        <ExternalLink size={16} className="mr-1" />
                        Details
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/80 backdrop-blur-md rounded-xl p-6 border border-slate-700/50 shadow-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Let's Connect</h2>
          
          {/* Main Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email Card */}
            <div 
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 shadow-xl hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => window.open('mailto:i.vlad55@yahoo.com', '_blank')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 mb-3">Drop me a line</p>
                <p className="text-green-400 font-medium">i.vlad55@yahoo.com</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-gray-400">Click to open email client</span>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div 
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 shadow-xl hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => window.open('tel:+40728848773', '_blank')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <Phone className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 mb-3">Let's talk</p>
                <p className="text-blue-400 font-medium">(+40) 728 848 773</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-gray-400">Click to call</span>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div 
              className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 shadow-xl hover:transform hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              onClick={() => window.open('https://maps.google.com/?q=Bucharest,Romania', '_blank')}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300 mb-3">Based in</p>
                <p className="text-purple-400 font-medium">Bucharest, Romania</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm text-gray-400">Click to view on map</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Find Me Online</h3>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://github.com/VladSoltaniuc" 
                target="_blank"
                className="group flex flex-col items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Github className="text-white" size={20} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/vlad-soltaniuc-048ba2172/" 
                target="_blank"
                className="group flex flex-col items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={20} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">LinkedIn</span>
              </a>
              
              <a 
                href="mailto:i.vlad55@yahoo.com" 
                className="group flex flex-col items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-500 rounded-full flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={20} />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Direct Email</span>
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-md rounded-xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Start a Project?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Whether you have a specific project in mind or just want to explore possibilities, 
                I'm always excited to discuss new opportunities and challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('mailto:i.vlad55@yahoo.com?subject=Project Inquiry', '_blank')}
                  className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 font-medium shadow-lg"
                >
                  Start a Conversation
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-transparent border-2 border-green-400 text-green-400 px-8 py-3 rounded-lg hover:bg-green-400 hover:text-white transition-all transform hover:scale-105 font-medium"
                >
                  View My Work
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  <code className="text-2xl font-bold text-white mb-8 text-center lg:text-center">
                    greatProject = [(userOriented + resultFocused) × (askingQuestions + teamplay)] ÷ timeAvailable
                  </code>
                </p>
            © 2025 Vlad Soltaniuc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;