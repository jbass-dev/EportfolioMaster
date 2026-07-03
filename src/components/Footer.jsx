export default function Footer({ toggleModal }) {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure>
            <img className="footer__logo--img" src="/assets/jb logo.jpg" alt="" />
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/jbass-dev"
              target="_blank"
              rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-bass-1182183ba/"
              target="_blank"
              rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              LinkedIn
            </a>
            <a
              href="/Document.pdf"
              target="_blank"
              rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Resume
            </a>
            <a
              href="mailto:bassjohn159@yahoo.com"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              onClick={(e) => { e.preventDefault(); toggleModal() }}
            >
              Email
            </a>
            <button
              className="footer__social--link footer__social--button link__hover-effect link__hover-effect--white"
              onClick={toggleModal}
            >
              Contact
            </button>
          </div>
          <div className="footer__copyright">Copyright © 2026 John Bass</div>
        </div>
      </div>
    </footer>
  )
}
