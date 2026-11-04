// ==============================================
// MEDIPOL PAN-AFRICAN CLUB — SHARED WEBSITE JS
// One event database + EN / FR / TR presentation
// ==============================================

const events = [
  {
    id: "cultural-festival", type: "cultural",
    title: "Pan-African Cultural Festival", date: "2026-05-15",
    category: "Culture", location: "Istanbul Medipol University", image: "🎭",
    shortDescription: "A cultural stand showcasing African unity through visuals, artifacts, food, leaders, flags, quizzes, and interactive activities.",
    fullDescription: "The Pan-African Cultural Festival stand will showcase the richness, diversity, and unity of African cultures through visuals, artifacts, food, and interactive activities. The aim is to educate visitors, engage students, and celebrate African heritage at Istanbul Medipol University.",
    representedCountries: ["Ghana", "Sudan", "Zimbabwe", "Uganda", "Malawi", "South Africa", "Gambia", "Kenya", "Ethiopia", "Rwanda", "South Sudan", "Afro-Turks"],
    leaders: ["Thomas Sankara", "Nelson Mandela", "Gamal Abdel Nasser", "Haile Selassie", "Kwame Nkrumah"],
    decorations: ["Small flags representing each country", "Pin-up rosettes of all represented nations", "Beads", "Masks", "Musical instruments"],
    quizDetails: ["African history questions", "African geography questions", "African culture questions", "Participants answer questions at the stand", "Winners receive cultural prizes"],
    prizes: ["African-themed shirts", "Caps", "Small cultural souvenirs"],
    foodShowcase: ["South Sudan", "Uganda", "Rwanda", "Ethiopia"],
    highlights: ["Visual displays of African leaders and heroes", "Cultural decorations and traditional items", "African Knowledge Quiz", "Cultural prizes and souvenirs", "Traditional food samples from selected countries"]
  },
  {
    id: "post-exam-hangout", type: "community",
    title: "Post-Exam Hangout", date: "2026-06-20",
    category: "Community", location: "Istanbul", image: "🎉",
    shortDescription: "A relaxed social gathering for students after final exams.",
    fullDescription: "The Post-Exam Hangout is a fun and relaxed social gathering organized after the examination period. It gives students a chance to unwind, connect, take photos, play games, and enjoy time together after a busy semester.",
    representedCountries: [], leaders: [], decorations: [], quizDetails: [], prizes: [], foodShowcase: [],
    highlights: ["Post-exam relaxation", "Student networking", "Games and social activities", "Photos and memories", "Community bonding"]
  },
  {
    id: "first-annual-pan-african-dinner", type: "dinner",
    title: "1st Annual Pan-African Dinner", date: "2026-11-13",
    category: "Community", location: "Assalam Cafe Africa and Coffee Shops, Üsküdar", image: "🍽️",
    shortDescription: "An evening of African unity, culture, food, games, and meaningful connections. Join students from different African countries as we celebrate the richness and diversity of our continent.",
    fullDescription: "Join us for an exciting evening of African unity, culture, and celebration at the 1st Annual Pan-African Dinner. This special gathering will bring Africans together to connect, socialize, and celebrate the richness and diversity of our continent. The evening will feature fun games, interactive activities, engaging discussions, cultural exchanges, and opportunities to build meaningful friendships and strengthen our sense of community. Whether you're looking to meet new people, share ideas, celebrate African heritage, or simply enjoy a memorable evening, this is the perfect opportunity! Come ready for good food, great conversations, exciting games, and an unforgettable celebration of African unity. Feel free to invite your friends, classmates, and people from different nationalities.",
    eventTime: { start: "4:00 PM", end: "8:00 PM" },
    participationFee: "200 TL per person",
    registrationDetails: { paymentMethod: "Bank Transfer", iban: "TR54 0001 0090 1086 0549 5050 01", accountHolder: "Farai Luwisi" },
    registrationLink: "https://docs.google.com/forms/d/1QaFw_FsEsvX-0Dtn46QKJTlV9Ja4L3HmSO_zJdPnCIE/viewform?edit_requested=true",
    mapLink: "https://maps.app.goo.gl/Z9E4hXxXFFYkCtdQ6?g_st=ic",
    representedCountries: [], leaders: [], decorations: [], quizDetails: [], prizes: [], foodShowcase: [],
    highlights: ["Celebrating African unity and cultural diversity", "Fun games and interactive activities", "Cultural exchanges and engaging discussions", "Networking with students from different nationalities", "Building meaningful friendships", "Food, conversations, and community bonding"]
  }
];

