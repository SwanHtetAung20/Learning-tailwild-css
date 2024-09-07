const foodCounter = document.querySelector("#foodCounter");
const menu = document.getElementById("menu");

menu.addEventListener("click", () => {
  foodCounter.classList.contains("hidden")
    ? foodCounter.classList.remove("hidden")
    : foodCounter.classList.add("hidden");
});

document.getElementById("clickToSeeVideos").addEventListener("click", () => {
  window.open(
    "https://www.youtube.com/watch?v=bxmDnn7lrnk&list=PL4cUxeGkcC9gpXORlEHjc5bgnIi5HEGhw&index=1"
  );
});
