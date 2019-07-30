const gradientBackgrounds = [
  ['#12c2e9', '#c471ed', '#f64f59'],
  ['#C6FFDD', '#FBD786', '#f64f59'],
  ['#8E2DE2', '#4A00E0'],
  ['#00F260', '#0575E6'],
  ['#fc00ff', '#00dbde'],
  ['#00c3ff', '#ffff1c'],
  ['#3494E6', '#EC6EAD'],
  ['#1a2a6c', '#b21f1f', '#fdbb2d'],
];

export function getRandomBackground() {
  const index = Math.floor(Math.random() * gradientBackgrounds.length);
  return `linear-gradient(30deg, ${gradientBackgrounds[index]})`;
}
