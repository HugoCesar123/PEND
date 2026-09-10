const canvas = document.querySelector("#canvas");
const contexto = canvas.getContext("2d");

contexto.beginPath();
contexto.moveTo(10, 0);
contexto.lineTo(500, 500);
contexto.lineTo(500, 500);
contexto.stroke();

contexto.strokeRect(50, 50, 150, 100);

contexto.fillRect(250, 50, 150, 100);

contexto.beginPath();
contexto.arc(250, 250, 50, 0, Math.PI * 2);
contexto.stroke();