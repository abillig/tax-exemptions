
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
    setInterval(displayNextImage, 1200);
}

var images = [["The Cayman Islands", "assets/cayman2.png"], ["Aruba", "assets/aruba2.png"], ["Ireland", "assets/ireland.png"], ["Iceland", "assets/iceland2.png"], ["Greenland", "assets/greenland2.png"]], x = -1;
