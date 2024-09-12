const overlayGlitch = document.querySelector('.overlay');
// const overlayGlitchEffect = PowerGlitch.glitch(overlayGlitch,{
//   "playMode": "always",
//   "createContainers": true,
//   "hideOverflow": false,
//   "timing": {
//     "duration": 800,
//     "easing": "ease-in-out"
//   },
//   "glitchTimeSpan": {
//     "start": 0.5,
//     "end": 0.7
//   },
//   "shake": {
//     "velocity": 15,
//     "amplitudeX": 0.08,
//     "amplitudeY": 0.08
//   },
//   "slice": {
//     "count": 6,
//     "velocity": 9,
//     "minHeight": 0.02,
//     "maxHeight": 0.15,
//     "hueRotate": true
//   }
// });
// overlayGlitchEffect.stopGlitch();

setTimeout(() => {
}, 0);

setTimeout(()=>{
  overlayGlitch.classList.add("hide-away");
  document.querySelector(".he").scrollIntoView();
},2300);

setTimeout(() => {
  overlayGlitch.remove();
  document.body.classList.remove("disable-scroll");
}, 2500);

document.querySelector('.hamburger').addEventListener('click', (e)=>{
  document.querySelector('.nav-buttons-mobile').classList.toggle('hidden-nav')
  let i=0;
  document.querySelectorAll('.hamburger span').forEach((span)=>{ 
    i+=1; 
    span.classList.toggle(`close-${i}`);
   })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".header-nav img").style.width = "80px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "1.3rem";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = "1.2rem"});
    document.querySelector(".hamburger").style.top = "26px";
  } else {
    document.querySelector(".header-nav img").style.width = "100px";
    document.querySelector(".header-nav .brand-name").style.fontSize = "";
    document.querySelectorAll(".header-nav .nav-buttons .nav-btn").forEach((btn)=>{btn.style.fontSize = ""});
    document.querySelector(".hamburger").style.top = "";
  }

  if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
    document.querySelector(".top").classList.add('show-top');
  } else {
    document.querySelector(".top").classList.remove('show-top');
  }

} 


AOS.init();

const heImg = document.querySelector('.he img')
const heImgGlitch = PowerGlitch.glitch(heImg,{
  "playMode": "hover",
  "createContainers": true,
  "hideOverflow": false,
  "timing": {
    "duration": 550,
    "iterations": 1,
    "easing": "ease-in-out"
  },
  "glitchTimeSpan": {
    "start": 0,
    "end": 1
  },
  "shake": {
    "velocity": 15,
    "amplitudeX": 0.2,
    "amplitudeY": 0.2
  },
  "slice": {
    "count": 10,
    "velocity": 15,
    "minHeight": 0.02,
    "maxHeight": 0.15,
    "hueRotate": true
  }
});

document.addEventListener("DOMContentLoaded",()=>{
  var time = new Date('23 September, 2024 10:00:00').getTime()/1000 + 1;

  var flipdown = new FlipDown(time).start().ifEnded(()=>{
      console.log("mudinchu")
  })

  particlesJS.load("particles-js", "./static/particlesjs-config.json", function() {
    console.log('callback - particles-js config loaded');
  });

  document.querySelectorAll(".event-reg-btn").forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
      let eventUrl = e.target.getAttribute("href");
      //console.log(e.target);
      window.open(eventUrl,"_blank");
    })
  })
})


timeline(document.querySelectorAll('.timeline'), {
  forceVerticalMode: 800,
  mode: 'vertical',
  visibleItems: 3,
  verticalStartPosition: 'left',
  verticalTrigger: '200px'
});

if(window.innerWidth < 800){
  const contents = document.querySelectorAll(".timeline__content")
  contents.forEach((item)=>{item.setAttribute('data-aos','fade-left')})
}



//For gallery image scroll effect
window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position
    const imageRow = document.querySelector('.image-row');
    const maxScroll = document.body.scrollHeight - window.innerHeight; // Maximum vertical scroll distance
    const maxTranslateX = imageRow.scrollWidth - window.innerWidth;   // Maximum horizontal scroll distance

    // Calculate the percentage of the vertical scroll and apply it to the horizontal scroll
    const translateX = (scrollTop / maxScroll) * maxTranslateX;

    // Apply the horizontal scroll to the images
    imageRow.style.transform = `translateX(${-translateX}px)`;
});

// Optional: Force the page to start at the top on refresh
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
