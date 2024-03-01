function toggleLines(segment, onOff) {

  const lines = segment.children[0].children;
  for (let i = 0; i < lines.length; i++) {
    if (onOff[i] === 1) {
      lines[i].style.visibility = "visible";
    }
  }
  return segment
}

ABC = {
  a: [0,0,0,0,0,0,1,0, 1,0,0,0, 1,0,1,0],
  b: [0,0,0,0,0,0,0,0, 0,1,1,0, 0,1,0,0],
  c: [0,0,0,0,0,0,0,0, 1,0,0,1, 0,0,0,0],
  d: [0,0,0,0,0,0,0,0, 0,1,1,0, 1,0,1,0],
  e: [0,1,0,0,1,0,0,0, 0,0,0,0, 0,1,0,0],
  f: [0,1,0,0,0,0,0,0, 0,0,0,0, 1,1,1,0],
  g: [0,0,0,0,0,0,0,0, 1,0,0,1, 0,0,1,0],
  h: [0,0,1,1,0,0,0,0, 0,0,0,0, 1,1,1,0],
  i: [0,0,0,0,0,0,0,0, 0,0,0,0, 1,0,1,0],
  j: [0,1,1,0,0,0,0,0, 0,0,1,0, 0,0,0,0],
  k: [0,0,0,0,0,0,1,1, 1,0,0,1, 0,0,0,0],
  l: [0,0,0,0,1,0,0,0, 0,0,0,0, 1,0,1,0],
  m: [0,0,0,0,0,0,0,0, 1,1,0,0, 1,0,1,0],
  n: [0,0,0,0,0,0,1,0, 0,0,0,1, 1,0,1,0],
  o: [0,0,0,0,0,0,0,0, 1,1,0,0, 0,1,0,1],
  p: [1,0,0,0,0,0,1,1, 1,0,0,0, 0,0,0,0],
  q: [0,0,0,0,0,0,0,0, 1,0,0,0, 1,0,1,1],
  r: [0,1,0,0,0,0,0,0, 0,0,0,0, 1,0,1,0],
  s: [0,0,0,0,0,0,0,0, 1,0,1,0, 0,1,0,1],
  t: [1,1,0,0,0,0,0,0, 0,0,0,0, 1,0,1,0],
  u: [0,0,1,1,1,0,0,0, 0,0,0,0, 1,0,1,0],
  v: [0,0,0,0,0,0,0,0, 0,0,1,1, 0,0,0,0],
  w: [0,0,0,0,0,0,0,0, 0,0,1,1, 0,0,1,0],
  x: [0,0,0,0,0,0,0,0, 0,0,0,0, 1,1,1,1],
  y: [0,0,1,0,0,0,0,0, 0,1,1,0, 0,0,0,0],
  z: [0,0,0,0,1,0,0,0, 0,0,1,0, 0,1,0,0],
  blank: [0,0,0,0,0,0,0,0, 0,0,0,0, 0,0,0,0],
}

function addSegmentTo(container, symbol) {
  let template = document.getElementById("display-segment").cloneNode(true).content;
  container.append(toggleLines(template, symbol));
}

function displayTextIn(container, text) {
  container.textContent = "";
  text.toLowerCase().split("").forEach(ch => {
    if (ABC[ch]) {
      addSegmentTo(container, ABC[ch]);
    } else {
      addSegmentTo(container, ABC["blank"]);
    }
  });
}

displayBox = document.getElementById("display-box");

// Object.keys(ABC).forEach(key => {
//   addSegmentTo(displayBox, ABC[key]);
// });

inputBox = document.getElementById("input-box");

inputBox.addEventListener('input', () => {
  displayTextIn(displayBox, inputBox.value);
});

sizeSlider = document.getElementById("size-slider");

sizeSlider.addEventListener("input", () => {
  document.documentElement.style.setProperty('--box-height', `${sizeSlider.value}px`);
  document.documentElement.style.setProperty('--box-width', `${sizeSlider.value}px`);
});
