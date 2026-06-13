import Ticker from './Ticker'

export default function Hero({ toggleModal }) {
  return (
    <header className="header">
      <h1 className="title">
        <span className="title--outline">Hello,</span>
        <span className="title--accent">I'm John.</span>
      </h1>
      <p className="header__para">
        I'm a <b className="blue">Frontend Software Engineer</b>{' '}
        building responsive web applications with modern JavaScript tools.
        <br />
        Here's a bit{' '}
        <b className="blue click" onClick={toggleModal}>about me.</b>
      </p>
      <div className="hero__actions">
        <a href="#projects" className="btn btn--primary">View my work</a>
        <button className="btn btn--ghost" onClick={toggleModal}>Get in touch</button>
        <div className="social__list">
          <a
            href="https://www.linkedin.com/in/john-b-1182183ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BjlUJRY17SeubkCPaC9c%2BEA%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="social__link click"
            aria-label="LinkedIn profile"
          >
            <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
          </a>
          <a
            href="https://github.com/babyboy198331-coder"
            target="_blank"
            rel="noreferrer"
            className="social__link click"
            aria-label="GitHub profile"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <a
            href="/Document.pdf"
            target="_blank"
            rel="noreferrer"
            className="social__link click"
            aria-label="Resume (PDF)"
          >
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
      <Ticker />
    </header>
  )
}
