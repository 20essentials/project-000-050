let lastElement = null;
let active = false;

function move(e) {
  if (!active) return;

  const element = document.elementFromPoint(e.clientX, e.clientY);
  if (!element || element.tagName !== 'SPAN') return;

  if (lastElement && lastElement !== element) {
    lastElement.classList.remove('active');
  }

  element.classList.add('active');
  lastElement = element;
}

function down() {
  active = true;
}

function up() {
  active = false;
  if (lastElement) {
    lastElement.classList.remove('active');
    lastElement = null;
  }
}

document.addEventListener('pointerdown', down);
document.addEventListener('pointerup', up);
document.addEventListener('pointercancel', up);
document.addEventListener('pointermove', move);
