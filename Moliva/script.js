const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");

dropdownButton.addEventListener("click", (event) => {
  event.stopPropagation();
  dropdownMenu.classList.toggle("show");
});

window.addEventListener("click", () => {
  dropdownMenu.classList.remove("show");
});

// Data for languages and currencies
const languages = [
  { name: "English", flag: "images/english.svg" },
  { name: "Español", flag: "images/espanol.svg" },
  { name: "Français", flag: "images/frances.svg" },
  { name: "Deutsch", flag: "images/deutsch.svg" },
  { name: "Italiano", flag: "images/italino.svg" },
  { name: "Português", flag: "images/potugues.svg" },
  { name: "Русский", flag: "images/pucckn.svg" },
  { name: "中文", flag: "images/china.svg" },
  { name: "日本語", flag: "images/netherland.svg" }
];

const currencies = [
  { code: "USD", name: "United States Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Pound Sterling" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "SGD", name: "Singapore Dollar" }
];

function openModal(title, items, gridSize) {
  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalGrid = document.getElementById('modalGrid');

  modalTitle.textContent = title;
  modalGrid.innerHTML = '';


  modalGrid.style.display = "grid";
  modalGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  modalGrid.style.gap = "15px"; 

  items.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('modal-item');

  
    if (typeof item === "object" && item.flag) {
      const flag = document.createElement('img');
      flag.src = item.flag;
      flag.classList.add('flag-icon');

      const text = document.createElement('span');
      text.textContent = item.name;

      div.appendChild(flag);
      div.appendChild(text);
    } 
    
    else if (typeof item === "object" && item.code) {
      div.innerHTML = `<strong>${item.code}</strong> (${item.name})`;
    }

    div.addEventListener('click', () => {
      alert('Selected: ' + (typeof item === "object" ? `${item.code || item.name}` : item));
      closeModal();
    });

    modalGrid.appendChild(div);
  });

  modalOverlay.style.display = 'flex';
}
function closeModal() {
    document.getElementById("modalOverlay").style.display = "none";
  }

document.getElementById('languageSelector').addEventListener('click', (event) => {
  event.preventDefault();
  openModal('Select Language', languages, 3); 
});

document.getElementById("currencySelector").addEventListener("click", (event) => {
  event.preventDefault();
  openModal("Select Currency", currencies, 2); 
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  closeModal();
});

document.getElementById("modalOverlay").addEventListener("click", (event) => {
  if (event.target === document.getElementById("modalOverlay")) {
    closeModal();
  }
});

// Hero section (Slider)

const images = ["images/image1.jpg", "images/image2.jpg", "images/image3.jpg"];
const headings = [
  "Enjoy the beautiful and romantic nature",
  "Explore majestic mountain ranges",
  "Experience the unique local culture"
];
let currentIndex = 0;
const slider = document.getElementById("slider");
const heading = document.getElementById("heading");
const dotsContainer = document.getElementById("dots");

function updateSlider() {
  slider.style.backgroundImage = `url(${images[currentIndex]})`;
  heading.textContent = headings[currentIndex];
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

function createDots() {
  images.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
    dotsContainer.appendChild(dot);
  });
}

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

createDots();
updateSlider();
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}, 5000);




