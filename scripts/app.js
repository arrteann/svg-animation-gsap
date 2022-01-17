const tl = gsap.timeline({ defaults: { delay: 0.8 } });

tl.from(".logo", { duration: 0.5, opacity: 0, y: -60 });
tl.from("li", { duration: 0.5, stagger: 0.3, opacity: 0, y: -60 });
tl.from(".hero-content h1", { duration: 1.2, y: 50, opacity: 0 }, "-=3.8");
tl.from(".hero-content p", { duration: 1.2, opacity: 0 }, "-=3.6");
tl.from(".btn", { duration: 1, opacity: 0, x: -200, stagger: 0.6 }, "-=3.5");
tl.from(".illustration", { duration: 1.3, opacity: 0, x: 100 }, "-=3");

gsap.to("#blue-car", {
  duration: 16,
  x: 572,
  y: 210,
  ease: "none",
  repeat: -1,
  repeatDelay: 1,
});

gsap.to("#red-car", {
  duration: 9,
  x: 1990,
  y: 439,
  ease: "none",
  repeat: -1,
  repeatDelay: 2,
});

gsap.to("#yellow-car", {
  duration: 6,
  x: 884,
  y: 1114,
  ease: "none",
  repeat: -1,
  repeatDelay: 1,
});
