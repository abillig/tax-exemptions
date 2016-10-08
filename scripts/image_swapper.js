
  function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("country").src = images[x][1];
    document.getElementById("country_text").innerHTML = images[x][0];
}

// function displayPreviousImage() {
//     x = (x <= 0) ? images.length - 1 : x - 1;
//     document.getElementById("img").src = images[x];
// }

function startTimer() {
    setInterval(displayNextImage, 1500);
}

var images = [["The Cayman Islands", "assets/cayman_islands.png"], ["Aruba", "assets/aruba.png"], ["Panama", "assets/panama.png"], ["Iceland", "assets/iceland.png"], ["Greenland", "assets/greenland.png"]], x = -1;
