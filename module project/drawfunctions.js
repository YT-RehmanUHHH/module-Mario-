// function drawstickman(x, y, color, ) {
//   // Head
//   ctx.strokeStyle = color;
//   ctx.lineWidth = 2;

//   ctx.beginPath();
//   ctx.arc(x, y, 30, 0, 2 * Math.PI); // 250 , 100 (x,y)
//   ctx.stroke();

//   //Torso
//   ctx.beginPath();
//   ctx.moveTo(x, y + 30);
//   ctx.lineTo(x, y + 100);
//   ctx.stroke();

//   // Left leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x - 25, y + 150);
//   ctx.stroke();

//   // Right leg
//   ctx.beginPath();
//   ctx.moveTo(x, y + 100);
//   ctx.lineTo(x + 25, y + 150);
//   ctx.stroke();

//   //left arm
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(armScale * (x - 40),  * (y + 30));
//   ctx.stroke();

//   //Right arm
//   ctx.beginPath();
//   ctx.moveTo(x, y + 60);
//   ctx.lineTo(armScale * (x + 40), armScale * (y + 30));
//   ctx.stroke();
// }


// Draw the backdrop 
function drawBackdrop() {
    // Sky
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, 500, 600); 

   // Draw the sun
function drawSun(x, y, radius) {
  // Draw the sun's body
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}
drawSun(90, 55, 25)

    // Ground
    ctx.fillStyle = "#32CD32";
    ctx.fillRect(0, 500, 500, 100); 

    // Hills
    drawHill(100, 450, 200, "#228B22"); // Adjusted hill y position
    drawHill(400, 450, 150, "#228B22"); // Adjusted hill y position

    // Clouds
    drawCloud(200, 100);
    drawCloud(400, 50);

}
// Draw a hill
function drawHill(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y = 500 , radius, Math.PI, 2 * Math.PI);
    ctx.fill();
}

// Draw a cloud
function drawCloud(x, y) {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(x, y, 20, Math.PI, 2 * Math.PI);
    ctx.arc(x + 30, y, 20, Math.PI, 2 * Math.PI);
    ctx.arc(x + 60, y, 20, Math.PI, 2 * Math.PI);
    ctx.fill();
}

// Draw Mario
function drawMario(x, y) {
    // Draw Head
    ctx.fillStyle = "rgb(255, 189, 148)";
    ctx.fillRect(x - 15, y - 60, 30, 30);
    
    // Draw Hat
    ctx.fillStyle = "red";
    ctx.fillRect(x - 15, y - 80, 30, 20);
    
    // Draw Hat Brim
    ctx.fillStyle = "red";
    ctx.fillRect(x - 18, y - 60, 36, 5);

    // Draw Eyes
    ctx.fillStyle = "white";
    ctx.fillRect(x - 10, y - 55, 5, 10);
    ctx.fillRect(x + 5, y - 55, 5, 10);

    // Draw Pupils
    ctx.fillStyle = "black";
    ctx.fillRect(x - 8, y - 50, 2, 2);
    ctx.fillRect(x + 7, y - 50, 2, 2);

    // Draw Mustache
    ctx.fillStyle = "brown";
    ctx.fillRect(x - 10, y - 42, 20, 5);

    // Draw Nose
    ctx.fillStyle = "rgb(255, 189, 148)";
    ctx.fillRect(x - 5, y - 48, 10, 8);

    // Draw Body
    ctx.fillStyle = "blue";
    ctx.fillRect(x - 15, y - 30, 30, 40);

    // Draw Overall Straps
    ctx.fillStyle = "yellow";
    ctx.fillRect(x - 15, y - 30, 5, 15);
    ctx.fillRect(x + 10, y - 30, 5, 15);

    // Draw Arms
    ctx.fillStyle = "red";
    ctx.fillRect(x - 25, y - 30, 10, 30);
    ctx.fillRect(x + 15, y - 30, 10, 30);

    // Draw Legs
    ctx.fillStyle = "blue";
    ctx.fillRect(x - 15, y + 10, 10, 30);
    ctx.fillRect(x + 5, y + 10, 10, 30);

    // Draw Shoes
    ctx.fillStyle = "brown";
    ctx.fillRect(x - 15, y + 40, 10, 5);
    ctx.fillRect(x + 5, y + 40, 10, 5);

    // Draw Hands
    ctx.fillStyle = "rgb(255, 189, 148)";
    ctx.fillRect(x - 25, y, 10, 10);
    ctx.fillRect(x + 15, y, 10, 10);
}

