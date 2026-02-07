import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, Code2, Palette, Zap, Loader2, Play, FileText, Menu, X, Phone, Award, FileCheck } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { SkillCard } from "@/components/SkillCard";

function downloadResume() {
  const link = document.createElement("a");
  link.href = "/Anchal_CV%20Final-3.pdf";
  link.download = "Anchal_Chauhan_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const GITHUB_URL = "https://github.com/Anchalanshu";
const LINKEDIN_URL = "https://www.linkedin.com/in/anchal-chauhan-b034b82a3";
const EMAIL = "anshu22072004@gmail.com";
const PHONE = "9996869467";
const COVER_LETTER_URL = "https://www.canva.com/design/DAHAiH4ySIM/hZv9_baNrMWpFuGky2y2lA/view?utm_content=DAHAiH4ySIM&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2330c94415";
const CERTIFICATES_URL = "https://anchalanshu.github.io/Anchal_Certificates/";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#hire", label: "Hire Me" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollReveal = () => {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) el.classList.add("revealed");
      });
    };
    window.addEventListener("scroll", handleScrollReveal);
    handleScrollReveal();
    return () => window.removeEventListener("scroll", handleScrollReveal);
  }, []);

  const projects = [
    {
      id: 1,
      title: "NestFinder",
      problem: "Students and professionals struggle to find nearby accommodation with real-time availability",
      solution: "Built a rental discovery platform with filtering, availability tracking, and map-based search",
      tech: ["Flask", "Python", "Next.js", "Maps API"],
      liveUrl: "https://nestfinder-v4ks.onrender.com/",
      githubUrl: "#",
      image: "/assets/projects/nestfinder.png",
    },
    {
      id: 2,
      title: "AI-Driven DevSecOps Pipeline",
      problem: "Manual security scanning slows down CI/CD pipelines and creates deployment bottlenecks",
      solution: "Automated security scanning with AI-powered vulnerability detection integrated into deployment workflow",
      tech: ["Python", "AI/ML", "Docker", "GitHub Actions", "Security Tools"],
      liveUrl: "https://web-scrapper-pro-eight.vercel.app",
      githubUrl: "#",
      image: "/assets/projects/devsecops.png",
    },
    {
      id: 3,
      title: "Skill Swap Platform",
      problem: "Students lack a centralized platform to connect, exchange skills, and collaborate on projects",
      solution: "Built a collaboration platform with secure authentication, skill matching, and project management",
      tech: ["Flask", "MongoDB", "Bootstrap", "JavaScript"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/assets/projects/skillswap.png",
      demoUrl: "https://m.youtube.com/watch?v=8NWYZlySpbg",
      demoLabel: "Watch Demo",
    },
    {
      id: 4,
      title: "Smart Waste Segregation Bin",
      problem: "Manual waste segregation is inefficient and leads to contamination of recyclable materials",
      solution: "IoT-based smart bin with AI-powered waste detection and automatic segregation using motors",
      tech: ["Arduino", "Sensors", "Embedded Systems", "Computer Vision"],
      liveUrl: "#",
      githubUrl: "#",
      image: "/assets/projects/smartbin.png",
      demoUrl: "https://drive.google.com/drive/folders/15mF86Ma1l_UmVtWdyNiOQmbMamaw_zC9?usp=drive_link",
      demoLabel: "View Working",
    },
  ];

  const skillsData = [
    {
      title: "Programming",
      skills: ["Python", "C++", "Java", "JavaScript"],
      icon: "💻",
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "Bootstrap", "Flask", "Next.js"],
      icon: "🌐",
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
      icon: "🗄️",
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
      icon: "🛠️",
    },
    {
      title: "UI/UX",
      skills: ["Figma", "Canva", "Adobe XD"],
      icon: "🎨",
    },
    {
      title: "Concepts",
      skills: ["APIs", "Authentication", "CI/CD", "DevSecOps", "System Design"],
      icon: "⚙️",
    },
  ];

  const internships = [
    {
      company: "ISRO",
      position: "Intern",
      period: "Nov 2025 - Dec 2025",
      description: "Development of web application using MVC architecture for HRCG (Java, MVC, JSP, HTML, CSS, JavaScript). Worked with secure internal systems and organizational workflows, following industry-grade standards for documentation, testing, reliability, and SDLC practices.",
      bullets: [
        "Development of web application using MVC architecture for HRCG (Java, MVC, JSP, HTML, CSS, JavaScript)",
        "Worked with secure internal systems and organizational workflows, following industry-grade standards",
      ],
    },
    {
      company: "DRDO",
      position: "Research Intern",
      period: "July 2025 - Aug 2025",
      description: "Contributed to secure data handling research by exploring and testing hashing techniques, database systems, and algorithm optimization aligned with defense-grade requirements.",
      bullets: ["Contributed to secure data handling research; hashing, DB systems, algorithm optimization"],
    },
    {
      company: "Webexa Digital",
      position: "Graphic Design Intern",
      period: "July 2025 - Sept 2025",
      description: "Designed user interfaces and marketing creatives using Figma, Canva, and Adobe tools in collaboration with development teams.",
      bullets: ["Designed UIs and marketing creatives with Figma, Canva, Adobe; collaborated with dev teams"],
    },
    {
      company: "Social Swipes",
      position: "Web Developer Intern",
      period: "Aug 2025 - Sept 2025",
      description: "Developed and customized Shopify themes and built responsive UI components using HTML, CSS, and JavaScript. Assisted in designing, updating, and maintaining the website.",
      bullets: ["Customized Shopify themes; built responsive UI with HTML, CSS, JS; maintained website"],
    },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent! We'll get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden w-full max-w-[100vw]">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 sm:py-5 flex justify-between items-center">
          <a
            href="#"
            className="nav-logo flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl min-h-[48px] items-center"
          >
            <span className="flex h-12 w-12 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-accent/20 text-accent font-display font-bold text-lg sm:text-base transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent/25">
              AC
            </span>
            <span className="hidden sm:inline font-display font-semibold text-foreground text-lg tracking-tight">
              Anchal Chauhan
            </span>
          </a>
          <div className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="nav-link-item relative px-5 py-3.5 rounded-xl text-[1.0625rem] font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset min-h-[48px] flex items-center"
              >
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={downloadResume}
              className="ml-2 px-5 py-3.5 rounded-xl bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-[1.0625rem] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset min-h-[48px] border border-accent/30 hover:border-accent/50"
            >
              Resume
            </button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={downloadResume}
              className="p-3.5 rounded-xl bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105 min-h-[48px] min-w-[48px] flex items-center justify-center border border-accent/30"
              aria-label="Download resume"
            >
              <FileText size={24} />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              className="p-3.5 rounded-xl text-foreground hover:bg-muted/60 transition-all duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center hover:scale-105"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md px-4 py-4">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="nav-link-mobile block px-5 py-4 rounded-xl text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 hover:border-l-4 hover:border-l-accent border-l-4 border-l-transparent transition-all duration-300 min-h-[52px] flex items-center"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section - no background image */}
      <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-14 sm:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h1 className="font-display text-[2.25rem] leading-tight sm:text-5xl md:text-6xl lg:text-7xl mb-5 sm:mb-6">
              Hi, I'm <span className="gradient-text">Anchal Chauhan</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-3 sm:mb-4 font-display-semibold">
              Software Developer · UI/UX Designer · Problem Solver
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-1">
              I build clean interfaces and practical software solutions — from full-stack web apps to security-focused systems.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center items-center">
              <a href="#projects" className="min-h-touch inline-flex items-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base sm:text-lg px-5 py-3 min-h-[48px] transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  View Projects
                </Button>
              </a>
              <a href="#contact" className="min-h-touch inline-flex items-center">
                <Button size="lg" variant="outline" className="border-border text-foreground text-base sm:text-lg px-5 py-3 min-h-[48px] hover:bg-muted/50 hover:border-accent/50 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Contact Me
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                type="button"
                className="border-border text-foreground text-base sm:text-lg px-5 py-3 min-h-[48px] hover:bg-muted/50 hover:border-accent/50 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                onClick={downloadResume}
              >
                Resume
              </Button>
              <a href={CERTIFICATES_URL} target="_blank" rel="noopener noreferrer" className="min-h-touch inline-flex items-center">
                <Button size="lg" variant="outline" className="border-border text-foreground text-base sm:text-lg px-5 py-3 min-h-[48px] gap-2 hover:bg-muted/50 hover:border-accent/50 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <Award size={20} />
                  Certificates
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center gradient-text reveal-on-scroll">About Me</h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start mb-10 sm:mb-14">
            <div className="glass p-6 sm:p-8 reveal-on-scroll rounded-2xl transition-shadow hover:shadow-xl hover:shadow-accent/5">
              <p className="text-base sm:text-lg card-content-text leading-relaxed mb-5 sm:mb-6">
                I am a Computer Science Engineering student passionate about building real-world solutions using web technologies, Python, and system design concepts. I enjoy transforming ideas into functional products and designing intuitive user experiences.
              </p>
              <p className="text-base sm:text-lg card-content-text leading-relaxed">
                I have worked on full-stack applications, automation tools, and secure development workflows, and I am constantly exploring new technologies to enhance my skills and create impactful solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              <div className="glass p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="text-accent shrink-0" size={26} />
                  <h3 className="font-display-semibold text-lg sm:text-xl">Full-Stack Development</h3>
                </div>
                <p className="text-sm sm:text-base card-content-text">Building end-to-end web applications with modern frameworks</p>
              </div>
              <div className="glass p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Palette className="text-accent shrink-0" size={26} />
                  <h3 className="font-display-semibold text-lg sm:text-xl">UI/UX Design</h3>
                </div>
                <p className="text-sm sm:text-base card-content-text">Crafting intuitive and beautiful user interfaces</p>
              </div>
              <div className="glass p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 cursor-default">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="text-accent shrink-0" size={26} />
                  <h3 className="font-display-semibold text-lg sm:text-xl">Problem Solving</h3>
                </div>
                <p className="text-sm sm:text-base card-content-text">Tackling complex challenges with creative solutions</p>
              </div>
            </div>
          </div>

          {/* Skills Section - larger cards, interactive */}
          <div className="reveal-on-scroll">
            <h3 className="font-display-semibold text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-center">Skills & Expertise</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
              {skillsData.map((skillGroup) => (
                <SkillCard
                  key={skillGroup.title}
                  title={skillGroup.title}
                  skills={skillGroup.skills}
                  icon={skillGroup.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - no background image */}
      <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center gradient-text reveal-on-scroll">Featured Projects</h2>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
            {projects.map((project) => (
              <article
                key={project.id}
                className="group glass overflow-hidden rounded-2xl flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 border border-white/10"
              >
                <a href={project.liveUrl && project.liveUrl !== "#" ? project.liveUrl : project.demoUrl || "#"} target="_blank" rel="noopener noreferrer" className="block relative overflow-hidden">
                  <div className="relative h-44 sm:h-52 overflow-hidden bg-secondary/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.liveUrl !== "#" && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent/90 text-accent-foreground text-xs font-medium backdrop-blur-sm">
                          <ExternalLink size={12} /> Live
                        </span>
                      )}
                      {project.demoUrl && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 text-foreground text-xs font-medium backdrop-blur-sm">
                          <Play size={12} /> {project.demoLabel || "Demo"}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
                <div className="p-5 sm:p-6 flex flex-col flex-grow">
                  <h3 className="font-display-semibold text-xl sm:text-2xl md:text-3xl mb-2 text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base card-content-text mb-3 sm:mb-4 flex-grow leading-relaxed line-clamp-3">
                    {project.solution}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="skill-pill inline-flex items-center text-xs sm:text-sm font-medium px-3 py-1.5 sm:py-2 rounded-lg bg-accent/15 text-accent border border-accent/20 hover:bg-accent/25 hover:border-accent/40 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                        <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-1.5 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                          <ExternalLink size={14} /> Live
                        </Button>
                      </a>
                    )}
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                        <Button size="sm" className="bg-accent/15 text-accent hover:bg-accent/25 border border-accent/30 gap-1.5 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                          <Play size={14} /> {project.demoLabel || "Demo"}
                        </Button>
                      </a>
                    )}
                    {project.githubUrl !== "#" && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex">
                        <Button size="sm" variant="outline" className="border-border text-muted-foreground hover:text-accent hover:border-accent/50 hover:bg-accent/10 gap-1.5 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                          <Github size={14} /> Code
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center gradient-text reveal-on-scroll">Internship Experience</h2>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {internships.map((item, index) => (
              <div key={index} className="relative reveal-on-scroll">
                <div className="glass p-5 sm:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 border-l-4 border-l-accent">
                  <h3 className="font-display-semibold text-lg sm:text-xl md:text-2xl mb-1">{item.company}</h3>
                  <p className="text-accent text-sm sm:text-base font-medium mb-1">{item.position}</p>
                  <p className="text-muted-foreground text-sm sm:text-base mb-2 sm:mb-3">{item.period}</p>
                  {item.bullets?.length ? (
                    <ul className="card-content-text list-disc list-inside space-y-1 text-sm sm:text-base">
                      {item.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="card-content-text text-sm sm:text-base">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section id="hire" className="py-12 sm:py-16 md:py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass p-8 sm:p-10 md:p-12 text-center max-w-3xl mx-auto rounded-2xl reveal-on-scroll transition-all duration-300 hover:shadow-xl hover:shadow-accent/5">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 gradient-text">Looking to Hire?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              I'm actively seeking opportunities as an entry-level software engineer and intern. With a strong foundation in full-stack development, UI/UX design, and secure coding practices, I'm ready to contribute to your team and grow alongside your organization.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
              <a href={`mailto:${EMAIL}`}>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  <Mail size={20} />
                  Get in Touch
                </Button>
              </a>
              <a href={COVER_LETTER_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted/50 hover:border-accent/50 transition-transform hover:scale-[1.02] active:scale-[0.98] gap-2">
                  <FileCheck size={20} />
                  Cover Letter
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted/50 hover:border-accent/50 transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  View My Work
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center gradient-text reveal-on-scroll">Get In Touch</h2>

          <div className="max-w-2xl mx-auto">
            <div className="form-card p-6 sm:p-8 mb-6 sm:mb-8 rounded-2xl transition-shadow hover:shadow-lg focus-within:shadow-lg focus-within:shadow-accent/5">
              <form onSubmit={handleContactSubmit} className="space-y-5 sm:space-y-6 contact-form">
                <div>
                  <label className="block text-base font-medium mb-2 text-foreground">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="contact-input w-full border border-border rounded-lg px-4 py-3 text-base min-h-[48px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium mb-2 text-foreground">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="contact-input w-full border border-border rounded-lg px-4 py-3 text-base min-h-[48px] text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-base font-medium mb-2 text-foreground">Message</label>
                  <textarea
                    placeholder="Your message here..."
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="contact-input w-full border border-border rounded-lg px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-shadow resize-y min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base min-h-[48px] disabled:opacity-50 transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={16} />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact details: Email, Phone, Certificates */}
            <div className="glass p-5 sm:p-6 mb-5 sm:mb-6 rounded-2xl">
              <p className="text-base sm:text-lg text-muted-foreground mb-3 text-center">Reach me directly</p>
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 sm:items-center">
                <a href={`mailto:${EMAIL}`} className="flex items-center justify-center sm:justify-start gap-2 text-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg min-h-[44px] py-2">
                  <Mail size={22} className="text-accent shrink-0" />
                  <span className="text-base font-medium break-all">{EMAIL}</span>
                </a>
                <a href={`tel:${PHONE}`} className="flex items-center justify-center sm:justify-start gap-2 text-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg min-h-[44px] py-2">
                  <Phone size={22} className="text-accent shrink-0" />
                  <span className="text-base font-medium">{PHONE}</span>
                </a>
                <a href={CERTIFICATES_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-2 text-foreground hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg min-h-[44px] py-2">
                  <Award size={22} className="text-accent shrink-0" />
                  <span className="text-base font-medium">Certificates</span>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="glass p-5 sm:p-6 rounded-2xl flex justify-center items-center min-h-[56px] sm:min-h-[72px] hover:bg-accent/20 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" title="GitHub">
                <Github size={28} className="sm:w-8 sm:h-8 text-accent" />
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="glass p-5 sm:p-6 rounded-2xl flex justify-center items-center min-h-[56px] sm:min-h-[72px] hover:bg-accent/20 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" title="LinkedIn">
                <Linkedin size={28} className="sm:w-8 sm:h-8 text-accent" />
              </a>
              <a href={`mailto:${EMAIL}`} className="glass p-5 sm:p-6 rounded-2xl flex justify-center items-center min-h-[56px] sm:min-h-[72px] hover:bg-accent/20 hover:scale-105 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent" title="Email">
                <Mail size={28} className="sm:w-8 sm:h-8 text-accent" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 sm:py-8 mt-12 sm:mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-base">
          <p>© 2026 Anchal Chauhan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
