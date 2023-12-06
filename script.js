document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  let currentTranslate = 0;

  function updateSlider() {
    slider.style.transform = "translateX(" + currentTranslate + "px)";
  }

  function startAutoSlide() {
    setTimeout(() => {
      const currentIndex = Math.round(-currentTranslate / slides[0].offsetWidth);
      const nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
      currentTranslate = -nextIndex * slides[0].offsetWidth;
      updateSlider();
      startAutoSlide(); 
    }, 3000);
  }

  startAutoSlide();
});

function openPopup() {
  document.getElementById("popup").style.display = "flex";
  document.body.classList.add("popup-open");
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.body.classList.remove("popup-open");
}
function closeDeclinePopup() {
  document.getElementById('declinePopup').style.left = '-15%';
}

function redirectToBuy(eventName) {
  const userString = sessionStorage.getItem("user");

  if (!userString) {
    document.getElementById('declinePopup').style.left = '13%';
    setTimeout(() => {
      document.getElementById('declinePopup').style.left = '-15%';
    }, 4000);
    return;
  } else {
    window.location.href = `buyticket.html?event=${eventName}`;
  }
}
function gohome() {
  window.location.reload();

}