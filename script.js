function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('show');
  }
  
  // Scroll animation for sections
  const sections = document.querySelectorAll('section');
  const options = { threshold: 0.2 };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, options);
  
  sections.forEach(sec => {
    observer.observe(sec);
  });
  
  // Optimize mousemove event for smooth coin movement
  document.addEventListener("mousemove", function (e) {
    const coin = document.querySelector(".cursor-coin");
  
    // Use requestAnimationFrame for smoother performance
    window.requestAnimationFrame(() => {
      coin.style.transform = `translate(${e.clientX + 10}px, ${e.clientY + 10}px)`;
    });
  });

  document.getElementById("playBtn").addEventListener("click", function () {
    window.open("https://www.youtube.com/embed/UBUNrFtufWo?autoplay=1", "_blank");
  });

  particlesJS("particles-bg", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  
  // Enhanced dropdown functionality
function toggleDropdown(button) {
  const dropdown = button.parentElement;
  const content = dropdown.querySelector('.dropdown-content');
  const icon = button.querySelector('.fa-chevron-down');
  
  // Toggle this dropdown
  button.classList.toggle('active');
  content.classList.toggle('active');
  
  // Rotate icon smoothly
  icon.style.transform = button.classList.contains('active') 
    ? 'rotate(180deg)' 
    : 'rotate(0deg)';
  
  // Close other dropdowns if this one is opening
  if (button.classList.contains('active')) {
    document.querySelectorAll('.example-dropdown').forEach(item => {
      if (item !== dropdown) {
        const otherBtn = item.querySelector('.dropdown-btn');
        const otherContent = item.querySelector('.dropdown-content');
        const otherIcon = item.querySelector('.fa-chevron-down');
        
        otherBtn.classList.remove('active');
        otherContent.classList.remove('active');
        otherIcon.style.transform = 'rotate(0deg)';
      }
    });
  }
  
  // Smooth scroll to keep dropdown in view
  if (button.classList.contains('active')) {
    setTimeout(() => {
      dropdown.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

// Close dropdowns when clicking outside
document.addEventListener('click', function(event) {
  if (!event.target.closest('.example-dropdown')) {
    document.querySelectorAll('.example-dropdown').forEach(item => {
      const btn = item.querySelector('.dropdown-btn');
      const content = item.querySelector('.dropdown-content');
      const icon = item.querySelector('.fa-chevron-down');
      
      btn.classList.remove('active');
      content.classList.remove('active');
      icon.style.transform = 'rotate(0deg)';
    });
  }
});
