const terminalStatus = document.querySelector(".blinking");

const messages = [
  "Monitoring threats...",
  "Analyzing telemetry...",
  "Hunting suspicious activity...",
  "Building detections...",
  "Investigating alerts..."
];

let index = 0;

setInterval(() => {
  index = (index + 1) % messages.length;
  terminalStatus.textContent = messages[index];
}, 2200);
