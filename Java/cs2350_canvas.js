function myCanvas() {
    var c = document.getElementById("theCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("img");
    ctx.drawImage(img, 10, 10, 150, 180);
  }