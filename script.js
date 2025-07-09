const facts = [
    "I build robust full-stack applications using Java, Spring Boot, and Angular.",
    "I enjoy transforming complex business logic into clean, scalable code.",
    "CI/CD automation and cloud deployment are second nature to me.",
    "I thrive on building responsive frontends and secure backends.",
    "I believe that clean code and strong architecture lead to great software."
  ];
  let fI = 0, cI = 0, isTyping = true;
  const funFact = document.getElementById('funFact');
  funFact.textContent = '';
  function typeLoop() {
    if (isTyping) {
      if (cI < facts[fI].length) funFact.textContent += facts[fI][cI++];
      else { isTyping = false; setTimeout(typeLoop, 2000); return; }
    } else {
      if (cI > 0) funFact.textContent = facts[fI].substring(0, --cI);
      else { isTyping = true; fI = (fI + 1) % facts.length; }
    }
    setTimeout(typeLoop, isTyping ? 70 : 50);
  }
  typeLoop();

  // Scroll spy
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  window.onscroll = () => {
    const pos = window.scrollY + window.innerHeight/3;
    sections.forEach((s, i) => {
      if (pos >= s.offsetTop) {
        navLinks.forEach(a => a.classList.remove('active'));
        navLinks[i].classList.add('active');
      }
    });
  };

  // Skill filtering
  document.querySelectorAll('.skills-filter button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.skills-filter button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.skill-card').forEach(card => {
        card.style.display = (filter === 'all' || card.getAttribute('data-cat') === filter) ? 'block' : 'none';
      });
    });
  });

  // Project tabs
  document.querySelectorAll('.tabs button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.getAttribute('data-tab');
      document.querySelectorAll('.project-panel').forEach(p => {
        p.classList.toggle('active', p.id === tab);
      });
    });
  });