// Draw Luigi
function drawLuigi(x, y) {
    // Draw Head
    ctx.fillStyle = "rgb(255, 189, 148)";
    ctx.fillRect(x - 15, y - 60, 30, 30);
  
    // Draw Hat
    ctx.fillStyle = "green"; // Luigi's hat color
    ctx.fillRect(x - 15, y - 80, 30, 20);
  
    // Draw Hat Brim
    ctx.fillStyle = "green"; 
    ctx.fillRect(x - 18, y - 60, 36, 5);

    // Draw Eyes
    ctx.fillStyle = "white";
    ctx.fillRect(x - 10, y - 55, 5, 10);
    ctx.fillRect(x + 5, y - 55, 5, 10);

    // Draw Pupils
    ctx.fillStyle = "black";
    ctx.fillRect(x - 8, y - 50, 2, 2);
    ctx.fillRect(x + 7, y - 50, 2, 2);

    // Draw Mustache
    ctx.fillStyle = "brown";
    ctx.fillRect(x - 10, y - 42, 20, 5);

    // Draw Nose
    ctx.fillStyle = "rgb(255, 189, 148)";
    ctx.fillRect(x - 5, y - 48, 10, 8);

    // Draw Body
    ctx.fillStyle = "blue";
    ctx.fillRect(x - 15, y - 30, 30, 40);

    // Draw Overall Straps
    ctx.fillStyle = "yellow";
    ctx.fillRect(x - 15, y - 30, 5, 15);
    ctx.fillRect(x + 10, y - 30, 5, 15);

    // Draw Arms
    ctx.fillStyle = "green"; // Luigi's arm color
    ctx.fillRect(x - 25, y - 30, 10, 30);
    ctx.fillRect(x + 15, y - 30, 10, 30);

    // Draw Legs
    ctx.fillStyle = "blue";
    ctx.fillRect(x - 15, y + 10, 10, 30);
    ctx.fillRect(x + 5, y + 10, 10, 30);

    // Draw Shoes
    ctx.fillStyle = "brown";
    ctx.fillRect(x - 15, y + 40, 10, 5);
    ctx.fillRect(x + 5, y + 40, 10, 5);

    // Draw Hands
    ctx.fillStyle = "rgb(255, 189, 148)";
    ctx.fillRect(x - 25, y, 10, 10);
    ctx.fillRect(x + 15, y, 10, 10);
}

// Draw a coin with a money sign
function drawCoin(x, y) {
    ctx.fillStyle = "gold";
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "darkgreen";
    ctx.font = "8px Arial";
    ctx.fillText("$", x - 3, y + 3);
}

// Draw a block with a question mark
function drawQuestionBlock(x, y) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(x, y, 20, 20);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, 20, 20);
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.fillText("?", x + 4, y + 16);
}

// Draw a brick block
function drawBrickBlock(x, y) {
    ctx.fillStyle = "brown";
    ctx.fillRect(x, y, 20, 20);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, y, 20, 20);
}

// Draw an alternating pattern of blocks
function drawBlocks() {
    let blockX = 250; // Starting position for blocks
    let blockY = 400; // Y position for blocks

    for (let i = 0; i < 4; i++) {
        if (i % 2 === 0) {
            drawQuestionBlock(blockX, blockY); // Draw a yellow block with question mark
        } else {
            drawBrickBlock(blockX, blockY); // Draw a brown brick block
        }
        blockX += 22; // Move to the right for the next block
    }
}

// Prompt for the number of coins to spawn
function promptForCoins() {
    let numberOfCoins = prompt("How many coins do you want to spawn?", "5");
    if (numberOfCoins === "" || numberOfCoins <= 0) {
        numberOfCoins = 0; // Default to 0
    }
    return numberOfCoins;
  }

  // Main draw function
function draw() {
  drawBackdrop();
  drawLuigi(400, 450); // Draw Luigi
  drawMario(150, 450); // Draw Mario
  drawBlocks(250, 400, 4); // Draw blocks
  let coinsSpawn = promptForCoins();
  for (let i = 0; i < coinsSpawn; i++) {
      drawCoin(Math.random() * 500, Math.random() * (600 - 200));
  }
}

