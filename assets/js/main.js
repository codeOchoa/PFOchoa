// import "";
// import AOS from "aos";
// import "./node_modules/aos/dist/aos.css";

// const projectRoot = window.CSS.camelCase($project - root)

AOS.init();

// You can also pass an optional settings object
// below listed default settings
// AOS.init({
// Global settings:
//   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
//   startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
//   initClassName: "aos-init", // class applied after initialization
//   animatedClassName: "aos-animate", // class applied on animation
//   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
//   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
//   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
//   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
//   offset: 120, // offset (in px) from the original trigger point
//   delay: 0, // values from 0 to 3000, with step 50ms
//   duration: 400, // values from 0 to 3000, with step 50ms
//   easing: "ease", // default easing for AOS animations
//   once: false, // whether animation should happen only once - while scrolling down
//   mirror: false, // whether elements should animate out while scrolling past them
//   anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation

// });

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById('navbar-m');
  const scrollTrigger = document.documentElement.scrollHeight * 0.01;

  window.addEventListener("scroll", function () {
    if (window.scrollY > scrollTrigger) {
      navbar.classList.add("fixed");
      setTimeout(() => {
        navbar.classList.add("visible");
      }, 1);
    } else {
      navbar.classList.remove("visible");
      navbar.classList.remove("fixed");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var scrollTopWidget = document.querySelector(".scroll-top-widget");

  function toggleWidgets() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    var scrollThreshold = pageHeight * 0.1;

    if (scrollPosition > scrollThreshold) {
      scrollTopWidget.style.display = "flex";
    } else {
      scrollTopWidget.style.display = "none";
    }
  }

  window.addEventListener("scroll", toggleWidgets);
  toggleWidgets();

  scrollTopWidget.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
});