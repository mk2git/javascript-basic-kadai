const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const changeText = document.getElementById("text");
  changeText.textContent = "ボタンをクリックしました！";
  // text.appendChild(changeText);
})