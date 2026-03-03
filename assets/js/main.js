const navbar = document.getElementById("mainNav");
const whatsappFloat = document.getElementById("whatsappFloat");
const backToTop = document.getElementById("backToTop");

function handleScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 60) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
  if (scrollY > 500) {
    whatsappFloat.classList.add("show");
    backToTop.classList.add("show");
  } else {
    whatsappFloat.classList.remove("show");
    backToTop.classList.remove("show");
  }
}
window.addEventListener("scroll", handleScroll);
handleScroll();

/* SCROLL REVEAL */
const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
);
revealElements.forEach((el) => revealObserver.observe(el));

/* COUNTER */
function animateCounter(el) {
  const target = parseInt(el.getAttribute("data-count"));
  const duration = 1800;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(eased * target);
    el.textContent = el.closest(".stat-item").querySelector(".percent") ? value + "%" : value;
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = el.closest(".stat-item").querySelector(".percent") ? target + "%" : target;
    }
  }
  requestAnimationFrame(update);
}
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".stat-number").forEach((c) => animateCounter(c));
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 },
);
const statsSection = document.querySelector(".hero-stats");
if (statsSection) counterObserver.observe(statsSection);

/* PHONE MASK */
const phoneInput = document.getElementById("inputPhone");
if (phoneInput) {
  phoneInput.addEventListener("input", function (e) {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 6) v = "(" + v.slice(0, 2) + ") " + v.slice(2, 7) + "-" + v.slice(7);
    else if (v.length > 2) v = "(" + v.slice(0, 2) + ") " + v.slice(2);
    else if (v.length > 0) v = "(" + v;
    e.target.value = v;
  });
}

/* FORM */
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
if (form) form.addEventListener("submit", function (e) {
  e.preventDefault();
  formMessage.className = "form-message";
  formMessage.style.display = "none";
  const name = document.getElementById("inputName").value.trim();
  const phone = document.getElementById("inputPhone").value.trim();
  const email = document.getElementById("inputEmail").value.trim();
  const area = document.getElementById("inputArea").value;
  const message = document.getElementById("inputMessage").value.trim();
  const lgpd = document.getElementById("lgpdCheck").checked;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errors = [];
  if (!name) errors.push("Preencha o nome completo.");
  if (!phone || phone.replace(/\D/g, "").length < 10) errors.push("Telefone inválido.");
  if (!email || !emailRegex.test(email)) errors.push("E-mail inválido.");
  if (!area) errors.push("Selecione a área de interesse.");
  if (!message) errors.push("Descreva brevemente seu caso.");
  if (!lgpd) errors.push("Aceite a Política de Privacidade.");
  if (errors.length > 0) {
    formMessage.className = "form-message error";
    formMessage.innerHTML = errors.join("<br>");
    formMessage.style.display = "block";
    return;
  }
  const btn = document.getElementById("btnSubmit");
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span> Enviando...';
  btn.disabled = true;
  setTimeout(() => {
    formMessage.className = "form-message success";
    formMessage.innerHTML = '<i class="bi bi-check-circle me-2"></i> Mensagem enviada com sucesso! Retornaremos em breve.';
    formMessage.style.display = "block";
    form.reset();
    btn.innerHTML = originalText;
    btn.disabled = false;
  }, 1500);
});

/* COOKIES */
const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");
if (!localStorage.getItem("mp_cookie_consent")) {
  setTimeout(() => {
    cookieBanner.classList.add("show");
  }, 2000);
}
cookieAccept.addEventListener("click", function () {
  localStorage.setItem("mp_cookie_consent", "true");
  cookieBanner.classList.remove("show");
});

/* SMOOTH SCROLL for back-to-top */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href === "#") return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});
