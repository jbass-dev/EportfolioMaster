import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const LANGUAGES = [
  { src: '/assets/html.png', alt: 'HTML', name: 'HTML' },
  { src: '/assets/css.png', alt: 'CSS', name: 'CSS' },
  { src: '/assets/icons8-javascript-logo-100.png', alt: 'JavaScript', name: 'JavaScript' },
  { src: '/assets/react.png', alt: 'React', name: 'React' },
  { src: '/assets/nextjs.jpg', alt: 'Next.js', name: 'Next.js' },
  { src: '/assets/typescript.png', alt: 'TypeScript', name: 'TypeScript' },
  { src: '/assets/tailwind.png', alt: 'Tailwind CSS', name: 'Tailwind' },
  { src: '/assets/firebase.png', alt: 'Firebase', name: 'Firebase' },
  { src: '/assets/redux.png', alt: 'Redux', name: 'Redux' },
  { src: '/assets/stripe.png', alt: 'Stripe', name: 'Stripe' },
  { src: '/assets/github.png', alt: 'GitHub', name: 'GitHub' },
  { src: '/assets/vercel.png', alt: 'Vercel', name: 'Vercel' },
]

export default function Modal({ isOpen, onClose }) {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      await emailjs.sendForm('service_ippb0pp', 'template_8dp2wge', formRef.current, 'cbM7V2aKMo5f0HbPc')
      setStatus('success')
    } catch {
      setStatus('idle')
      alert('The email service is temporarily unavailable. Please contact me directly on babyboy198331@gmail.com')
    }
  }

  return (
    <>
      <div className="modal__backdrop click" onClick={onClose}></div>
      <div className="modal">
        <button
          className="modal__close click"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <i className="fa-solid fa-xmark" aria-hidden="true"></i>
        </button>

        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">Here's a bit about me.</h3>
          <h4 className="modal__sub-title modal__sub-title--about">Frontend Software Engineer.</h4>
          <p className="modal__para">
            I am studying{' '}
            <b className="blue">Frontend development through Frontend Simplified.</b>{' '}
            I am excited for this next chapter in my career.
            <br />
            I am building a strong foundation in{' '}
            <b className="blue">HTML, CSS, JavaScript, React, Next.js, and TypeScript</b>{' '}
            while creating projects that focus on thoughtful layouts, clean code,
            and useful user experiences.
          </p>
          <div className="modal__languages">
            {LANGUAGES.map((lang) => (
              <figure key={lang.alt} className="modal__language">
                <img className="modal__language--img" src={lang.src} alt={lang.alt} />
                <span className="language__name">{lang.name}</span>
              </figure>
            ))}
          </div>
        </div>

        <div className="modal__half modal__contact">
          <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
          <h3 className="modal__sub-title modal__subtitle---contact">
            I am currently open to new opportunities.
          </h3>
          <a href="mailto:babyboy198331@gmail.com" className="modal__email">
            babyboy198331@gmail.com
          </a>
          <form id="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="form__item">
              <label className="form__item--label" htmlFor="contact__name">Name</label>
              <input id="contact__name" className="input" name="user__name" type="text" />
            </div>
            <div className="form__item">
              <label className="form__item--label" htmlFor="contact__email">Email</label>
              <input id="contact__email" className="input" name="user__email" type="email" />
            </div>
            <div className="form__item">
              <label className="form__item--label" htmlFor="contact__message">Message</label>
              <textarea id="contact__message" className="input" name="message"></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </form>
          <div className={`modal__overlay modal__overlay--loading${status === 'loading' ? ' modal__overlay--visible' : ''}`}>
            <i className="fa-solid fa-spinner" aria-hidden="true"></i>
          </div>
          <div className={`modal__overlay modal__overlay--success${status === 'success' ? ' modal__overlay--visible' : ''}`}>
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
        </div>
      </div>
    </>
  )
}
