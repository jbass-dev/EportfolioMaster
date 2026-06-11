const SHAPES = [
  { src: '/assets/html.png', alt: 'HTML', cls: 'shape--0' },
  { src: '/assets/css.png', alt: 'CSS', cls: 'shape--1' },
  { src: '/assets/icons8-javascript-logo-100.png', alt: 'JavaScript', cls: 'shape--2' },
  { src: '/assets/react.png', alt: 'React', cls: 'shape--3' },
  { src: '/assets/nextjs.jpg', alt: 'Next.js', cls: 'shape--4' },
  { src: '/assets/typescript.png', alt: 'TypeScript', cls: 'shape--5' },
  { src: '/assets/tailwind.png', alt: 'Tailwind CSS', cls: 'shape--6' },
  { src: '/assets/firebase.png', alt: 'Firebase', cls: 'shape--7' },
  { src: '/assets/github.png', alt: 'GitHub', cls: 'shape--8' },
]

export default function Shapes() {
  return (
    <>
      {SHAPES.map((s) => (
        <img key={s.cls} src={s.src} className={`shape ${s.cls}`} alt={s.alt} />
      ))}
    </>
  )
}
