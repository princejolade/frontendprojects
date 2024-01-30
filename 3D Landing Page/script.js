const btn = document.querySelector(".btn");

const anime = (() => {
  const boxes = document.querySelectorAll(".box");
  const heading = document.querySelector(".heading span");
  let ctx = {};
  ctx.current = 1;
  ctx.span = btn.firstElementChild;
  ctx.interval = -1;
  ctx.colors = new Map([
    ["JS", "#efd81d"],
    ["React", "#61dbfb"],
    ["Vue", "#41b883"],
    ["Angular", "#b52e31"],
    ["Node", "#43853d"],
    ["Sass", "#cf649a"],
    ["Ember", "#e04e39"],
  ]);

  bindIndividualToggle();
  function toggleBox(box) {
    let self = box;
    let text = self.getAttribute("data-text");
    let color = ctx.colors.get(text);
    self.classList.add("active");
    heading.style.color = color;
    heading.textContent = text;
    btn.style.backgroundColor = color;
    ctx.span.textContent = text;
  }

  function bindIndividualToggle() {
    boxes.forEach((box) => {
      box.addEventListener("click", () => {
        stopAutoSwapping();
        boxes.forEach((cube) => cube.classList.remove("active"));
        toggleBox(box);
      });
    });
  }

  function autoSwapBox() {
    ctx.current > boxes.length && (ctx.current = 1);

    boxes.forEach((box) => {
      let boxIdx = +box.classList[1].split("-")[1];
      if (boxIdx === ctx.current) toggleBox(box);
      else box.classList.remove("active");
    });
    ctx.current++;
  }

  function startAutoSwapping(ms) {
    ctx.interval = setInterval(autoSwapBox, ms);
  }

  function stopAutoSwapping() {
    clearInterval(ctx.interval);
    ctx.interval = NaN;
  }

  return { startAutoSwapping, stopAutoSwapping };
})();

anime.startAutoSwapping(5000);
