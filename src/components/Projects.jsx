export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="section__header">
            <span className="section__number">01</span>
            <h2 className="section__title">Selected Work</h2>
          </div>
          <ul className="project__list">

            {/* Skinstric AI — full-width (first) */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/screenshot-1781316476958.png"
                      alt="Skinstric AI screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
                <div className="project__description">
                  <span className="project__badge">Internship</span>
                  <h3 className="project__description--title">Skinstric AI</h3>
                  <h4 className="project__description--sub-title">
                    React, Vite, REST APIs, getUserMedia, Responsive CSS
                  </h4>
                  <p className="project__description--para">
                    An AI skin-analysis platform built to a pixel-perfect Figma
                    spec using a reusable component library. Users take a live
                    selfie or upload a photo, the image is sent base64-encoded
                    to an AI API, and the results render in an interactive
                    demographics dashboard with editable confidence scores —
                    fully responsive across desktop, tablet, and mobile, and
                    shipped through a CI/CD pipeline to Vercel.
                  </p>
                  <div className="project__description--links">
                    <a href="https://github.com/babyboy198331-coder/Skinstric-Internship1" target="_blank" rel="noreferrer" className="project__description--link" aria-label="Skinstric AI GitHub" title="View Skinstric AI source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://skinstric-internship1.vercel.app" target="_blank" rel="noreferrer" className="project__description--link" aria-label="Skinstric AI live" title="Open the live Skinstric AI app">
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* NFT Marketplace — side by side with ai-chat */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/screenshot-1781316122786.png"
                      alt="NFT Marketplace screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
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
                    <a href="https://github.com/babyboy198331-coder/john-internship.git" target="_blank" rel="noreferrer" className="project__description--link" aria-label="NFT Marketplace GitHub" title="View NFT Marketplace source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://john-internship-sj1k.vercel.app" target="_blank" rel="noreferrer" className="project__description--link" aria-label="NFT Marketplace live" title="Open the live NFT Marketplace app">
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* ai-chat-interface — side by side with NFT */}
            <li className="project">
              <div className="project__wrapper">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/screenshot-1781315851205.png"
                      alt="ai-chat-interface screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
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
                    <a href="https://github.com/babyboy198331-coder/ai-chat-interface.git" target="_blank" rel="noreferrer" className="project__description--link" aria-label="ai-chat GitHub" title="View ai-chat-interface source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://deep-seek-clone-wine.vercel.app/" target="_blank" rel="noreferrer" className="project__description--link" aria-label="ai-chat live" title="Open the live ai-chat-interface app">
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* Cinegalaxy */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/screenshot-1781315769876.png"
                      alt="Cinegalaxy screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
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
                    <a href="https://github.com/babyboy198331-coder/IMDB-CLONE.git" target="_blank" rel="noreferrer" className="project__description--link" aria-label="Cinegalaxy GitHub" title="View Cinegalaxy source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://imdb-clone-one-theta.vercel.app" target="_blank" rel="noreferrer" className="project__description--link" aria-label="Cinegalaxy live" title="Open the live Cinegalaxy app">
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* Summarist — full-width (last) */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/Screenshot_12-6-2026_20595_summarist-vert.vercel.app.jpeg"
                      alt="Summarist screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
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
                    <a href="https://github.com/babyboy198331-coder/summarist.git" target="_blank" rel="noreferrer" className="project__description--link" aria-label="Summarist GitHub" title="View Summarist source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://summarist-vert.vercel.app" target="_blank" rel="noreferrer" className="project__description--link" aria-label="Summarist live" title="Open the live Summarist app">
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
