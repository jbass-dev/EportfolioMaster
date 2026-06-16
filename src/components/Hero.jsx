import Ticker from './Ticker'

export default function Hero({ toggleModal }) {
  return (
    <>
      <header className="header">
        <div className="hero__left">
          <p className="hero__eyebrow">Frontend Software Engineer</p>
          <h1 className="title">
            <span className="title--outline">Hello,</span>
            <span className="title--accent">I'm John.</span>
          </h1>
          <p className="header__para">
            I build responsive, accessible web applications with React, Next.js, and TypeScript —
            reusable component libraries, clean code, CI/CD-deployed, shipped on time.{' '}
            <span className="blue click" onClick={toggleModal} style={{cursor:'pointer', fontStyle:'italic'}}>More about me →</span>
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary" title="Jump to my projects section">View my work</a>
            <button className="btn btn--ghost" onClick={toggleModal} title="Open the contact form to send me a message">Get in touch</button>
            <div className="social__list">
              <a href="https://www.linkedin.com/in/john-b-1182183ba/" target="_blank" rel="noreferrer" className="social__link click" aria-label="LinkedIn" title="Visit my LinkedIn profile">
                <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="https://github.com/babyboy198331-coder" target="_blank" rel="noreferrer" className="social__link click" aria-label="GitHub" title="Visit my GitHub profile">
                <i className="fa-brands fa-github" aria-hidden="true"></i>
              </a>
              <a href="/Document.pdf" target="_blank" rel="noreferrer" className="social__link click" aria-label="Resume" title="Open my resume PDF">
                <i className="fa-regular fa-file-pdf" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="stats__row">
            <div className="stats__item">
              <span className="stats__label">Based</span>
              <span className="stats__value">Coyle, Oklahoma</span>
            </div>
            <div className="stats__item">
              <span className="stats__label">Focus</span>
              <span className="stats__value">React · Next.js · TS</span>
            </div>
            <div className="stats__item">
              <span className="stats__label">Lighthouse</span>
              <span className="stats__value">97 / 100 Avg.</span>
            </div>
            <div className="stats__item">
              <span className="stats__label">Status</span>
              <span className="stats__value stats__value--green">Open to Roles</span>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <a href="https://offerbound.vercel.app" target="_blank" rel="noreferrer" className="hero__featured-card" title="View the live OfferBound app">
            <div className="hero__featured-top">
              <span className="hero__featured-tag">Original Build</span>
              <span className="hero__featured-link">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </span>
            </div>
            <div className="hero__featured-screen">
              <div className="mockup__browser">
                <span></span><span></span><span></span>
              </div>
              <img
                src="/assets/screenshot-1781315678461.png"
                alt="OfferBound app"
                className="hero__featured-img"
              />
            </div>
            <div className="hero__featured-info">
              <h2 className="hero__featured-title">OfferBound</h2>
              <p className="hero__featured-stack">React · Firebase · Firestore</p>
              <p className="hero__featured-desc">
                A full-stack job-application tracker I designed and built from scratch —
                Google auth, live stats dashboard, and follow-up reminders.
              </p>
            </div>
          </a>
        </div>
      </header>
      <Ticker />
    </>
  )
}
