let count = 0;
const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
  });
  value.textContent = count;
});
