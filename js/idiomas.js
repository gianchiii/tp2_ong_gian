// ============================================
// TechAble - Sistema de Traducción ES/EN
// Versión robusta y simplificada
// ============================================

const translations = {
    es: {
        // NAVEGACIÓN
        "nav.inicio": "Inicio",
        "nav.acerca": "Acerca de",
        "nav.proyectos": "¿Qué hacemos?",
        "nav.contacto": "Contacto",
        "nav.donar": "Donar",

        // HOME
        "home.hero.title": "Donde la tecnología<br>rompe barreras.",
        "home.hero.subtitle": "Impulsamos el talento tecnológico de personas con discapacidad en contextos vulnerables mediante educación digital, inclusión laboral y herramientas innovadoras.",
        "home.hero.btn1": "Conocé nuestros proyectos",
        "home.hero.btn2": "Apoyá la causa",
        "home.carousel.title": "TechAble en acción",
        "home.carousel.subtitle": "Historias reales de transformación a través de la tecnología inclusiva.",
        "home.carousel.slide1.title": "Programación Accesible",
        "home.carousel.slide1.text": "Capacitaciones en desarrollo web con herramientas como NVDA, VoiceOver y lectores de pantalla.",
        "home.carousel.slide2.title": "Laboratorios Tech",
        "home.carousel.slide2.text": "Espacios de innovación donde la robótica y la programación se vuelven accesibles para todos.",
        "home.carousel.slide3.title": "Becas Digitales",
        "home.carousel.slide3.text": "Acceso gratuito a formación de alta calidad para personas en contextos vulnerables.",
        "home.carousel.slide4.title": "Voluntariado Tech",
        "home.carousel.slide4.text": "Mentorías personalizadas que conectan talento con oportunidades laborales reales.",
        "home.card1.title": "Educación Digital",
        "home.card1.text": "Brindamos acceso a cursos y capacitaciones tecnológicas adaptadas para personas con discapacidad en contextos vulnerables.",
        "home.card2.title": "Inclusión Laboral",
        "home.card2.text": "Creamos oportunidades reales de inserción laboral en el mundo digital y tecnológico a través de mentorías y alianzas.",
        "home.card3.title": "Innovación Social",
        "home.card3.text": "Utilizamos herramientas digitales modernas para romper barreras y potenciar capacidades de manera sostenible.",
        "home.cta.title": "Tu apoyo cambia realidades",
        "home.cta.text": "Cada donación permite que más personas con discapacidad accedan a formación tecnológica de calidad y oportunidades laborales.",
        "home.cta.btn": "Hacé tu donación ahora",

        // ACERCA DE
        "about.hero.title": "Acerca de TechAble",
        "about.hero.subtitle": "Nacimos para demostrar que la tecnología puede (y debe) ser una fuerza de inclusión y equidad.",
        "about.mision.title": "Nuestra Misión",
        "about.mision.text": "Brindar herramientas digitales, educación inclusiva y oportunidades reales a personas con discapacidad en contextos vulnerables, para que puedan desarrollar su talento tecnológico y acceder al mundo laboral digital.",
        "about.vision.title": "Nuestra Visión",
        "about.vision.text": "Un futuro donde la discapacidad no sea una barrera para el desarrollo profesional en tecnología. Donde cada persona tenga las mismas oportunidades de aprender, crear e innovar sin importar sus capacidades.",
        "about.historia.title": "Nuestra Historia",
        "about.valores.title": "Lo que nos mueve",
        "about.equipo.title": "Equipo Fundador",
        "about.equipo.subtitle": "Profesionales apasionados por la tecnología y la inclusión.",
        "about.valores.inclusion.title": "🌍 Inclusión Real",
        "about.valores.inclusion.text": "No adaptamos a las personas a la tecnología. Adaptamos la tecnología y los procesos para que todas las personas puedan participar plenamente.",
        "about.valores.colaboracion.title": "🤝 Colaboración",
        "about.valores.colaboracion.text": "Trabajamos junto a empresas, universidades, organizaciones de la sociedad civil y, sobre todo, junto a las personas con discapacidad que son protagonistas de su propio desarrollo.",
        "about.valores.innovacion.title": "💡 Innovación con Propósito",
        "about.valores.innovacion.text": "Usamos las mejores herramientas tecnológicas disponibles, pero siempre al servicio de las personas y no al revés.",
        "about.valores.impacto.title": "📈 Impacto Medible",
        "about.valores.impacto.text": "Cada programa tiene indicadores claros de resultado. Medimos empleabilidad, retención laboral y satisfacción de los participantes.",

        // FOOTER
        "footer.brand": "Tecnología que potencia capacidades. Buenos Aires, Argentina.",
        "footer.explore": "Explorá",
        "footer.join": "Sumate",
        "footer.copyright": "© 2026 TechAble — Buenos Aires, Argentina. Todos los derechos reservados.",
        "footer.link.about": "Acerca de nosotros",
        "footer.link.projects": "Nuestros proyectos",
        "footer.link.contact": "Contacto",
        "footer.link.donate": "Hacé una donación",
        "footer.link.volunteer": "Ser voluntario",
        "footer.link.companies": "Empresas aliadas"
    },

    en: {
        // NAVEGACIÓN
        "nav.inicio": "Home",
        "nav.acerca": "About Us",
        "nav.proyectos": "What We Do",
        "nav.contacto": "Contact",
        "nav.donar": "Donate",

        // HOME
        "home.hero.title": "Where technology<br>breaks barriers.",
        "home.hero.subtitle": "We boost the technological talent of people with disabilities in vulnerable contexts through digital education, job inclusion, and innovative tools.",
        "home.hero.btn1": "See our projects",
        "home.hero.btn2": "Support the cause",
        "home.carousel.title": "TechAble in Action",
        "home.carousel.subtitle": "Real stories of transformation through inclusive technology.",
        "home.carousel.slide1.title": "Accessible Programming",
        "home.carousel.slide1.text": "Web development training using tools like NVDA, VoiceOver, and screen readers.",
        "home.carousel.slide2.title": "Tech Labs",
        "home.carousel.slide2.text": "Innovation spaces where robotics and programming become accessible to everyone.",
        "home.carousel.slide3.title": "Digital Scholarships",
        "home.carousel.slide3.text": "Free access to high-quality training for people in vulnerable contexts.",
        "home.carousel.slide4.title": "Tech Volunteering",
        "home.carousel.slide4.text": "Personalized mentorship connecting talent with real job opportunities.",
        "home.card1.title": "Digital Education",
        "home.card1.text": "We provide access to adapted technological courses and training for people with disabilities in vulnerable contexts.",
        "home.card2.title": "Job Inclusion",
        "home.card2.text": "We create real job placement opportunities in the digital and tech world through mentorship and partnerships.",
        "home.card3.title": "Social Innovation",
        "home.card3.text": "We use modern digital tools to break barriers and sustainably empower capabilities.",
        "home.cta.title": "Your support changes realities",
        "home.cta.text": "Every donation enables more people with disabilities to access quality tech training and job opportunities.",
        "home.cta.btn": "Make your donation now",

        // ACERCA DE
        "about.hero.title": "About TechAble",
        "about.hero.subtitle": "We were born to prove that technology can (and should) be a force for inclusion and equity.",
        "about.mision.title": "Our Mission",
        "about.mision.text": "To provide digital tools, inclusive education, and real opportunities to people with disabilities in vulnerable contexts, so they can develop their technological talent and access the digital job market.",
        "about.vision.title": "Our Vision",
        "about.vision.text": "A future where disability is not a barrier to professional development in technology. Where everyone has the same opportunities to learn, create, and innovate regardless of their abilities.",
        "about.historia.title": "Our Story",
        "about.valores.title": "What Drives Us",
        "about.equipo.title": "Founding Team",
        "about.equipo.subtitle": "Professionals passionate about technology and inclusion.",
        "about.valores.inclusion.title": "🌍 Real Inclusion",
        "about.valores.inclusion.text": "We don't adapt people to technology. We adapt technology and processes so that all people can fully participate.",
        "about.valores.colaboracion.title": "🤝 Collaboration",
        "about.valores.colaboracion.text": "We work together with companies, universities, civil society organizations, and especially with people with disabilities who are the protagonists of their own development.",
        "about.valores.innovacion.title": "💡 Innovation with Purpose",
        "about.valores.innovacion.text": "We use the best available technological tools, but always in service of people, not the other way around.",
        "about.valores.impacto.title": "📈 Measurable Impact",
        "about.valores.impacto.text": "Every program has clear outcome indicators. We measure employability, job retention, and participant satisfaction.",

        // FOOTER
        "footer.brand": "Technology that empowers capabilities. Buenos Aires, Argentina.",
        "footer.explore": "Explore",
        "footer.join": "Join Us",
        "footer.copyright": "© 2026 TechAble — Buenos Aires, Argentina. All rights reserved.",
        "footer.link.about": "About Us",
        "footer.link.projects": "Our Projects",
        "footer.link.contact": "Contact",
        "footer.link.donate": "Make a donation",
        "footer.link.volunteer": "Become a volunteer",
        "footer.link.companies": "Partner companies"
    }
};

