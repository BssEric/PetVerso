window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.to(".zoom-image", {
    scale: 12,
    duration: 3,
    ease: "power2.inOut"
  })
  .to(".zoom-wrapper", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  }, "-=1")
  .to(".conteudo", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.out"
  }, "-=0.5");
});
