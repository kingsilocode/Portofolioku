import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Hero typing
  const heroText = "Hi, I'm Your Name!";
  const heroElement = document.getElementById("hero-text");
  if(heroElement){
    heroElement.textContent = "";
    heroText.split("").forEach((char, i) => {
      setTimeout(() => {
        heroElement.textContent += char;
      }, i * 50);
    });
  }

  // Scroll animations
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });

  // Hover animation project cards
  gsap.utils.toArray('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)", duration: 0.3 });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)", duration: 0.3 });
    });
  });
};
