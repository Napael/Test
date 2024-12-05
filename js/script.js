let sekrol = false;

window.addEventListener("scroll", function () {
  if (!sekrol) {
    window.requestAnimationFrame(function () {
      var navbar = document.querySelector(".navbar");
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
      sekrol = false;
    });
    sekrol = true;
  }
});

// NAVBAR HAMBURGER
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

hamburger.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
});

// ANIMASI TEKS
const elemenTeks = document.getElementById("text");

if (elemenTeks) {
  const teksAwal = "Welcome To TPK 2 Website";
  const teksAkhir = "SMK NEGERI 1 TAMBAKBOYO";
  let indeks = 0;

  function ketikTeks(teks, callback) {
    if (indeks < teks.length) {
      elemenTeks.textContent += teks.charAt(indeks);
      indeks++;
      setTimeout(() => ketikTeks(teks, callback), 100);
    } else {
      setTimeout(callback, 3000);
    }
  }

  function hapusTeks(callback) {
    if (indeks > 0) {
      elemenTeks.textContent = elemenTeks.textContent.slice(0, --indeks);
      setTimeout(() => hapusTeks(callback), 50);
    } else {
      callback();
    }
  }

  function mulaiAnimasi() {
    ketikTeks(teksAwal, () => {
      hapusTeks(() => {
        indeks = 0;
        setTimeout(() => {
          ketikTeks(teksAkhir, () => {
            hapusTeks(() => {
              indeks = 0;
              setTimeout(mulaiAnimasi, 0);
            });
          });
        });
      });
    });
  }

  mulaiAnimasi();
}

// Info
function btninfo(infoLengkapId) {
  const infoLengkap = document.getElementById(infoLengkapId);
  const body = document.body;

  if (
    infoLengkap.style.display === "none" ||
    infoLengkap.style.display === ""
  ) {
    infoLengkap.style.display = "flex";
    body.classList.add("no-scroll");
  } else {
    infoLengkap.style.display = "none";
    body.classList.remove("no-scroll");
  }
}
