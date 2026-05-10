// Navbar scroll effect
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    // Active nav highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id'); });
      navLinks.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === '#' + current || l.getAttribute('href') === current + '.html' || (current === 'home' && l.getAttribute('href') === 'index.html')) {
          l.classList.add('active');
        }
      });
    });

  const events = [
  {
    id: "cultural-festival",
    title: "Cultural Festival Day",
    date: "May 15, 2026",
    category: "Culture",
    location: "Istanbul Medipol University",
    image: "🎭",
    shortDescription:
      "An evening of traditional dances, fashion, music and food from across the continent.",

    fullDescription:
      "The Cultural Festival Day is one of our biggest celebrations of African identity, unity, and creativity. Students will showcase traditional clothing, music, dance, spoken word, food, and cultural performances from different African countries."
  }
];

const eventsContainer = document.getElementById("eventsContainer");

events.forEach(event => {

  eventsContainer.innerHTML += `
    <div class="col-md-4 fade-up visible">

      <div class="event-card">

        <div class="event-img">
          ${event.image}
        </div>

        <div class="event-body">

          <div class="event-date">
            ${event.date}
          </div>

          <h3>
            ${event.title}
          </h3>

          <p>
            ${event.shortDescription}
          </p>

          <a href="./event-details.html?id=${event.id}" class="btn-learn">
            Learn More
          </a>

        </div>

      </div>

    </div>
  `;

});