$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

let trailer = document.querySelector(".trailer");
let btnFechar = document.querySelector(".btnFechar");
let add = document.querySelector(".add");
let remove = document.querySelector(".remove");

function paraVideo() {
  var videos = document.querySelectorAll("iframe, video");
  Array.prototype.forEach.call(videos, function (video) {
    if (video.tagName.toLowerCase() === "video") {
      video.pause();
    } else {
      var src = video.src;
      video.src = src;
    }
  });
}

add.addEventListener("click", () => {
  trailer.classList.add("abrir");
  });

remove.addEventListener("click", () => {
  btnFechar.parentNode.classList.remove("abrir");
  paraVideo()
});