const languageRoutes = {
    es: {
        'index.html': 'index.html',
        'acerca-de.html': 'acerca-de.html',
        'proyectos.html': 'proyectos.html',
        'contacto.html': 'contacto.html',
        'donacion.html': 'donacion.html',
        'about.html': 'acerca-de.html',
        'projects.html': 'proyectos.html',
        'contact.html': 'contacto.html',
        'donate.html': 'donacion.html'
    },
    en: {
        'index.html': 'index.html',
        'acerca-de.html': 'about.html',
        'proyectos.html': 'projects.html',
        'contacto.html': 'contact.html',
        'donacion.html': 'donate.html',
        'about.html': 'about.html',
        'projects.html': 'projects.html',
        'contact.html': 'contact.html',
        'donate.html': 'donate.html'
    }
};

function getCurrentPageName() {
    const pageName = window.location.pathname.split('/').pop();
    return pageName || 'index.html';
}

function isEnglishFolder() {
    return window.location.pathname.includes('/techable-en/');
}

function getLanguageUrl(lang) {
    const currentPage = getCurrentPageName();
    const route = languageRoutes[lang] && languageRoutes[lang][currentPage];

    if (lang === 'en') {
        if (isEnglishFolder()) {
            return route || 'index.html';
        }

        return 'techable-en/' + (route || 'index.html');
    }

    if (isEnglishFolder()) {
        return '../' + (route || 'index.html');
    }

    return route || 'index.html';
}

function redirectToLanguage(lang) {
    localStorage.setItem('techable-lang', lang);
    const targetUrl = getLanguageUrl(lang);

    if (targetUrl && targetUrl !== getCurrentPageName()) {
        window.location.href = targetUrl;
        return;
    }

    applyTranslations(lang);
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.bandera').forEach(flag => {
        flag.classList.toggle('active', flag.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('techable-lang', lang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('techable-lang') || (isEnglishFolder() ? 'en' : 'es');

    if (savedLang === 'en' && !isEnglishFolder()) {
        redirectToLanguage('en');
        return;
    }

    if (savedLang === 'es' && isEnglishFolder()) {
        redirectToLanguage('es');
        return;
    }

    applyTranslations(savedLang);

    document.querySelectorAll('.bandera').forEach(flag => {
        flag.onclick = null;
        flag.addEventListener('click', function(e) {
            const lang = this.getAttribute('data-lang');
            if (lang) {
                e.preventDefault();
                redirectToLanguage(lang);
            }
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}