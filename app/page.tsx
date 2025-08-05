"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Code, Github, Mail, ChevronDown, Lock, Cpu, Network, Bug, Target, Award, MapPin } from "lucide-react"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const skills = [
    { name: "Game Development", level: 65, icon: Code },
    { name: "Active Directory Basics", level: 65, icon: Network },
    { name: "Penetration Testing", level: 60, icon: Shield },
    { name: "C Programming", level: 45, icon: Bug },
    { name: "Web Application Security", level: 30, icon: Lock },
    { name: "OS Development", level: 20, icon: Cpu },
  ]

  const timeline = [
    { year: "2017", age: "8", event: "Started coding with Scratch Jr", icon: Code },
    { year: "2019", age: "10", event: "Moved to Unity & Game Development", icon: Code },
    { year: "2021", age: "13", event: "Major Unreal Engine project (lost to misclick)", icon: Target },
    { year: "2023", age: "15", event: "Found my passion in Cybersecurity", icon: Shield },
    { year: "2024", age: "16", event: "Started learning ErfanOS development", icon: Cpu },
    { year: "2025", age: "15", event: "Studying for PNPT certification", icon: Award },
  ]

  const projects = [
    {
      title: "ErfanOS",
      description:
        "I'm working on building a secure operating system that's both safe and easy to use. It's a big learning project for me, with plans for a built-in VM so users can run their favorite OS securely.",
      tech: ["C", "Assembly", "Learning Kernel Dev"],
      status: "Learning & Building",
      icon: Cpu,
    },
    {
      title: "Malware Development Learning",
      description:
        "Studying malware development with C to understand how threats work. This helps me become a better defender and is part of my journey toward red teaming.",
      tech: ["C", "Windows APIs", "Basic Concepts"],
      status: "Learning",
      icon: Bug,
    },
    {
      title: "PNPT Preparation",
      description:
        "Currently studying for my Practical Network Penetration Tester certification. Working through labs and improving my Active Directory and web application testing skills.",
      tech: ["Penetration Testing", "AD Basics", "Web Security"],
      status: "In Progress",
      icon: Network,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section className="relative h-screen flex items-center justify-center" style={{ opacity, scale }}>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1)_0%,transparent_70%)]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 mb-6">
              <Shield className="w-4 h-4 text-yellow-500" />
              <span className="text-yellow-500 text-sm font-medium">Aspiring Red Teamer</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-500 to-white bg-clip-text text-transparent"
          >
            Erfan Keyhani
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Aspiring Penetration Tester • Learning Malware Development • Building ErfanOS
            <br />
            <span className="text-yellow-500">2 Years Learning • Age 15</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Available for Internships
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
              onClick={() => window.open("https://github.com/erfankeyhani-1", "_blank")}
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-yellow-500 animate-bounce" />
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-white mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900/50 border-yellow-500/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p className="text-lg">
                      Hi! I'm 15 and have been learning cybersecurity for the past 2 years. My coding journey started
                      when I was 8 with Scratch Jr, and I've tried many different paths - but cybersecurity is the one
                      that really stuck with me.
                    </p>
                    <p>
                      Right now I'm working hard to get my{" "}
                      <span className="text-yellow-500 font-semibold">PNPT certification</span> and planning to tackle
                      OSED after that. I'm still learning, but I'm really passionate about this field and committed to
                      getting better every day.
                    </p>
                    <p>
                      I'm getting the hang of{" "}
                      <span className="text-yellow-500 font-semibold">Active Directory basics</span> and starting to
                      learn <span className="text-yellow-500 font-semibold">malware development with C</span>. My web
                      hacking skills need work, but I'm improving as I study for my PNPT. My dream is to become a Red
                      Teamer one day.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/30 p-6 text-center">
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">2+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </Card>
                <Card className="bg-gradient-to-br from-yellow-500/10 to-transparent border-yellow-500/30 p-6 text-center">
                  <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">AU</div>
                  <div className="text-sm text-gray-400">Australia Based</div>
                </Card>
              </div>

              <Card className="bg-gray-900/50 border-yellow-500/20 p-6">
                <h3 className="text-xl font-semibold text-yellow-500 mb-4">Currently Learning</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-yellow-500" />
                    <span>PNPT Certification Prep</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bug className="w-5 h-5 text-yellow-500" />
                    <span>Malware Development Basics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-yellow-500" />
                    <span>Building ErfanOS (Learning Project)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-yellow-500" />
                    <span>Looking for Learning Opportunities</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-white mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-yellow-500/20 backdrop-blur-sm p-6 hover:border-yellow-500/40 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-yellow-500/10">
                      <skill.icon className="w-6 h-6 text-yellow-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <div className="text-sm text-gray-400">{skill.level}% Proficiency</div>
                    </div>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-gray-800">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </Progress>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-white mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-yellow-500/20 backdrop-blur-sm h-full hover:border-yellow-500/40 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-yellow-500/10 group-hover:bg-yellow-500/20 transition-colors">
                        <project.icon className="w-6 h-6 text-yellow-500" />
                      </div>
                      <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-white mx-auto mb-8"></div>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-500 to-transparent"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="bg-gray-900/50 border-yellow-500/20 backdrop-blur-sm p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-yellow-500" />
                      <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                        Age {item.age}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-yellow-500 mb-2">{item.year}</h3>
                    <p className="text-gray-300">{item.event}</p>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-black"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-white mx-auto mb-8"></div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm looking for internship opportunities in Australia where I can learn from experienced professionals. I
              know I have a lot to learn, but I'm eager, dedicated, and ready to work hard.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                onClick={() => window.open("https://github.com/erfankeyhani-1", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Profile
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-yellow-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Erfan Keyhani. Aspiring Penetration Tester • Learning Every Day</p>
        </div>
      </footer>
    </div>
  )
}
