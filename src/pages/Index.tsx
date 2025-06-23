
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Menu, X, ExternalLink, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    "Programming Languages": ["Java", "JavaScript", "TypeScript"],
    "Frameworks & Libraries": ["Spring MVC", "Spring Boot", "Spring Security", "React", "JUnit, Mockito"],
    "Tools and Platforms": ["Git, GitHub, GitLab", "BitBucket", "Maven, Gradle", "Docker", "Azure DevOps"],
    "Databases": ["MySQL, PostgreSQL", "Microsoft SQL Server", "MongoDB", "Spring Data JPA", "Spring Data Mongo"],
    "APIs and Messaging": ["RESTful API", "RabbitMQ", "Redis", "Amazon S3", "Amazon SES"],
    "Methodologies": ["Test-Driven Development (TDD)", "Agile (SAFe, Kanban)"],
    "Code Quality": ["SonarQube", "Veracode"],
    "Soft Skills": ["Leadership", "Mentorship"]
  };

  const experience = [
    {
      company: "ADN DigiNet Ltd.",
      position: "Software Engineer",
      period: "February 2025 - Present",
      projects: [
        {
          name: "LifeLine Plus",
          description: "Web-based modernization of MetLife's legacy administrative platform",
          achievements: [
            "Develop scalable microservices using Java and Spring Boot in a Microservices architecture",
            "Build responsive front-end modules using React and TypeScript",
            "Ensure clean, secure, and compliant code with SonarQube and Veracode standards",
            "Work within a SAFe Agile environment, contributing to sprint planning and daily standups",
            "Collaborate with DevOps, QA, and Product teams to deliver business-critical solutions"
          ]
        }
      ]
    },
    {
      company: "Crystal Technology Bangladesh Ltd.",
      position: "Programmer",
      period: "September 2023 – January 2025",
      achievements: [
        "Spearheaded the Java team in project planning, solution development, and execution",
        "Achieved a 50% reduction in API response time by optimizing code with the Parallel Stream feature",
        "Led and contributed to key projects, including LIMS, SAM, and SHR systems",
        "Enhanced code performance by optimizing queries and resolving Hibernate (n+1) issues",
        "Containerized applications using Docker for lightweight deployment and improved manageability by 60%"
      ]
    },
    {
      company: "Crystal Technology Bangladesh Ltd.",
      position: "Assistant Programmer",
      period: "September 2022 - August 2023",
      achievements: [
        "Assisted senior developers in decision-making processes for various projects",
        "Provided guidelines to junior developers for optimal coding solutions",
        "Played a key role in the core development of the Shared Health Record system",
        "Developed reports using optimal RDBMS queries and optimized existing report execution time by 25%"
      ]
    },
    {
      company: "Crystal Technology Bangladesh Ltd.",
      position: "Junior Programmer",
      period: "June 2021 - August 2022",
      achievements: [
        "Understood project requirements and translated them into successful executions"
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-2xl font-bold text-white">Kamrul</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Experience', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
              <div className="flex items-center space-x-3 ml-4">
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-blue-500 transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 bg-gray-900 border-t border-gray-800">
              {['Home', 'About', 'Experience', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'Home' ? 'hero' : item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gray-600"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full border border-gray-600"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-gray-600"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
            I love to create<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              beautiful and<br />
              efficient websites
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-delay">
            Accomplished Software Engineer with over 4 years of experience in designing and developing 
            enterprise-grade applications using Java, Spring Boot, React, and TypeScript.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              Discover
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
                Hi there I'm Kamrul,
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                And I love to create beautiful and efficient applications for my clients. I love going 
                through the entire process with the customer from concept, to design and 
                then development and launch.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Currently working on transitioning legacy systems into scalable, web-based platforms 
                using cutting-edge technologies and best practices in software development.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>kamrul.bari.97@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+8801856-991178</span>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="flex justify-center md:justify-end mb-8">
                <div className="relative">
                  <img 
                    src="/images/kamrul-profile.png" 
                    alt="Kamrul Bari - Software Engineer"
                    className="w-80 h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Career Timeline */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-blue-600 font-semibold text-sm">2025 - PRESENT</h3>
                      <h4 className="text-gray-900 font-bold text-lg">Software Engineer</h4>
                      <p className="text-gray-600">Working on enterprise-grade applications at ADN DigiNet</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-blue-600 font-semibold text-sm">2023 - 2025</h3>
                      <h4 className="text-gray-900 font-bold text-lg">Programmer</h4>
                      <p className="text-gray-600">Led Java team and optimized application performance at Crystal Technology</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-blue-600 font-semibold text-sm">2022 - 2023</h3>
                      <h4 className="text-gray-900 font-bold text-lg">Assistant Programmer</h4>
                      <p className="text-gray-600">Contributed to core development of healthcare systems</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-blue-600 font-semibold text-sm">2021 - 2022</h3>
                      <h4 className="text-gray-900 font-bold text-lg">Junior Programmer</h4>
                      <p className="text-gray-600">Started career translating requirements into successful executions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{job.position}</CardTitle>
                      <CardDescription className="text-blue-400 text-lg font-semibold">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-blue-900 text-blue-300 border-blue-700 mt-2 sm:mt-0">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  {job.projects && (
                    <div className="mb-4">
                      {job.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className="mb-4">
                          <h4 className="text-white font-semibold mb-2 flex items-center">
                            <ExternalLink className="w-4 h-4 mr-2 text-blue-400" />
                            {project.name}
                          </h4>
                          <p className="text-gray-300 mb-3">{project.description}</p>
                          <ul className="space-y-2">
                            {project.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-gray-300 flex items-start">
                                <span className="text-blue-400 mr-2 mt-1">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                  {job.achievements && (
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 flex items-start">
                          <span className="text-blue-400 mr-2 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Skills Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-gray-900 text-lg group-hover:text-blue-600 transition-colors duration-200">
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200 border-blue-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities and exciting projects. 
            Let's connect and explore how we can work together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <a 
              href="mailto:kamrul.bari.97@gmail.com"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a 
              href="tel:+8801856991178"
              className="flex items-center border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a 
              href="https://linkedin.com/in/md-kamrul-bari/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://github.com/kamrulbari14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 MD. Kamrul Bari. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
