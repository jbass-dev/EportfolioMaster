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
              href="https://github.com/babyboy198331-coder"
              target="_blank"
              rel="noreferrer"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-b-1182183ba/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BjlUJRY17SeubkCPaC9c%2BEA%3D%3D"
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
              href="mailto:babyboy198331@gmail.com"
              className="footer__social--link link__hover-effect link__hover-effect--white"
              onClick={(e) => { e.preventDefault(); toggleModal() }}
            >
              Email
            </a>
            <button
              className="footer__social--link link__hover-effect link__hover-effect--white"
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: 0 }}
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
