const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

//Definiçao
contexto.lineWidth = 10;
contexto.lineCap = "round";
contexto.lineJoin = "round";

// Cabeça
contexto.beginPath();
contexto.arc(250, 50, 50, 0, Math.PI * 2);
contexto.stroke();

// Corpo
contexto.beginPath();
contexto.moveTo(250, 100);
contexto.lineTo(250, 200);
contexto.stroke();

// Braço esquerdo
contexto.beginPath();
contexto.moveTo(250, 120);
contexto.lineTo(190, 160);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(290, 210);
contexto.lineTo(190, 160);
contexto.stroke();

// Braço direito
contexto.beginPath();
contexto.moveTo(250, 120);
contexto.lineTo(310, 150);
contexto.stroke();

contexto.beginPath();
contexto.moveTo(350, 75);
contexto.lineTo(310, 150);
contexto.stroke();

// Perna esquerda
contexto.beginPath();
contexto.moveTo(250, 200);
contexto.lineTo(200, 270);
contexto.lineTo(200, 350);
contexto.stroke();

// Perna direita
contexto.beginPath();
contexto.moveTo(250, 200);
contexto.lineTo(300, 270);
contexto.lineTo(300, 350);
contexto.stroke();