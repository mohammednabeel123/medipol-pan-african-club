
const teamMembers = [
  {
    role: {
      en: "President",
      fr: "Président",
      tr: "Başkan"
    },
    name: "Farai Luwisi",
    image: "/images/president.jpeg",
    bio: {
      en: "Leads the club vision, coordinates executive decisions, and represents the Pan-African community.",
      fr: "Dirige la vision du club, coordonne les décisions exécutives et représente la communauté panafricaine.",
      tr: "Kulübün vizyonuna liderlik eder, yönetim kararlarını koordine eder ve Pan-Afrika topluluğunu temsil eder."
    }
  },
  {
    role: {
      en: "Secretary General",
      fr: "Secrétaire général",
      tr: "Genel Sekreter"
    },
    name: "Arielle Irame",
    image: "/images/secretary-general.jpeg",
    bio: {
      en: "Manages club records, meeting minutes, official communication, announcements, and administrative coordination.",
      fr: "Gère les dossiers du club, les comptes rendus de réunion, la communication officielle, les annonces et la coordination administrative.",
      tr: "Kulüp kayıtlarını, toplantı tutanaklarını, resmî iletişimi, duyuruları ve idari koordinasyonu yönetir."
    }
  },
  {
    role: {
      en: "Lead Event Organiser",
      fr: "Responsable principale des événements",
      tr: "Baş Etkinlik Organizatörü"
    },
    name: "Samantha Naita",
    image: "/images/lead-event-organiser.jpeg",
    bio: {
      en: "Leads the planning and organisation of cultural events, festivals, social gatherings, and student activities.",
      fr: "Dirige la planification et l'organisation des événements culturels, festivals, rencontres et activités étudiantes.",
      tr: "Kültürel etkinliklerin, festivallerin, sosyal buluşmaların ve öğrenci faaliyetlerinin planlanmasına ve organizasyonuna liderlik eder."
    }
  },
  {
    role: {
      en: "IT and Media Director",
      fr: "Directeur informatique et médias",
      tr: "BT ve Medya Direktörü"
    },
    name: "Mohammed Nabeel",
    image: "/images/it-media-director.jpeg",
    bio: {
      en: "Oversees the club's digital platforms, technical systems, media production, and online presence.",
      fr: "Supervise les plateformes numériques du club, les systèmes techniques, la production médiatique et la présence en ligne.",
      tr: "Kulübün dijital platformlarını, teknik sistemlerini, medya üretimini ve çevrimiçi varlığını yönetir."
    }
  },
  {
    role: {
      en: "Founder / Board Member",
      fr: "Fondateur / Membre du conseil",
      tr: "Kurucu / Yönetim Kurulu Üyesi"
    },
    name: "Hamza Toffa",
    image: "/images/founder-board-member.jpeg",
    bio: {
      en: "Contributes to the club's long-term vision, institutional direction, and strategic decisions as a founding board member.",
      fr: "Contribue à la vision à long terme du club, à son orientation institutionnelle et aux décisions stratégiques en tant que membre fondateur du conseil.",
      tr: "Kurucu yönetim kurulu üyesi olarak kulübün uzun vadeli vizyonuna, kurumsal yönüne ve stratejik kararlarına katkıda bulunur."
    }
  },
  {
    role: {
      en: "Board Member / IT Advisor",
      fr: "Membre du conseil / Conseiller informatique",
      tr: "Yönetim Kurulu Üyesi / BT Danışmanı"
    },
    name: "Theophilus Olayiwa Agunbiade",
    image: "/images/board-member-it-advisor.jpeg",
    bio: {
      en: "Provides technical guidance and contributes to board discussions, planning, and the club's strategic development.",
      fr: "Apporte des conseils techniques et contribue aux discussions du conseil, à la planification et au développement stratégique du club.",
      tr: "Teknik rehberlik sağlar; yönetim kurulu görüşmelerine, planlamaya ve kulübün stratejik gelişimine katkıda bulunur."
    }
  },
  {
    role: {
      en: "Treasurer",
      fr: "Trésorier",
      tr: "Sayman"
    },
    name: "Takunda Billary Munetsi",
    image: "/images/treasurer.jpeg",
    bio: {
      en: "Manages club finances, budgets, expenditure records, and financial planning for activities and events.",
      fr: "Gère les finances du club, les budgets, les dépenses et la planification financière des activités et événements.",
      tr: "Kulüp finansmanını, bütçeleri, harcama kayıtlarını ve etkinlikler için mali planlamayı yönetir."
    }
  }
];

function getTeamLanguage() {
  const path = window.location.pathname.toLowerCase();

  if (path.includes("/fr/")) return "fr";
  if (path.includes("/tr/")) return "tr";

  return "en";
}

function renderTeam() {
  const container = document.getElementById("teamGrid");

  if (!container) return;

  const lang = getTeamLanguage();

  container.innerHTML = teamMembers.map(member => `
<div class="col-12 col-md-6 col-lg-4 fade-up visible">
      <div class="team-card">

        <div class="team-avatar">
          <img
            src="${member.image}"
            alt="${member.name}"
            loading="lazy"
          >
        </div>

        <h3>${member.role[lang]}</h3>

        <p class="team-role">${member.name}</p>

        <p class="team-bio">
          ${member.bio[lang]}
        </p>

      </div>
    </div>
  `).join("");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTeam);
} else {
  renderTeam();
}