// All visitor-facing event copy lives here. Event facts (dates, links, IBAN, names)
// remain in the event records above and are not duplicated across language versions.
const eventCopy = {
  en: {
    ui: { upcoming:"Upcoming", past:"Past", event:"Event", events:"Events", notFound:"Not Found", notFoundText:"This event does not exist or may have been removed.", back:"Back to Events", learn:"Learn More", category:"Category", location:"Location", locationTBA:"To be announced", general:"General", time:"Event Time", fee:"Participation Fee", payment:"Payment Information", method:"Payment Method:", holder:"Account Holder:", iban:"IBAN:", copy:"Copy IBAN", copied:"IBAN Copied!", copyFailed:"Copy failed — select IBAN manually", registration:"Registration", registrationText:"Secure your place by completing the registration form.", register:"Register Now", findUs:"Find Us", map:"View Location on Google Maps", countries:"Represented Countries & Communities", leaders:"African Leaders & Heroes Display", decorations:"Cultural Decorations", quiz:"Interactive African Knowledge Quiz", prizes:"Cultural Prizes", food:"Food Showcase Countries", highlights:"Event Highlights", contact:"Contact The Organizers", explore:"Explore More Events", none:"No events available at the moment." },
    categories:{culture:"Culture",community:"Community"},
    events:{
      "cultural-festival": {title:"Pan-African Cultural Festival",shortDescription:"A cultural stand showcasing African unity through visuals, artifacts, food, leaders, flags, quizzes, and interactive activities.",fullDescription:"The Pan-African Cultural Festival stand will showcase the richness, diversity, and unity of African cultures through visuals, artifacts, food, and interactive activities. The aim is to educate visitors, engage students, and celebrate African heritage at Istanbul Medipol University.",decorations:["Small flags representing each country","Pin-up rosettes of all represented nations","Beads","Masks","Musical instruments"],quizDetails:["African history questions","African geography questions","African culture questions","Participants answer questions at the stand","Winners receive cultural prizes"],prizes:["African-themed shirts","Caps","Small cultural souvenirs"],highlights:["Visual displays of African leaders and heroes","Cultural decorations and traditional items","African Knowledge Quiz","Cultural prizes and souvenirs","Traditional food samples from selected countries"]},
      "post-exam-hangout": {title:"Post-Exam Hangout",shortDescription:"A relaxed social gathering for students after final exams.",fullDescription:"The Post-Exam Hangout is a fun and relaxed social gathering organized after the examination period. It gives students a chance to unwind, connect, take photos, play games, and enjoy time together after a busy semester.",highlights:["Post-exam relaxation","Student networking","Games and social activities","Photos and memories","Community bonding"]},
      "first-annual-pan-african-dinner": {title:"1st Annual Pan-African Dinner",shortDescription:"An evening of African unity, culture, food, games, and meaningful connections. Join students from different African countries as we celebrate the richness and diversity of our continent.",fullDescription:"Join us for an exciting evening of African unity, culture, and celebration at the 1st Annual Pan-African Dinner. This special gathering will bring Africans together to connect, socialize, and celebrate the richness and diversity of our continent. The evening will feature fun games, interactive activities, engaging discussions, cultural exchanges, and opportunities to build meaningful friendships and strengthen our sense of community. Whether you're looking to meet new people, share ideas, celebrate African heritage, or simply enjoy a memorable evening, this is the perfect opportunity! Come ready for good food, great conversations, exciting games, and an unforgettable celebration of African unity. Feel free to invite your friends, classmates, and people from different nationalities.",highlights:["Celebrating African unity and cultural diversity","Fun games and interactive activities","Cultural exchanges and engaging discussions","Networking with students from different nationalities","Building meaningful friendships","Food, conversations, and community bonding"]}
    }
  },
  fr: {
    ui: { upcoming:"À venir", past:"Événements passés", event:"Événement", events:"Événements", notFound:"Introuvable", notFoundText:"Cet événement n’existe pas ou a peut-être été supprimé.", back:"Retour aux événements", learn:"En savoir plus", category:"Catégorie", location:"Lieu", locationTBA:"À confirmer", general:"Général", time:"Heure de l’événement", fee:"Frais de participation", payment:"Informations de paiement", method:"Mode de paiement :", holder:"Titulaire du compte :", iban:"IBAN :", copy:"Copier l’IBAN", copied:"IBAN copié !", copyFailed:"Échec de la copie — veuillez sélectionner l’IBAN manuellement", registration:"Inscription", registrationText:"Réservez votre place en remplissant le formulaire d’inscription.", register:"S’inscrire maintenant", findUs:"Nous trouver", map:"Voir le lieu sur Google Maps", countries:"Pays et communautés représentés", leaders:"Présentation des leaders et héros africains", decorations:"Décorations culturelles", quiz:"Quiz interactif sur les connaissances de l’Afrique", prizes:"Prix culturels", food:"Pays représentés dans la présentation culinaire", highlights:"Temps forts de l’événement", contact:"Contacter les organisateurs", explore:"Découvrir d’autres événements", none:"Aucun événement disponible pour le moment." },
    categories:{culture:"Culture",community:"Communauté"},
    events:{
      "cultural-festival": {title:"Festival culturel panafricain",shortDescription:"Un stand culturel mettant à l’honneur l’unité africaine à travers des visuels, des objets traditionnels, de la cuisine, des figures historiques, des drapeaux, des quiz et des activités interactives.",fullDescription:"Le stand du Festival culturel panafricain présentera la richesse, la diversité et l’unité des cultures africaines à travers des visuels, des objets traditionnels, de la cuisine et des activités interactives. Son objectif est de sensibiliser les visiteurs, de mobiliser les étudiants et de célébrer le patrimoine africain à l’Université Istanbul Medipol.",decorations:["Petits drapeaux représentant chaque pays","Rosaces affichant les pays représentés","Perles","Masques","Instruments de musique"],quizDetails:["Questions sur l’histoire africaine","Questions sur la géographie africaine","Questions sur les cultures africaines","Les participants répondent aux questions sur le stand","Les gagnants reçoivent des prix culturels"],prizes:["T-shirts sur le thème de l’Afrique","Casquettes","Petits souvenirs culturels"],highlights:["Présentations visuelles de leaders et héros africains","Décorations culturelles et objets traditionnels","Quiz sur les connaissances de l’Afrique","Prix culturels et souvenirs","Dégustations de plats traditionnels de certains pays"]},
      "post-exam-hangout": {title:"Rencontre après les examens",shortDescription:"Un moment convivial pour les étudiants après les examens finaux.",fullDescription:"La rencontre après les examens est un rassemblement convivial organisé à la fin de la période d’examens. Elle permet aux étudiants de se détendre, de faire connaissance, de prendre des photos, de jouer et de passer un bon moment ensemble après un semestre chargé.",highlights:["Détente après les examens","Rencontres entre étudiants","Jeux et activités sociales","Photos et souvenirs","Renforcement des liens communautaires"]},
      "first-annual-pan-african-dinner": {title:"1er dîner panafricain annuel",shortDescription:"Une soirée placée sous le signe de l’unité africaine, de la culture, de la cuisine, des jeux et des belles rencontres. Rejoignez des étudiants de différents pays africains pour célébrer la richesse et la diversité de notre continent.",fullDescription:"Rejoignez-nous pour une soirée exceptionnelle consacrée à l’unité africaine, à la culture et à la célébration lors du 1er dîner panafricain annuel. Cette rencontre réunira des Africains afin de faire connaissance, d’échanger et de célébrer la richesse et la diversité de notre continent. Au programme : des jeux, des activités interactives, des discussions enrichissantes, des échanges culturels et de belles occasions de créer des amitiés et de renforcer notre communauté. Que vous souhaitiez rencontrer de nouvelles personnes, partager des idées, célébrer le patrimoine africain ou simplement passer une soirée mémorable, cet événement est fait pour vous. Venez profiter de bons plats, de conversations chaleureuses, de jeux et d’une célébration inoubliable de l’unité africaine. N’hésitez pas à inviter vos amis, camarades de classe et personnes d’autres nationalités.",highlights:["Célébration de l’unité et de la diversité culturelle africaines","Jeux amusants et activités interactives","Échanges culturels et discussions enrichissantes","Rencontres avec des étudiants de différentes nationalités","Création de belles amitiés","Cuisine, conversations et convivialité"]}
    }
  },
  tr: {
    ui: { upcoming:"Yaklaşan", past:"Geçmiş Etkinlikler", event:"Etkinlik", events:"Etkinlikler", notFound:"Bulunamadı", notFoundText:"Bu etkinlik mevcut değil veya kaldırılmış olabilir.", back:"Etkinliklere Geri Dön", learn:"Daha Fazla Bilgi", category:"Kategori", location:"Konum", locationTBA:"Duyurulacak", general:"Genel", time:"Etkinlik Saati", fee:"Katılım Ücreti", payment:"Ödeme Bilgileri", method:"Ödeme Yöntemi:", holder:"Hesap Sahibi:", iban:"IBAN:", copy:"IBAN’ı Kopyala", copied:"IBAN Kopyalandı!", copyFailed:"Kopyalama başarısız — IBAN’ı manuel olarak seçin", registration:"Kayıt", registrationText:"Kayıt formunu doldurarak yerinizi ayırtın.", register:"Hemen Kayıt Ol", findUs:"Bizi Bulun", map:"Google Haritalar’da Konumu Görüntüle", countries:"Temsil Edilen Ülkeler ve Topluluklar", leaders:"Afrikalı Liderler ve Kahramanlar", decorations:"Kültürel Dekorasyonlar", quiz:"İnteraktif Afrika Bilgi Yarışması", prizes:"Kültürel Ödüller", food:"Yemek Sunumunda Yer Alan Ülkeler", highlights:"Etkinliğin Öne Çıkanları", contact:"Organizatörlerle İletişime Geç", explore:"Diğer Etkinlikleri Keşfet", none:"Şu anda mevcut etkinlik bulunmuyor." },
    categories:{culture:"Kültür",community:"Topluluk"},
    events:{
      "cultural-festival": {title:"Pan-Afrika Kültür Festivali",shortDescription:"Görseller, geleneksel eserler, yemekler, liderler, bayraklar, bilgi yarışmaları ve interaktif etkinliklerle Afrika birliğini tanıtan kültürel bir stant.",fullDescription:"Pan-Afrika Kültür Festivali standı; görseller, geleneksel eserler, yemekler ve interaktif etkinlikler aracılığıyla Afrika kültürlerinin zenginliğini, çeşitliliğini ve birliğini tanıtacaktır. Amaç, ziyaretçileri bilgilendirmek, öğrencileri etkinliğe katmak ve İstanbul Medipol Üniversitesi’nde Afrika mirasını kutlamaktır.",decorations:["Her ülkeyi temsil eden küçük bayraklar","Temsil edilen ülkelerin rozetleri","Boncuklar","Maskeler","Müzik aletleri"],quizDetails:["Afrika tarihi hakkında sorular","Afrika coğrafyası hakkında sorular","Afrika kültürü hakkında sorular","Katılımcılar stantta soruları yanıtlar","Kazananlara kültürel ödüller verilir"],prizes:["Afrika temalı tişörtler","Şapkalar","Küçük kültürel hediyelikler"],highlights:["Afrikalı liderlerin ve kahramanların görsel sunumları","Kültürel dekorasyonlar ve geleneksel eşyalar","Afrika Bilgi Yarışması","Kültürel ödüller ve hediyelikler","Seçili ülkelerden geleneksel yemek tadımları"]},
      "post-exam-hangout": {title:"Sınav Sonrası Buluşma",shortDescription:"Final sınavlarından sonra öğrenciler için rahat ve samimi bir sosyal buluşma.",fullDescription:"Sınav Sonrası Buluşma, sınav döneminin ardından düzenlenen eğlenceli ve samimi bir sosyal etkinliktir. Öğrencilere yoğun bir dönemin ardından dinlenme, tanışma, fotoğraf çekme, oyun oynama ve birlikte keyifli vakit geçirme fırsatı sunar.",highlights:["Sınav sonrası rahatlama","Öğrenciler arasında tanışma ve iletişim","Oyunlar ve sosyal aktiviteler","Fotoğraflar ve güzel anılar","Topluluk bağlarını güçlendirme"]},
      "first-annual-pan-african-dinner": {title:"1. Yıllık Pan-Afrika Yemeği",shortDescription:"Afrika birliğini, kültürünü, yemeklerini, oyunları ve anlamlı bağlantıları kutlayan bir akşam. Kıtamızın zenginliğini ve çeşitliliğini kutlamak için farklı Afrika ülkelerinden öğrencilerle bir araya gelin.",fullDescription:"1. Yıllık Pan-Afrika Yemeği’nde Afrika birliğini, kültürünü ve dayanışmasını kutlayacağımız özel bir akşam için bize katılın. Bu buluşma, Afrikalıları bir araya getirerek tanışma, sohbet etme ve kıtamızın zenginliğini ve çeşitliliğini kutlama fırsatı sunacak. Akşam boyunca eğlenceli oyunlar, interaktif etkinlikler, ilgi çekici sohbetler, kültürel paylaşımlar ve yeni dostluklar kurma fırsatları olacak. Yeni insanlarla tanışmak, fikir paylaşmak, Afrika mirasını kutlamak veya sadece unutulmaz bir akşam geçirmek istiyorsanız bu etkinlik tam size göre. Güzel yemekler, keyifli sohbetler, eğlenceli oyunlar ve Afrika birliğini kutlayan unutulmaz bir akşam için hazır olun. Arkadaşlarınızı, sınıf arkadaşlarınızı ve farklı milletlerden tanıdıklarınızı davet edebilirsiniz.",highlights:["Afrika birliğini ve kültürel çeşitliliğini kutlama","Eğlenceli oyunlar ve interaktif etkinlikler","Kültürel paylaşımlar ve ilgi çekici sohbetler","Farklı milletlerden öğrencilerle tanışma","Anlamlı dostluklar kurma","Yemek, sohbet ve topluluk dayanışması"]}
    }
  }
};

