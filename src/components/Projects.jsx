export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <div className="section__header">
            <span className="section__number">01</span>
            <h2 className="section__title">Recent Work</h2>
          </div>
          <ul className="project__list">

            {/* CRM AI — full-width (first, most recent) */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/crm-ai.png"
                      alt="CRM AI dashboard screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
                <div className="project__description">
                  <h3 className="project__description--title">CRM AI</h3>
                  <h4 className="project__description--sub-title">
                    Next.js, Node.js/Express, Prisma, PostgreSQL, Docker, Railway, OpenAI API
                  </h4>
                  <p className="project__description--para">
                    A full-stack CRM with customer/contact management, file
                    uploads, and role-based permissions (Admin/Manager/Rep) —
                    plus AI features layered on top: meeting summaries,
                    follow-up email drafts, and a customer Q&amp;A chatbot.
                    Containerized with Docker for local dev and deployed as
                    three services (frontend, backend, Postgres) on Railway.
                  </p>
                  <div className="project__description--links">
                    <a href="https://github.com/babyboy198331-coder/crm-ai" target="_blank" rel="noreferrer" className="project__description--link" aria-label="CRM AI GitHub" title="View CRM AI source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* OfferBound — full-width */}
            <li className="project">
              <div className="project__wrapper project__wrapper--featured">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/screenshot-1781315678461.png"
                      alt="OfferBound screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
                <div className="project__description">
                  <h3 className="project__description--title">OfferBound</h3>
                  <h4 className="project__description--sub-title">
                    React, Firebase, Firestore
                  </h4>
                  <p className="project__description--para">
                    A full-stack job-application tracker designed and built
                    from scratch — Google auth, a live stats dashboard, and
                    follow-up reminders.
                  </p>
                  <div className="project__description--links">
                    <a href="https://github.com/babyboy198331-coder/OfferBound" target="_blank" rel="noreferrer" className="project__description--link" aria-label="OfferBound GitHub" title="View OfferBound source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                    <a href="https://offerbound.vercel.app" target="_blank" rel="noreferrer" className="project__description--link" aria-label="OfferBound live" title="Open the live OfferBound app">
                      <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

            {/* ai-chat-interface — side by side with Mini Expense Tracker */}
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
                    Next.js, React, TypeScript, Tailwind CSS, OpenAI API
                  </h4>
                  <p className="project__description--para">
                    A chat interface built from scratch around the OpenAI
                    API — an original integration handling request/response
                    state and responsive Tailwind styling, not a UI clone.
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

            {/* Mini Expense Tracker — side by side with ai-chat-interface */}
            <li className="project">
              <div className="project__wrapper">
                <div className="project__placeholder project__placeholder--screenshot">
                  <div className="project__screenshot-wrap">
                    <div className="mockup__browser">
                      <span></span><span></span><span></span>
                    </div>
                    <img
                      src="/assets/miniexpress.png"
                      alt="Mini Expense Tracker screenshot"
                      className="project__screenshot-img"
                    />
                  </div>
                </div>
                <div className="project__description">
                  <h3 className="project__description--title">Mini Expense Tracker</h3>
                  <h4 className="project__description--sub-title">
                    Express, PostgreSQL, JWT, bcrypt, Render, GitHub Pages
                  </h4>
                  <p className="project__description--para">
                    A full-stack expense tracker built to go deep on auth:
                    bcrypt password hashing, rotating JWT access/refresh
                    tokens, a one-time-token forgot/reset-password flow, and
                    routes scoped per-user. Backend on Render with a
                    Render-managed Postgres database; frontend on GitHub
                    Pages.
                  </p>
                  <div className="project__description--links">
                    <a href="https://github.com/babyboy198331-coder/miniexpensetracker" target="_blank" rel="noreferrer" className="project__description--link" aria-label="Mini Expense Tracker GitHub" title="View Mini Expense Tracker source code on GitHub">
                      <i className="fa-brands fa-github" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </li>

          </ul>

          <div className="section__header section__header--earlier">
            <span className="section__number">02</span>
            <h2 className="section__title">Earlier Work</h2>
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

          </ul>
        </div>
      </div>
    </section>
  )
}
