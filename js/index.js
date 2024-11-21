const images = [
  "https://images.pexels.com/photos/29288524/pexels-photo-29288524/free-photo-of-black-and-white-portrait-on-antibes-rocks.jpeg",
  "https://images.pexels.com/photos/27176219/pexels-photo-27176219/free-photo-of-young-woman-decorating-a-christmas-tree.jpeg",
  "https://images.pexels.com/photos/27574694/pexels-photo-27574694/free-photo-of-a-woman-taking-a-photo-with-her-camera.jpeg2"
];

const quotes = [
  "Liburanku jadi menyenangkan bersama Travel Agentku",
  "Perjalanan liburanku semakin sempurna!",
  "Tiap momen liburanku terasa istimewa berkat!"
];

let currentIndex = 0;
const imageElement = document.querySelector("#bannerImage");
const quotesElement = document.querySelector("#quotes");
const intervalTime = 3000;

imageElement.src = images[0];
quotesElement.textContent = quotes[0];

function autoSlideHandler(item, element, attr = null) {
  currentIndex = (currentIndex + 1) % item.length;
  if (attr === "src") {
    element.src = item[currentIndex];
  } else {
    element.textContent = item[currentIndex];
  }
}

setInterval(() => autoSlideHandler(images, imageElement, "src"), intervalTime);
setInterval(() => autoSlideHandler(quotes, quotesElement), intervalTime);

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const interestField = document.getElementById("interest");

  let isValid = true;

  const name = nameField.value.trim();
  if (!name || name.split(" ").length < 2) {
    isValid = false;
    alert("Please enter your full name (first and last).");
    nameField.focus();
  }

  const email = emailField.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (isValid && (!email || !emailPattern.test(email))) {
    isValid = false;
    alert("Please enter a valid email address.");
    emailField.focus();
  }

  if (isValid && !interestField.value) {
    isValid = false;
    alert("Please select an interest.");
    interestField.focus();
  }

  if (isValid) {
    alert("Form submitted successfully!");
    event.target.submit();
  }
});

