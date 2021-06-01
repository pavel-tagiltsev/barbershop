var mapLinks = document.querySelectorAll(".map-link");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

var addModalShow = function () {
  for (var i = 0; i < mapLinks.length; i++) {
    mapLinks[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });
  }
};

addModalShow();

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});
