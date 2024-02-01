const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const changeText = document.getElementById("text");
  setTimeout(() => {
    changeText.textContent = "ボタンをクリックしました！";
  }, 2000);
})