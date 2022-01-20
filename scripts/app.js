document.querySelectorAll(".each-card").forEach((card) => {
  VanillaTilt.init(card, {
    max: 25,
    speed: 400,
  });
});

VanillaTilt.init(document.querySelectorAll(".orange-img"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".melting-cheese-card"), {
  max: 25,
  speed: 400,
});
VanillaTilt.init(document.querySelectorAll(".delivery-card"), {
  max: 25,
  speed: 400,
});

//***********Scroll Trigger GSAP Animations********

const headerTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".navbar-container",
    defaults: { duration: 0.5, ease: "easeIn" },
  },
});

headerTimeline
  .from(".header-changer", { y: 20, opacity: 0 })
  .from(".left-header", { y: 100, opacity: 0 }, "-=0.4")
  .from(".orange-img", { y: 200, opacity: 0 }, "-=0.5")
  .from(".alram-img", { y: 300, opacity: 0 }, "-=0.6")
  .from("#chef-img", { y: 100, opacity: 0 }, "-=0.4");

const cardsTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".freeship-card",
    defaults: { duration: 1, ease: "easeIn" },
  },
});
cardsTimeline.from(".services-subheading", { y: "100", opacity: 0 }, "-=0.1"),
  cardsTimeline.from(".services-heading", { y: "100%", opacity: 0 }, "-=0.3"),
  cardsTimeline.from(".each-card", { y: "100%", opacity: 0 }, "-=0.6");

const ex1Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".whyus-section",
    defaults: { duration: 1, ease: "easeIn" },
  },
});

ex1Timeline.from(".whysection-hero", { y: "50%", opacity: 0 }, "-=0.5"),
  ex1Timeline.from(".whyus-right-items", { y: "50%", opacity: 0 }, "-=0.6");

const ex2Timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".delivery-section",
    defaults: { duration: 1, ease: "easeIn" },
  },
});

ex2Timeline.from(".delivery-hero", { y: "-50%", opacity: 0 }, "-=0.3"),
  ex2Timeline.from(".delivery-left-items", { y: "50%", opacity: 0 }, "-=0.5");
