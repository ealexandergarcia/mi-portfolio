'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#e5ced6] to-[#b29fa3] text-black">
      <Hero />
      <About />
      <MissionVision/>
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <div className="z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 relative"
        >
          <div className="w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-xl opacity-50"></div>
          <img
            src="/images/1.png"
            alt="Your Profile"
            className="rounded-full w-64 h-64 object-cover mx-auto shadow-lg border-4 border-white relative z-10"
          />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl font-bold mb-4"
        >
          Jeyhel Angelina Leal
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl mb-8"
        >
          Backend Developer
        </motion.p>
        <Button variant="ghost" size="lg">
          Explora mi trabajo
        </Button>
      </div>
    </section>
  )
}

function About() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-6">Sobre Mí</h2>
        <p className="text-xl leading-relaxed">
          Programadora especializada en desarrollo backend, con conocimiento en aplicaciones web con node.js. Mis ganas de aprender
          y ser proactiva me impulsan a conseguir los objetivos planteados a nivel personal y profesional.
          Fomento la resolucion eficaz de problemas y habilidades sociemocionales que me permitan expresar y desempeñar adecuadamente 
          las labores encomendadas y generando nuevas ideas.
        </p>
      </motion.div>
    </section>
  )
}

function MissionVision() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white text-black py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Misión y Visión
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Misión</h3>
            <p className="text-lg">
              Mi misión es transformar ideas complejas en interfaces intuitivas y 
              hermosas que mejoren la vida de los usuarios, combinando creatividad 
              y tecnología para resolver problemas de diseño.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-4">Visión</h3>
            <p className="text-lg">
              Aspiro a ser un líder en la innovación de diseño de interfaces, 
              impulsando la adopción de prácticas de diseño centradas en el usuario 
              y contribuyendo a la creación de un mundo digital más accesible e inclusivo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const projects = [
    { id: 1, title: 'App Redesign', description: 'Rediseño completo de una aplicación móvil para mejorar la experiencia del usuario.' },
    { id: 2, title: 'E-commerce UI', description: 'Diseño de interfaz para una plataforma de comercio electrónico con enfoque en la conversión.' },
    { id: 3, title: 'Dashboard UX', description: 'Mejora de la experiencia de usuario para un dashboard de análisis de datos.' },
  ]

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Proyectos
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <Button variant="link" className="mt-4">Ver más</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const technicalSkills = ['UI Design', 'UX Research', 'Prototyping', 'HTML/CSS', 'JavaScript', 'React']
  const softSkills = ['Comunicación', 'Trabajo en equipo', 'Resolución de problemas', 'Adaptabilidad', 'Empatía', 'Creatividad']

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center bg-white text-black py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Habilidades
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Habilidades Técnicas</h3>
            <div className="flex flex-wrap gap-4">
              {technicalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#e5ced6] px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6">Habilidades Blandas</h3>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-[#e5ced6] px-4 py-2 rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-20">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center px-4"
      >
        <h2 className="text-4xl font-bold mb-6 ">Contacto</h2>
        <p className="text-xl mb-8">
          ¿Interesado en trabajar juntos? ¡Contáctame!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button size="lg" className=" text-white hover:bg-pink-600">
            <Mail className="mr-2 h-4 w-4" /> Enviar Email
          </Button>
          <Button size="lg" className=" border-pink-300 hover:bg-pink-600">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Button>
          <Button size="lg" className=" border-pink-300 hover:bg-pink-600">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

function useInView(options) {
  const [ref, setRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, options)

    if (ref) {
      observer.observe(ref)
    }

    return () => {
      if (ref) {
        observer.unobserve(ref)
      }
    }
  }, [ref, options])

  return [setRef, inView]
}