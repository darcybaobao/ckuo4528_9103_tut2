const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'dove-of-peace.png'; // Replace with a valid URL or path to Picasso's Dove of Peace

img.onload = function () {
  ctx.translate(canvas.width / 2, canvas.height / 2); // Move to the center of the canvas

  for (let i = 0; i < 12; i++) {
    ctx.save(); // Save the current transformation state
    ctx.rotate((Math.PI / 6) * i); // Rotate the canvas 30 degrees
    ctx.scale(1 - i * 0.08, 1 - i * 0.08); // Scale the dove smaller each time
    ctx.drawImage(img, -50, -50, 100, 100); // Draw the dove at the new orientation and scale
    ctx.restore(); // Restore to the original state before the next transformation
  }
};