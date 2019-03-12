(function setPortfolioHexagonBackgroundImg() {
  const namePrefix = "./assets/portfolio/Layer", namePostfix = "@1X.png",
        nameList = [33, 31, 34, 35, 36, 44, 37, 38, 39, 40, 41, 43, 42];
  let hexagons = document.querySelectorAll(".portfolio-picture-container .hexagon-part2");
  for (let i = 0; i < hexagons.length; i++) {
    hexagons[i].style.backgroundImage = "url('" + namePrefix + nameList[i] + namePostfix + "')";
  }
})();
