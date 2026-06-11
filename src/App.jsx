import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Shapes from './components/Shapes'

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

  function moveBackground(e) {
    const shapes = document.querySelectorAll('.shape')
    const factor = 1 / 20
    const x = e.clientX * factor
    const y = e.clientY * factor
    shapes.forEach((shape, i) => {
      const dir = i % 2 !== 0 ? -1 : 1
      shape.style.transform = `translate(${x * dir}px, ${y * dir}px)`
    })
  }

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <section id="landing-page" onMouseMove={moveBackground}>
        <Nav toggleModal={openModal} toggleContrast={() => setIsDark(d => !d)} />
        <Hero toggleModal={openModal} />
        <button className="mail__btn click" onClick={openModal}>
          <i className="fa-regular fa-envelope"></i>
        </button>
        <a href="#projects" className="scroll">
          <div className="scroll__icon click"></div>
        </a>
        <Shapes />
      </section>
      <Projects />
      <Footer toggleModal={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}
