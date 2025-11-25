onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'I LOVE YOU Cuteness'.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300);
      } else {
        // Start flower rain when the title fully appears
        startFlowerRain();
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};


// ------------------------------------------
// FLOWER RAIN EFFECT
// ------------------------------------------

function startFlowerRain() {
  const flowers = ["🌸", "💮", "🌺", "🌷", "🌻"];

  setInterval(() => {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 3 + Math.random() * 3 + "s";
    flower.style.fontSize = 20 + Math.random() * 20 + "px";

    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 6000);
  }, 200);
}
