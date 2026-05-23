import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Works from '../components/Works'
import LearningHistory from '../components/LearningHistory'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      el?.scrollIntoView({ behavior: 'instant' })
    }
  }, [location.state])

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      <LearningHistory />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
