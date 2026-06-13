export default function Nav({ toggleModal, toggleContrast }) {
  return (
    <nav>
      <figure>
        <img id="personal-logo" src="/assets/jb logo.jpg" alt="" />
      </figure>
      <span className="nav__available">
        <span className="nav__available--dot"></span>
        Available for work
      </span>
      <ul className="nav__link--list">
        <li className="nav__link">
          <a href="#projects" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            Work
          </a>
        </li>
        <li className="nav__link click" onClick={toggleModal}>
          <a href="#" className="nav__link--anchor link__hover-effect link__hover-effect--black">
            About
          </a>
        </li>
        <li className="nav__link" onClick={toggleContrast}>
          <a
            href="#"
            className="nav__link--anchor link__hover-effect link__hover-effect--black"
            aria-label="Toggle light mode"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>
          </a>
        </li>
        <li className="nav__link click">
          <button className="nav__cta" onClick={toggleModal}>
            Say Hi ↗
          </button>
        </li>
      </ul>
    </nav>
  )
}
