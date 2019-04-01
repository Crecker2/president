window.onload = () => {
  initializeNav();
};

const initializeNav = () => {
  const [ nav ] = document.getElementsByTagName('nav');

  window.setTimeout(() => {
    started = true;
    checkMouse();
  }, 2000);

  let started = false;
  let mouseCoords = [0, 500];

  document.onmousemove = e => {
    mouseCoords = [ e.clientX, e.clientY ];
    if (started) {
      checkMouse();
    }
  };

  const checkMouse = () => {
    if (mouseCoords[1] < 150) {
      nav.className = '';
    } else {
      nav.className = 'hidden';
    }
  }
};
