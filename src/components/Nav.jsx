import { useState } from 'react'

export default function Nav({ toggleModal }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const handleModal = () => {
    closeMenu()
    toggleModal()
  }

  return (
    <>
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
          <li className="nav__link click" onClick={handleModal}>
            <a href="#" className="nav__link--anchor link__hover-effect link__hover-effect--black">
              About
            </a>
          </li>
          <li className="nav__link click">
            <button className="nav__cta" onClick={handleModal}>
              Say Hi ↗
            </button>
          </li>
        </ul>

        {/* Burger button — mobile only */}
        <button
          className={`nav__burger${menuOpen ? ' nav__burger--open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav__drawer${menuOpen ? ' nav__drawer--open' : ''}`}>
        <a href="#projects" className="nav__drawer--link" onClick={closeMenu}>Work</a>
        <button className="nav__drawer--link" onClick={handleModal}>About</button>
        <button className="nav__drawer--cta" onClick={handleModal}>Say Hi ↗</button>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav__backdrop" onClick={closeMenu} />}
    </>
  )
}
