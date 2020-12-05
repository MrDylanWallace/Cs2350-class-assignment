function myCanvas() {
    var c = document.getElementById("theCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("img");
    ctx.drawImage(img, 10, 10, 500, 500);
  }

  function animate() {
    let rotation = (2 * Math.sin(counter / (3.14 * speed)));
    context.setTransform(scale, 0, 0, scale, canvas.width / 2, canvas.height / 2);
    context.clearRect(-canvas.width / 2, -canvas.height, canvas.width, canvas.height *2);
    for (let i = 0; i < 360; i++) {
      context.strokeStyle = colors[i % 6];
      context.lineWidth = i / 100 + 1;
      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, i);
      context.stroke();
      context.translate(0, i);
      context.rotate((-60 + rotation) * 2 * Math.PI / 360);
    }
    window.requestAnimationFrame(animate);
    counter++;
  }
   
  let colors = ['blue', 'white', 'blue', 'white', 'blue', 'white'];
  let canvas = document.getElementById('myCanvas');
  let context = canvas.getContext('2d');
  let counter = 0;
  let scale = .3;
  let speed = 20;
  animate();
