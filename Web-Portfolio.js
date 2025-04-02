document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".portfolio-item");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            // Hapus class active dari semua tombol, lalu tambahkan ke yang diklik
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            // Filter portofolio
            items.forEach(item => {
                if (category === "all") {
                    item.style.display = "block"; // Tampilkan semua
                } else {
                    if (item.getAttribute("data-category") === category) {
                        item.style.display = "block"; // Tampilkan jika cocok
                    } else {
                        item.style.display = "none"; // Sembunyikan jika tidak cocok
                    }
                }
            });
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".progress-circle").forEach(circle => {
      let percent = circle.getAttribute("data-percent");
      let circumference = 251.2; // Lingkaran penuh
      let progress = circle.querySelector(".progress");
      let offset = circumference - (percent / 100) * circumference;
      progress.style.strokeDashoffset = offset;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const items = document.querySelectorAll(".portfolio-item");

  buttons.forEach(button => {
      button.addEventListener("click", function () {
          const category = this.getAttribute("data-category");

          // Hapus class active dari semua tombol, lalu tambahkan ke yang diklik
          buttons.forEach(btn => btn.classList.remove("active"));
          this.classList.add("active");

          // Filter portofolio
          items.forEach(item => {
              if (category === "all") {
                  item.style.display = "block"; // Tampilkan semua
              } else {
                  if (item.getAttribute("data-category") === category) {
                      item.style.display = "block"; // Tampilkan jika cocok
                  } else {
                      item.style.display = "none"; // Sembunyikan jika tidak cocok
                  }
              }
          });
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  // Ambil semua testimonial cards
  let cards = Array.from(document.querySelectorAll(".swiper-slide"));
  const leftArrow = document.querySelector(".testimonial-button-prev");
  const rightArrow = document.querySelector(".testimonial-button-next");

  function updateLayers() {
    cards.forEach((card, index) => {
      card.classList.remove("active");
      let scale, translateX, zIndex, opacity;

      switch (index) {
        case 0:
          translateX = "-450px";
          scale = "0.6";
          zIndex = "1";
          opacity = "0.5";
          break;
        case 1:
          translateX = "-300px";
          scale = "0.8";
          zIndex = "2";
          opacity = "0.7";
          break;
        case 2:
          translateX = "-150px";
          scale = "1.0";
          zIndex = "3";
          opacity = "0.9";
          break;
        case 3:
          card.classList.add("active");
          translateX = "0";
          scale = "1.2";
          zIndex = "4";
          opacity = "1";
          break;
        case 4:
          translateX = "150px";
          scale = "1.0";
          zIndex = "3";
          opacity = "0.9";
          break;
        case 5:
          translateX = "300px";
          scale = "0.8";
          zIndex = "2";
          opacity = "0.7";
          break;
        case 6:
          translateX = "450px";
          scale = "0.6";
          zIndex = "1";
          opacity = "0.5";
          break;
      }

      card.style.transform = `translateX(${translateX}) scale(${scale})`;
      card.style.zIndex = zIndex;
      card.style.opacity = opacity;
    });
  }

  // Fungsi untuk geser ke kiri
  function shiftLeft() {
    swiper.slidePrev();
  }

  // Fungsi untuk geser ke kanan
  function shiftRight() {
    swiper.slideNext();
  }

  // Event listener tombol prev/next
  leftArrow.addEventListener("click", shiftLeft);
  rightArrow.addEventListener("click", shiftRight);

  // Inisialisasi pertama kali
  updateLayers();
});

