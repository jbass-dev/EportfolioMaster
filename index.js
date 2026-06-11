// template_8dp2wge
// service_ippb0pp
// cbM7V2aKMo5f0HbPc

let contrastToggle = false;
const scalefactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scalefactor;
  const y = event.clientY * scalefactor;
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const BoolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(
      ${x * BoolInt}px, ${y * BoolInt}px
    )`;
  }
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
  document.body.classList.add("dark-theme")
}
  else {
document.body.classList.remove("dark-theme")
  }
}
function contact(event) {
  event.preventDefault();
  
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  
  // Show loading state
  loading.classList.add('modal__overlay--visible');
  
  emailjs
    .sendForm(
      'service_ippb0pp',
      'template_8dp2wge',
      event.target,
      'cbM7V2aKMo5f0HbPc'
    )
    .then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList.add('modal__overlay--visible');
    })
    .catch(() => {
      loading.classList.remove('modal__overlay--visible');
      alert(
        'The email service is temporarily unavailable. Please contact me directly on babyboy198331@gmail.com'
      );
    });
}
let isModalOpen = false;

function toggleModal() {
  isModalOpen = !isModalOpen;

  if (isModalOpen) {
    window.scrollTo(0, 0);
    document.body.classList.add("modal--open");
    document.body.style.overflow = "hidden";
  } else {
    document.body.classList.remove("modal--open");
    document.body.style.overflow = "";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && isModalOpen) {
    toggleModal();
  }
});


