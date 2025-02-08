const goodRegister = document.getElementById("good-btn");
const badRegister = document.getElementById("bad-btn");
let todayId = new Date().toLocaleDateString("pt-BR", { day: "numeric" });
let today = document.getElementById(todayId);
let mounth = new Date().toLocaleDateString("pt-BR", { month: "long" });
document.getElementById("mounth").innerHTML = mounth;

if (mounth == "fevereiro") {
  document.querySelector(".five").classList.add("hidden");
}

goodRegister.addEventListener("click", () => {
  if (today.classList.contains("bad")) {
    today.classList.remove("bad");
  }
  document.getElementById(todayId).classList.add("good");
});
badRegister.addEventListener("click", () => {
  if (today.classList.contains("good")) {
    today.classList.remove("good");
  }
  document.getElementById(todayId).classList.add("bad");
});
