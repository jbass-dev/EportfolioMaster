const TECHS = [
  { src: '/assets/html.png', alt: 'HTML', label: 'HTML' },
  { src: '/assets/css.png', alt: 'CSS', label: 'CSS' },
  { src: '/assets/icons8-javascript-logo-100.png', alt: 'JavaScript', label: 'JavaScript' },
  { src: '/assets/react.png', alt: 'React', label: 'React' },
  { src: '/assets/nextjs.jpg', alt: 'Next.js', label: 'Next.js' },
  { src: '/assets/typescript.png', alt: 'TypeScript', label: 'TypeScript' },
  { src: '/assets/tailwind.png', alt: 'Tailwind', label: 'Tailwind' },
  { src: '/assets/firebase.png', alt: 'Firebase', label: 'Firebase' },
  { src: '/assets/redux.png', alt: 'Redux', label: 'Redux' },
  { src: '/assets/stripe.png', alt: 'Stripe', label: 'Stripe' },
  { src: '/assets/github.png', alt: 'GitHub', label: 'GitHub' },
  { src: '/assets/vercel.png', alt: 'Vercel', label: 'Vercel' },
]

function TickerItem({ src, alt, label }) {
  return (
    <>
      <div className="ticker__item">
        <img src={src} alt={alt} />
        <span className="ticker__label">{label}</span>
      </div>
      <div className="ticker__dot"></div>
    </>
  )
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {TECHS.map((t) => <TickerItem key={t.alt} {...t} />)}
        {TECHS.map((t) => <TickerItem key={`${t.alt}-2`} {...t} />)}
      </div>
    </div>
  )
}
