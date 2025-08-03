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
      title: "Security Tracker",
      description: "Software designed to organize and catalogue, events, planning and resources, featuring interactive maps and data vizualization. Me and the team had to develop this project localy at the site of our client, completely offline, which proved it's own set of chalanges, I loved working on this project.",
      technologies: [".Net", "C#", "API", "MongoDB", "Leaflet", "OpenStreetMap", "HTML", "JavaScript", "CSS"],
      image: "/Confidential.png"
    },
    {
      id: 2,
      title: "Dissertation Thesis - Disambiguation Degree: 9.40",
      description: "I've conducted research into the field of A.I. machine learning. This software is ment to prove the concept and usage of Word Disambiguation by search engines such as Google. When you hear the word 'Bat' do you think of a baseball bat or a nocturnal animal? This softwre identifies the meaning of the word 'Bat' by analizing the context of the sentaince it is found in.",
      technologies: ["Python", "NLP Tools (NLTK)", "Tokenization"],
      githubUrl: "https://github.com/VladSoltaniuc/Query-Dezambiguization",
      detailsUrl: "https://github.com/VladSoltaniuc/Query-Dezambiguization/blob/master/Soltaniuc-Vlad-Documentatie%20Disertatie.pdf",
      image: "/Animal-Obiect.jpg"
    },
    {
      id: 3,
      title: "Amazon Price Checker",
      description: "Software that checks Amazon price listings for the selected item. When the item goes below a certain choosen value, the user is informed of the oprotunity to buy it for a low price. I was researching inflation and price fluctuation, which gave me this idea. I see an similar oportunity here for Food Ordering Apps.",
      technologies: ["JavaScript", "Mailchimp"],
      githubUrl: "https://github.com/VladSoltaniuc/Amazon-Price-Checker",
      detailsUrl: "https://github.com/VladSoltaniuc/Amazon-Price-Checker/blob/main/EmailReciever.JPG",
      image: "/EmailReciverContents.jpeg"
    },
    {
      id: 4,
      title: "University Microsercives",
      description: "University management system, with features such as: enrollment, student dashboard, professor administration, scheduler, notifications, Import/Export etc. Extensive number of API routes using the Next.js standard and TypeORM conventions. This app covers everything related to a University flow of work.",
      technologies: ["Next.js", "TypeORM", "Typescript", "API", "PostgreSQL"],
      image: "/Confidential.png"
    },
    {
      id: 5,
      title: "Weather APP",
      description: "Software for checking the temperature, chances of rain, wind-speed in real time. Using OpenWeather API, which gathers data live from weather stations. It features a Select2 type searchbox that allows the user to search by city name.",
      technologies: ["OpenWeatherMap API", "HTML", "JavaScript", "CSS"],
      githubUrl: "https://github.com/VladSoltaniuc/Weather-App",
      detailsUrl: "https://github.com/VladSoltaniuc/Weather-App/blob/main/Weather%20APP.JPG",
      image: "/Weather APP.jpeg"
    },
    {
      id: 6,
      title: "Sales CRM",
      description: "Cloud Software designed to help companies organize their data. Offering multi-tennant Invoicing, Stocks, Finance, Notifications, Logs, Import/Export.",
      technologies: [".Net", "C#", "API", "SQL", "HTML", "JavaScript", "CSS"],
      image: "/Confidential.png"
    },
    {
      id: 7,
      title: "Car Helper",
      description: "Cloud Software designed to manage Car information, such as distance traveled, care plate number, VIN, repair history and integrated to send data towards the official API entity.",
      technologies: [".Net", "C#", "API", "HTML", "SQL", "JavaScript", "CSS"],
      image: "/Confidential.png"
    },
    {
      id: 8,
      title: "Area31",
      description: "Arward winning team project made for 3ITC's programmers contest during my university years.",
      technologies: ["Unreal Engine 4", "Blueprints", "UE Build System"],
      githubUrl: "https://github.com/VladSoltaniuc/Area31",
      detailsUrl: "https://github.com/VladSoltaniuc/Area31/blob/master/HOW%20TO%20GET%20THE%20GAME-%20GOOGLE%20DRIVE.txt",
      image: "/Area1.jpg"
    },
    {
      id: 9,
      title: "Cubesain",
      description: "This was a team project made for 3ITC contest during my university years, we ended up winning.",
      technologies: ["Unreal Engine 4", "Blueprints", "UE Build System"],
      githubUrl: "https://github.com/VladSoltaniuc/Area31",
      detailsUrl: "https://github.com/VladSoltaniuc/Area31/blob/master/HOW%20TO%20GET%20THE%20GAME-%20GOOGLE%20DRIVE.txt",
      image: "/Confidential.png"
    },
    
    {
      id: 10,
      title: "Area31",
      description: "Arward winning team project made for 3ITC's programmers contest during my university years.",
      technologies: ["Unreal Engine 4", "Blueprints", "UE Build System"],
      githubUrl: "https://github.com/VladSoltaniuc/Area31",
      detailsUrl: "https://github.com/VladSoltaniuc/Area31/blob/master/HOW%20TO%20GET%20THE%20GAME-%20GOOGLE%20DRIVE.txt",
      image: "/Area1.jpg"
    },
    
    {
      id: 11,
      title: "Area31",
      description: "Arward winning team project made for 3ITC's programmers contest during my university years.",
      technologies: ["Unreal Engine 4", "Blueprints", "UE Build System"],
      githubUrl: "https://github.com/VladSoltaniuc/Area31",
      detailsUrl: "https://github.com/VladSoltaniuc/Area31/blob/master/HOW%20TO%20GET%20THE%20GAME-%20GOOGLE%20DRIVE.txt",
      image: "/Area1.jpg"
    },
    
    {
      id: 12,
      title: "Area31",
      description: "Arward winning team project made for 3ITC's programmers contest during my university years.",
      technologies: ["Unreal Engine 4", "Blueprints", "UE Build System"],
      githubUrl: "https://github.com/VladSoltaniuc/Area31",
      detailsUrl: "https://github.com/VladSoltaniuc/Area31/blob/master/HOW%20TO%20GET%20THE%20GAME-%20GOOGLE%20DRIVE.txt",
      image: "/Area1.jpg"
    },
  ];

  const skills: Skill[] = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "CSS/Tailwind", level: 85 },
    { name: "Git/GitHub", level: 90 },
    { name: "SKILL NAME", level: 90 },
    { name: "SKILL NAME", level: 90 },
    { name: "SKILL NAME", level: 90 },
    { name: "SKILL NAME", level: 90 },
    { name: "SKILL NAME", level: 90 },
    { name: "SKILL NAME", level: 90 },
    { name: "SKILL NAME", level: 90 },
    { name: "SKILL NAME", level: 90 },
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
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform">
                  <Github size={24} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform">
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
                  I have over <b>2 years of experience</b> in which I've created solutions for multiple fields,
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
                "Anything can be achived given time and determination." (Translated)
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
          <div className="bg-slate-800/80 backdrop-blur-md rounded-xl p-8 border border-slate-700/50 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-green-400 mr-3" size={20} />
                    <span className="text-gray-300">i.vlad55@yahoo.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-green-400 mr-3" size={20} />
                    <span className="text-gray-300">(+40)728848773</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-green-400 mr-3" size={20} />
                    <span className="text-gray-300">Bucharest, Romania</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700/80 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500 transition-colors"
                  ></textarea>
                  <button
                    onClick={() => alert('Message sent! (This is a demo)')}
                    className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-lg hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 font-medium shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
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