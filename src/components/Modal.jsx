import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

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
      alert('The email service is temporarily unavailable. Please contact me directly on bassjohn159@yahoo.com')
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
            I'm a builder by nature. Before code, I spent{' '}
            <b className="blue">seven years leading a team</b>{' '}
            — managing operations, training staff, and hitting deadlines
            where precision wasn't optional.
            <br />
            Now I build responsive, accessible web apps with{' '}
            <b className="blue">React, Next.js, and TypeScript</b> — reusable
            component libraries, CI/CD pipelines via GitHub Actions and Vercel,
            and projects like an AI skin-analysis platform during my internship
            at Skinstric. Lately I've been pushing into the backend and infra
            side too: designing schemas and writing queries in{' '}
            <b className="blue">PostgreSQL</b>, deploying services on{' '}
            <b className="blue">Railway and Render</b>, and using{' '}
            <b className="blue">Cloudflare R2</b> for object storage on
            StoryForge. I've also built real auth from scratch on Mini Expense
            Tracker — JWT access/refresh token rotation, bcrypt hashing, and
            one-time password-reset tokens — rather than dropping in an
            off-the-shelf auth provider. Frontend Simplified gave me the
            foundation — everything past that,{' '}
            <b className="blue">I've learned by building it myself</b>.
            Clean code, pixel-perfect layouts, shipped on time.
          </p>
        </div>

        <div className="modal__half modal__contact">
          <h3 className="modal__title modal__title--contact">Let's have a chat!</h3>
          <h3 className="modal__sub-title modal__subtitle---contact">
            I am currently open to new opportunities.
          </h3>
          <a href="mailto:bassjohn159@yahoo.com" className="modal__email">
            bassjohn159@yahoo.com
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
