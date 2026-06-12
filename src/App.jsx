import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    emailjs.init('cbM7V2aKMo5f0HbPc')
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark-theme', isDark)
  }, [isDark])

  useEffect(() => {
    if (isModalOpen) {
      window.scrollTo(0, 0)
      document.body.style.overflow = 'hidden'
      document.body.classList.add('modal--open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('modal--open')
    }
  }, [isModalOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <main>
        <section id="landing-page">
          <Nav toggleModal={openModal} toggleContrast={() => setIsDark(d => !d)} />
          <Hero toggleModal={openModal} />
          <button className="mail__btn click" onClick={openModal} aria-label="Open contact form">
            <i className="fa-regular fa-envelope" aria-hidden="true"></i>
          </button>
          <a href="#projects" className="scroll" aria-label="Scroll to projects">
            <div className="scroll__icon click"></div>
          </a>
        </section>
        <Projects />
      </main>
      <Footer toggleModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
