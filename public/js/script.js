"use stict";
// Proverbs lists
const proverbs = [
  {
    text: "آب در کوزه و ما تشنه لبان می‌گردیم",
    meaning: "گاهی آنچه به دنبالش هستیم، نزدیکی ماست اما ما از آن غافلیم",
  },
  {
    text: "نه به آن شوری شور، نه به این بی‌نمکی",
    meaning: "در هر کاری باید حد تعادل را رعایت کرد",
  },
  {
    text: "خود کرده را تدبیر نیست",
    meaning: "کسی که خودش باعث بدبختی‌اش شده، نمی‌تواند شکایت کند",
  },
  {
    text: "دیگ به دیگ می‌گوید رویت سیاه",
    meaning: "کسی که خودش مشکل دارد، دیگران را سرزنش می‌کند",
  },
];

let currentIndex = 0;

document
  .getElementById("nextProverbBtn")
  .addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % proverbs.length;
    document.getElementById("dailyProverbText").innerText =
      proverbs[currentIndex].text;
    document.getElementById("dailyProverbMeaning").innerText =
      proverbs[currentIndex].meaning;
  });

//   Search and Filter

const buttons = document.querySelectorAll(".category-btns .btn");
const searchInput = document.querySelector(".search-box input");
const cards = document.querySelectorAll(".proverb-card");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.innerText.trim();
    cards.forEach((card) => {
      const cardCategory = card.dataset.category;
      if (category === "همه" || cardCategory === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim();
  cards.forEach((card) => {
    const content = card.innerText;
    if (content.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// Hero Section Animation
document.addEventListener("DOMContentLoaded", () => {
  const heroItems = document.querySelectorAll(
    ".hero h2, .hero p, .hero button, .hero a"
  );

  heroItems.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * 300);
  });
});

///// Card Animations
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  cards.forEach((card) => observer.observe(card));
});
AOS.init();
