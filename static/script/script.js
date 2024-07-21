const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;
let startX;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'));
}

function showSlider() {
  slider[currentSlide].classList.add('on');
}

function nextSlider() {
  hideSlider();
  currentSlide = (currentSlide + 1) % slider.length;
  showSlider();
}

function prevSlider() {
  hideSlider();
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);

// Touch events
slider.forEach(s => {
  s.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  s.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        nextSlider();
      } else {
        prevSlider();
      }
    }
  });
});


window.revelar = ScrollReveal({reset:false})
// SERVIÇOES
 const serviceDuration = 800;
 const solarTitlesDuration = 1000;
revelar.reveal('.box-reveal-top1',{
    duration: serviceDuration,
    distance: '400px',
    easing: 'ease-in-out'
 })

revelar.reveal('.box-reveal-top2',{
  duration: serviceDuration,
  distance: '400px',
  delay: 200, 
  easing: 'ease-in-out'
})

revelar.reveal('.box-reveal-top3',{
  duration: serviceDuration,
  distance: '400px',
  delay: 300,
  easing: 'ease-in-out'
})

revelar.reveal('.solar-reveal-logo',{
  duration: 1700,
  distance: '0',
  opacity: 0.1,
  easing: 'ease-in-out'
})


revelar.reveal('.solar-reveal-titles01',{
  duration: solarTitlesDuration,
  distance: '300px', 
  easing: 'ease-in-out'
})

revelar.reveal('.solar-reveal-titles02',{
  duration: solarTitlesDuration,
  distance: '300px',
  delay: 300, 
  easing: 'ease-in-out'
})

revelar.reveal('.solar-reveal-titles03',{
  duration: solarTitlesDuration,
  distance: '300px',
  delay: 450, 
  easing: 'ease-in-out'
})

revelar.reveal('.infra__title',{
  duration: 700,
  distance: '50px',
  easing: 'ease-in-out'
})



revelar.reveal('.reveal-especialidade01',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'left',
  easing: 'ease-in-out'
})

revelar.reveal('.reveal-especialidade02',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'right',
  delay: 300,
  easing: 'ease-in-out'
})


revelar.reveal('.reveal-especialidade03',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'left',
  delay: 350,
  easing: 'ease-in-out'
})


revelar.reveal('.reveal-especialidade04',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'right',
  delay: 400,
  easing: 'ease-in-out'
})


revelar.reveal('.reveal-especialidade05',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'left',
  delay: 450,
  easing: 'ease-in-out'
})


revelar.reveal('.reveal-especialidade06',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'right',
  delay: 500,
  easing: 'ease-in-out'
})

revelar.reveal('.reveal-especialidade07',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'left',
  delay: 550,
  easing: 'ease-in-out'
})


revelar.reveal('.reveal-especialidade08',{
  duration: serviceDuration,
  distance: '400px',
  origin: 'right',
  delay: 600,
  easing: 'ease-in-out'
})

revelar.reveal('.bottom-title',{
  duration: serviceDuration,
  distance: '50px',
  origin: 'bottom',
  delay: 100,
  easing: 'ease-in-out'
})

revelar.reveal('.reveal-car',{
  opacity: 1,
  duration: 2500,
  distance: '800px',
  origin: 'left',
  easing: 'ease-in-out',
  delay:100
})
