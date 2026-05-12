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
    title: "Pan-African Cultural Festival",
    date: "May 15, 2026",
    category: "Culture",
    location: "Istanbul Medipol University",
    image: "🎭",

    shortDescription:
      "A cultural stand showcasing African unity through visuals, artifacts, food, leaders, flags, quizzes, and interactive activities.",

    fullDescription:
      "The Pan-African Cultural Festival stand will showcase the richness, diversity, and unity of African cultures through visuals, artifacts, food, and interactive activities. The aim is to educate visitors, engage students, and celebrate African heritage at Istanbul Medipol University.",

    representedCountries: [
      "Ghana",
      "Sudan",
      "Zimbabwe",
      "Uganda",
      "Malawi",
      "South Africa",
      "Gambia",
      "Kenya",
      "Ethiopia",
      "Rwanda",
      "South Sudan",
      "Afro-Turks"
    ],

    leaders: [
      "Thomas Sankara",
      "Nelson Mandela",
      "Gamal Abdel Nasser",
      "Haile Selassie",
      "Kwame Nkrumah"
    ],

    decorations: [
      "Small flags representing each country",
      "Pin-up rosettes of all represented nations",
      "Beads",
      "Masks",
      "Musical instruments"
    ],

    quizDetails: [
      "African history questions",
      "African geography questions",
      "African culture questions",
      "Participants answer questions at the stand",
      "Winners receive cultural prizes"
    ],

    prizes: [
      "African-themed shirts",
      "Caps",
      "Small cultural souvenirs"
    ],

    foodShowcase: [
      "South Sudan",
      "Uganda",
      "Rwanda",
      "Ethiopia"
    ],

    highlights: [
      "Visual displays of African leaders and heroes",
      "Cultural decorations and traditional items",
      "African Knowledge Quiz",
      "Cultural prizes and souvenirs",
      "Traditional food samples from selected countries"
    ]
  },

  {
    id: "post-exam-hangout",
    title: "Post-Exam Hangout",
    date: "June 20, 2026",
    category: "Community",
    location: "Istanbul",
    image: "🎉",

    shortDescription:
      "A relaxed social gathering for students after final exams.",

    fullDescription:
      "The Post-Exam Hangout is a fun and relaxed social gathering organized after the examination period. It gives students a chance to unwind, connect, take photos, play games, and enjoy time together after a busy semester.",

    representedCountries: [],

    leaders: [],

    decorations: [],

    quizDetails: [],

    prizes: [],

    foodShowcase: [],

    highlights: [
      "Post-exam relaxation",
      "Student networking",
      "Games and social activities",
      "Photos and memories",
      "Community bonding"
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  renderEventCards();
  renderEventDetails();
  initNavbarScroll();
  initScrollReveal();
});

function renderEventCards() {
  const eventsContainer = document.getElementById("eventsContainer");

  if (!eventsContainer) return;

  eventsContainer.innerHTML = "";

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

            <a href="event-details.html?id=${event.id}" class="btn-learn">
              Learn More
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

function renderEventDetails() {
  const eventDetails = document.getElementById("eventDetails");

  if (!eventDetails) return;

  const params = new URLSearchParams(window.location.search);
  const eventId = params.get("id");

  const selectedEvent = events.find(event => event.id === eventId);

  const renderList = (title, items) => {
    if (!items || items.length === 0) return "";

    return `
      <div class="event-extra-section">
        <h3>${title}</h3>

        <ul class="event-highlights">
          ${items.map(item => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  };

  const renderBadges = (title, items) => {
    if (!items || items.length === 0) return "";

    return `
      <div class="event-extra-section">
        <h3>${title}</h3>

        <div class="countries-grid">
          ${items.map(item => `
            <span class="country-badge">
              ${item}
            </span>
          `).join("")}
        </div>
      </div>
    `;
  };

  if (selectedEvent) {
    eventDetails.innerHTML = `
      <div class="event-detail-image">
        ${selectedEvent.image}
      </div>

      <div class="event-detail-content">
        <div class="event-date">
          ${selectedEvent.date}
        </div>

        <h1 class="section-title">
          ${selectedEvent.title}
        </h1>

        <div class="event-meta">
          <div>
            <strong>Category:</strong>
            <span>${selectedEvent.category}</span>
          </div>

          <div>
            <strong>Location:</strong>
            <span>${selectedEvent.location}</span>
          </div>
        </div>

        <p class="event-full-description">
          ${selectedEvent.fullDescription}
        </p>

        ${renderBadges("Represented Countries & Communities", selectedEvent.representedCountries)}

        ${renderList("African Leaders & Heroes Display", selectedEvent.leaders)}

        ${renderList("Cultural Decorations", selectedEvent.decorations)}

        ${renderList("Interactive African Knowledge Quiz", selectedEvent.quizDetails)}

        ${renderList("Cultural Prizes", selectedEvent.prizes)}

        ${renderBadges("Food Showcase Countries", selectedEvent.foodShowcase)}

        ${renderList("Event Highlights", selectedEvent.highlights)}

        <div class="event-actions">
          <a href="contact.html" class="btn-gold">
            Contact The Organizers
          </a>

          <a href="events.html" class="btn-outline-gold">
            Explore More Events
          </a>
        </div>
      </div>
    `;
  } else {
    eventDetails.innerHTML = `
      <div class="event-detail-content">
        <h1 class="section-title">
          Event <span>Not Found</span>
        </h1>

        <p class="event-full-description">
          This event does not exist or may have been removed.
        </p>

        <a href="events.html" class="btn-gold">
          Back to Events
        </a>
      </div>
    `;
  }
}

function initNavbarScroll() {
  const nav = document.getElementById("mainNav");

  if (!nav) return;

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 60);
  });
}

function initScrollReveal() {
  const fadeElements = document.querySelectorAll(".fade-up");

  if (fadeElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeElements.forEach(element => {
    observer.observe(element);
  });
}


const floatingWidget = document.querySelector(".floating-contact-widget");
const floatMainBtn = document.getElementById("floatMainBtn");
const openMiniChat = document.getElementById("openMiniChat");
const miniChatPanel = document.getElementById("miniChatPanel");
const closeMiniChat = document.getElementById("closeMiniChat");

if (floatingWidget && floatMainBtn) {
  floatMainBtn.addEventListener("click", () => {
    floatingWidget.classList.toggle("active");
  });
}

if (openMiniChat && miniChatPanel) {
  openMiniChat.addEventListener("click", () => {
    miniChatPanel.classList.add("show");
  });
}

if (closeMiniChat && miniChatPanel) {
  closeMiniChat.addEventListener("click", () => {
    miniChatPanel.classList.remove("show");
  });
}