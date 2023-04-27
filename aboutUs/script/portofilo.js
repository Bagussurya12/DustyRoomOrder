const konten = document.querySelector(".konten");
const jumbo = document.querySelector(".bigImg");
const thumbs = document.querySelectorAll(".thumb");

konten.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      thumb.className = "thumb";
    });

    e.target.classList.add("activ");
  }
});
