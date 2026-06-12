export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Here are some of my <span className="blue">projects:</span>
          </h2>
          <ul className="project__list">

            {/* Skinstric AI */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder">
                  <div className="project__mockup mockup-skinstric">
                    <div className="mockup__browser">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-skinstric__nav">
                      <strong>SKINSTRIC</strong>
                      <span>[ INTRO ]</span>
                    </div>
                    <div className="mockup-skinstric__stage">
                      <div className="mockup-skinstric__diamond"></div>
                      <div className="mockup-skinstric__diamond mockup-skinstric__diamond--inner"></div>
                      <div className="mockup-skinstric__center">
                        <p>CLICK TO TYPE</p>
                        <strong>Introduce Yourself</strong>
                      </div>
                    </div>
                    <div className="mockup-skinstric__corners">
                      <span>◇ BACK</span>
                      <span>PROCEED ◇</span>
                    </div>
                  </div>
                </div>
                <div className="project__wrapper--background"></div>
                <div className="project__description">
                  <h3 className="project__description--title">Skinstric AI</h3>
                  <h4 className="project__description--sub-title">
                    React, Vite, REST APIs, getUserMedia, Responsive CSS
                  </h4>
                  <p className="project__description--para">
                    An AI skin-analysis platform built to a pixel-perfect Figma
                    spec. Users take a live selfie or upload a photo, the image
                    is sent base64-encoded to an AI API, and the results render
                    in an interactive demographics dashboard with editable
                    confidence scores — fully responsive across desktop,
                    tablet, and mobile.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/babyboy198331-coder/Skinstric-Internship1"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="Skinstric AI GitHub repository"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://skinstric-internship1.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="Skinstric AI live site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* OfferBound */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--dark">
                  <div className="project__mockup mockup-ob">
                    <div className="mockup__browser">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-ob__nav">
                      <strong>Offer<em>Bound</em></strong>
                      <span></span>
                    </div>
                    <div className="mockup-ob__stats">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-ob__rows">
                      <span className="mockup-ob__row"></span>
                      <span className="mockup-ob__row mockup-ob__row--amber"></span>
                      <span className="mockup-ob__row mockup-ob__row--green"></span>
                    </div>
                  </div>
                </div>
                <div className="project__wrapper--background"></div>
                <div className="project__description">
                  <h3 className="project__description--title">OfferBound</h3>
                  <h4 className="project__description--sub-title">
                    React, Vite, Firebase Auth, Cloud Firestore
                  </h4>
                  <p className="project__description--para">
                    An original job-application tracker I designed and built end
                    to end — Google sign-in, per-user Firestore data secured by
                    rules, a live stats dashboard with response rates, and
                    automatic follow-up reminders. Deployed to production on
                    Vercel.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://offerbound.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="OfferBound live site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* NFT Marketplace */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--dark">
                  <div className="project__mockup mockup-store">
                    <div className="mockup__browser">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-store__nav">
                      <strong>NFT Market</strong>
                      <span></span>
                    </div>
                    <div className="mockup-store__grid">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-store__cta"></div>
                  </div>
                </div>
                <div className="project__wrapper--background"></div>
                <div className="project__description">
                  <h3 className="project__description--title">NFT Marketplace</h3>
                  <h4 className="project__description--sub-title">
                    React, Firebase, Axios, React Router
                  </h4>
                  <p className="project__description--para">
                    A deployed React marketplace project built with routing,
                    reusable components, API requests, and Firebase integration.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/babyboy198331-coder/john-internship.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="NFT Marketplace GitHub repository"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://john-internship-sj1k.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="NFT Marketplace live site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* ai-chat-interface */}
            <li className="project">
              <div className="project__wrapper">
                <div className="project__placeholder project__placeholder--ai">
                  <div className="project__mockup mockup-ai">
                    <div className="mockup__browser">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-ai__layout">
                      <div className="mockup-ai__sidebar">
                        <strong>ai-chat-interface</strong>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="mockup-ai__chat">
                        <div className="mockup-ai__bubble mockup-ai__bubble--user"></div>
                        <div className="mockup-ai__bubble"></div>
                        <div className="mockup-ai__bubble mockup-ai__bubble--user" style={{ width: '55%' }}></div>
                        <div className="mockup-ai__bubble" style={{ width: '70%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project__wrapper--background"></div>
                <div className="project__description">
                  <h3 className="project__description--title">ai-chat-interface</h3>
                  <h4 className="project__description--sub-title">
                    Next.js, React, TypeScript, Tailwind CSS
                  </h4>
                  <p className="project__description--para">
                    A deployed AI chat interface clone built with Next.js,
                    modern React, TypeScript, and responsive Tailwind styling.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/babyboy198331-coder/ai-chat-interface.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="ai-chat-interface GitHub repository"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://deep-seek-clone-wine.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="ai-chat-interface live site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* Summarist */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--reader">
                  <div className="project__mockup mockup-reader">
                    <div className="mockup__browser">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-reader__sidebar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-reader__content">
                      <strong>Summarist</strong>
                      <p></p>
                      <p></p>
                      <div></div>
                    </div>
                  </div>
                </div>
                <div className="project__wrapper--background"></div>
                <div className="project__description">
                  <h3 className="project__description--title">Summarist</h3>
                  <h4 className="project__description--sub-title">
                    Next.js, React, TypeScript, Redux, Firebase, Stripe
                  </h4>
                  <p className="project__description--para">
                    A deployed reading and subscription-style app built with
                    modern Next.js, state management, authentication tooling,
                    and payment integration.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/babyboy198331-coder/summarist.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="Summarist GitHub repository"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://summarist-vert.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="Summarist live site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* Cinegalaxy */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--cinema">
                  <div className="project__mockup mockup-cinema">
                    <div className="mockup__browser">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <div className="mockup-cinema__header">
                      <strong>Cinegalaxy</strong>
                      <span>Movies</span>
                    </div>
                    <div className="mockup-cinema__grid">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="project__wrapper--background"></div>
                <div className="project__description">
                  <h3 className="project__description--title">Cinegalaxy</h3>
                  <h4 className="project__description--sub-title">
                    Next.js, React, TypeScript, Tailwind CSS
                  </h4>
                  <p className="project__description--para">
                    A deployed movie browsing app built with Next.js, modern
                    React, responsive styling, and a production-ready Vercel
                    workflow.
                  </p>
                  <div className="project__description--links">
                    <a
                      href="https://github.com/babyboy198331-coder/IMDB-CLONE.git"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="Cinegalaxy GitHub repository"
                    >
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://imdb-clone-one-theta.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="project__description--link"
                      aria-label="Cinegalaxy live site"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </section>
  )
}