function getLanguage() {
  const lang = (document.documentElement.lang || "en").toLowerCase().slice(0,2);
  return ["en", "fr", "tr"].includes(lang) ? lang : "en";
}

const currentLanguage = getLanguage();
const copy = eventCopy[currentLanguage];
const locale = { en:"en-GB", fr:"fr-FR", tr:"tr-TR" }[currentLanguage];

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}

function safeURL(value) {
  if (!value) return "";
  try {
    const url = new URL(value, window.location.origin);
    return ["http:","https:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

function getEventDate(event) {
  const [y,m,d] = event.date.split("-").map(Number);
  return new Date(y, m-1, d);
}

function formatEventDate(dateString) {
  const [y,m,d] = dateString.split("-").map(Number);
  return new Date(y,m-1,d).toLocaleDateString(locale,{day:"numeric",month:"long",year:"numeric"});
}

function localizedEvent(event) {
  const translated = copy.events[event.id] || {};
  const localized = {
    ...event,
    ...translated,
    category: copy.categories?.[event.category.toLowerCase()] || event.category,
    location: event.location
  };

  if (event.participationFee) {
    localized.participationFee =
      currentLanguage === "fr" ? "200 TL par personne" :
      currentLanguage === "tr" ? "Kişi başı 200 TL" :
      event.participationFee;
  }

  if (event.eventTime && currentLanguage !== "en") {
    localized.eventTime = currentLanguage === "fr"
      ? { start: "16 h 00", end: "20 h 00" }
      : { start: "16.00", end: "20.00" };
  }

  if (event.location === "Istanbul Medipol University") {
    localized.location =
      currentLanguage === "fr" ? "Université Istanbul Medipol" :
      currentLanguage === "tr" ? "İstanbul Medipol Üniversitesi" :
      event.location;
  }

  return localized;
}

function renderList(title, items) {
  if (!Array.isArray(items) || !items.length) return "";
  return `<div class="event-extra-section"><h3>${escapeHTML(title)}</h3><ul class="event-highlights">${items.map(item=>`<li>${escapeHTML(item)}</li>`).join("")}</ul></div>`;
}

function renderBadges(title, items) {
  if (!Array.isArray(items) || !items.length) return "";

  const countryNames =
    currentLanguage === "fr"
      ? {"South Africa":"Afrique du Sud","South Sudan":"Soudan du Sud","Gambia":"Gambie","Afro-Turks":"Afro-Turcs"}
      : currentLanguage === "tr"
      ? {"South Africa":"Güney Afrika","South Sudan":"Güney Sudan","Gambia":"Gambiya"}
      : {};

  return `<div class="event-extra-section"><h3>${escapeHTML(title)}</h3><div class="countries-grid">${items.map(item=>`<span class="country-badge">${escapeHTML(countryNames[item] || item)}</span>`).join("")}</div></div>`;
}

function renderEventCards() {
  const container = document.getElementById("eventsContainer");
  if (!container) return;

  container.innerHTML = "";

  const today = new Date();
  today.setHours(0,0,0,0);

  const upcoming = events
    .filter(e=>getEventDate(e)>=today)
    .sort((a,b)=>getEventDate(a)-getEventDate(b));

  const past = events
    .filter(e=>getEventDate(e)<today)
    .sort((a,b)=>getEventDate(b)-getEventDate(a));

  const cards = list => list.map(raw=>{
    const event = localizedEvent(raw);

    return `<div class="col-md-4 fade-up visible">
      <div class="event-card">
        <div class="event-img">${escapeHTML(event.image || "🌍")}</div>
        <div class="event-body">
          <div class="event-date">${escapeHTML(formatEventDate(event.date))}</div>
          <span class="event-status">${escapeHTML(list===upcoming ? copy.ui.upcoming : copy.ui.past)}</span>
          <h3>${escapeHTML(event.title)}</h3>
          <p>${escapeHTML(event.shortDescription)}</p>
          <div class="event-location">📍 ${escapeHTML(event.location || copy.ui.locationTBA)}</div>
          <a href="event-details.html?id=${encodeURIComponent(event.id)}" class="btn-learn">${escapeHTML(copy.ui.learn)}</a>
        </div>
      </div>
    </div>`;
  }).join("");

  if (upcoming.length) {
    container.innerHTML += `<div class="col-12"><h2 class="section-title small-title">${escapeHTML(copy.ui.upcoming)} <span>${escapeHTML(copy.ui.events)}</span></h2></div>${cards(upcoming)}`;
  }

  if (past.length) {
    container.innerHTML += `<div class="col-12 mt-5"><h2 class="section-title small-title">${escapeHTML(copy.ui.past)}</h2></div>${cards(past)}`;
  }

  if (!events.length) {
    container.innerHTML = `<div class="col-12"><p>${escapeHTML(copy.ui.none)}</p></div>`;
  }
}

function renderEventDetails() {
  const target = document.getElementById("eventDetails");
  if (!target) return;

  const eventId = new URLSearchParams(window.location.search).get("id");
  const raw = events.find(item=>item.id===eventId);

  if (!raw) {
    target.innerHTML = `<div class="event-detail-content">
      <h1 class="section-title">${escapeHTML(copy.ui.event)} <span>${escapeHTML(copy.ui.notFound)}</span></h1>
      <p class="event-full-description">${escapeHTML(copy.ui.notFoundText)}</p>
      <a href="events.html" class="btn-gold">${escapeHTML(copy.ui.back)}</a>
    </div>`;
    return;
  }

  const event = localizedEvent(raw);
  const ui = copy.ui;

  const time = event.eventTime || (event.time ? {start:event.time} : null);

  const timeSection = time
    ? `<div class="event-extra-section">
        <h3>${escapeHTML(ui.time)}</h3>
        <p>${escapeHTML(time.start || "")}${time.end ? ` – ${escapeHTML(time.end)}` : ""}</p>
      </div>`
    : "";

  const feeSection = event.participationFee
    ? `<div class="event-extra-section">
        <h3>${escapeHTML(ui.fee)}</h3>
        <p>${escapeHTML(event.participationFee)}</p>
      </div>`
    : "";

  const payment = event.registrationDetails;

  const paymentSection = payment
    ? `<div class="event-extra-section">
        <h3>${escapeHTML(ui.payment)}</h3>
        <p><strong>${escapeHTML(ui.method)}</strong> ${escapeHTML(
          currentLanguage==="fr" && payment.paymentMethod==="Bank Transfer" ? "Virement bancaire" :
          currentLanguage==="tr" && payment.paymentMethod==="Bank Transfer" ? "Banka havalesi" :
          payment.paymentMethod || ""
        )}</p>
        <p><strong>${escapeHTML(ui.holder)}</strong> ${escapeHTML(payment.accountHolder || "")}</p>
        ${payment.iban ? `<div class="payment-iban">
          <p><strong>${escapeHTML(ui.iban)}</strong></p>
          <p class="iban-value">${escapeHTML(payment.iban)}</p>
          <button type="button" class="btn-outline-gold" id="copyEventIBAN">${escapeHTML(ui.copy)}</button>
        </div>` : ""}
      </div>`
    : "";

  const registrationURL = safeURL(event.registrationLink);

  const registrationSection = registrationURL
    ? `<div class="event-extra-section">
        <h3>${escapeHTML(ui.registration)}</h3>
        <p>${escapeHTML(ui.registrationText)}</p>
        <a href="${escapeHTML(registrationURL)}" target="_blank" rel="noopener noreferrer" class="btn-gold">${escapeHTML(ui.register)}</a>
      </div>`
    : "";

  const mapURL = safeURL(event.mapLink);

  const mapSection = mapURL
    ? `<div class="event-extra-section">
        <h3>${escapeHTML(ui.findUs)}</h3>
        <a href="${escapeHTML(mapURL)}" target="_blank" rel="noopener noreferrer" class="btn-outline-gold">${escapeHTML(ui.map)}</a>
      </div>`
    : "";

  target.innerHTML = `
    <div class="event-detail-image">${escapeHTML(event.image || "🌍")}</div>
    <div class="event-detail-content">
      <div class="event-date">${escapeHTML(formatEventDate(event.date))}</div>
      <h1 class="section-title">${escapeHTML(event.title)}</h1>

      <div class="event-meta">
        <div><strong>${escapeHTML(ui.category)}:</strong> <span>${escapeHTML(event.category || ui.general)}</span></div>
        <div><strong>${escapeHTML(ui.location)}:</strong> <span>${escapeHTML(event.location || ui.locationTBA)}</span></div>
      </div>

      <p class="event-full-description">${escapeHTML(event.fullDescription || event.shortDescription || "")}</p>

      ${timeSection}
      ${feeSection}
      ${paymentSection}
      ${registrationSection}
      ${mapSection}

      ${renderBadges(ui.countries,event.representedCountries)}
      ${renderList(ui.leaders,event.leaders)}
      ${renderList(ui.decorations,event.decorations)}
      ${renderList(ui.quiz,event.quizDetails)}
      ${renderList(ui.prizes,event.prizes)}
      ${renderBadges(ui.food,event.foodShowcase)}
      ${renderList(ui.highlights,event.highlights)}

      <div class="event-actions">
        <a href="contact.html" class="btn-gold">${escapeHTML(ui.contact)}</a>
        <a href="events.html" class="btn-outline-gold">${escapeHTML(ui.explore)}</a>
      </div>
    </div>`;

  const copyButton = document.getElementById("copyEventIBAN");

  if (copyButton && payment?.iban) {
    copyButton.addEventListener("click", async ()=>{
      try {
        await navigator.clipboard.writeText(payment.iban);
        copyButton.textContent = ui.copied;
      } catch {
        copyButton.textContent = ui.copyFailed;
      }
    });
  }
}

// Keep the selected event ID when visitors switch languages.
function initLanguageLinks() {
  const id = new URLSearchParams(window.location.search).get("id");

  const targets = {
    en: "../event-details.html",
    fr: "../fr/event-details.html",
    tr: "../tr/event-details.html"
  };

  document.querySelectorAll("[data-language-link]").forEach(link=>{
    const lang = link.getAttribute("data-language-link");

    if (targets[lang]) {
      link.href = targets[lang] + (id ? `?id=${encodeURIComponent(id)}` : "");
    }
  });
}

function initNavbarScroll() {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  window.addEventListener("scroll",()=>{
    nav.classList.toggle("scrolled",window.scrollY>60);
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const links = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

  if (!sections.length || !links.length) return;

  window.addEventListener("scroll",()=>{
    let current = "";

    sections.forEach(section=>{
      if (window.scrollY>=section.offsetTop-120) current=section.id;
    });

    links.forEach(link=>{
      link.classList.remove("active");
      const href = link.getAttribute("href");

      if (
        href==="#"+current ||
        href===current+".html" ||
        (current==="home" && href==="index.html")
      ) {
        link.classList.add("active");
      }
    });
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll(".fade-up");
  if (!elements.length) return;

  if (!("IntersectionObserver" in window)) {
    elements.forEach(el=>el.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },{threshold:.1});

  elements.forEach(el=>observer.observe(el));
}

function initFloatingWidget() {
  const widget = document.querySelector(".floating-contact-widget");
  const main = document.getElementById("floatMainBtn");
  const open = document.getElementById("openMiniChat");
  const panel = document.getElementById("miniChatPanel");
  const close = document.getElementById("closeMiniChat");

  if (widget && main) {
    main.addEventListener("click",()=>widget.classList.toggle("active"));
  }

  if (open && panel) {
    open.addEventListener("click",()=>panel.classList.add("show"));
  }

  if (close && panel) {
    close.addEventListener("click",()=>panel.classList.remove("show"));
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  renderEventCards();
  renderEventDetails();
  initLanguageLinks();
  initNavbarScroll();
  initActiveNav();
  initScrollReveal();
  initFloatingWidget();

  if (typeof renderTeam==="function") renderTeam();
});