// Heart Count
const heartCount = document.getElementById("heart-count");
let count = 0;
const cardSection = document.getElementById("card-main");
cardSection.addEventListener("click", function (event) {
  const clicked = event.target;
  const button = clicked.closest("button");

  if (button && button.id === "heart_count") {
    count++;
    heartCount.textContent = count;
  }
});

// coin deduct and Calling Function-----------------

const coinNumber = document.getElementById("coin-num");
let coins = parseInt(coinNumber.textContent);

const historyBody = document.getElementById("history-info-body");
const clearBtn = document.getElementById("clear-btn");

document.addEventListener("click", function (e) {
  if (e.target.id === "call-btn") {
    const card = e.target.closest(".card");
    const serviceName = card.querySelector("h3").textContent;
    const serviceNumber = card.querySelector("#service-num").textContent;

    if (coins < 20) {
      alert("Not enough coins to make a call!!");
      return;
    }
    coins -= 20;
    coinNumber.textContent = coins;

    alert(`Calling ${serviceName} at ${serviceNumber}`);

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    const item = document.createElement("div");

    item.className =
      "mt-3 space-y-2 bg-gray-50 rounded-xl p-3 border border-gray-200";
    item.innerHTML =
      '<div class="flex justify-between">' +
      '<span class="font-semibold text-lg">' +
      serviceName +
      "</span>" +
      '<span class="text-gray-500 text-[14px]">' +
      timeString +
      "</span>" +
      "</div>" +
      "<div>" +
      '<span class="text-[16px]">' +
      serviceNumber +
      "</span>" +
      "</div>";

    historyBody.prepend(item);
  }
});

clearBtn.addEventListener("click", function () {
  historyBody.innerHTML = "";
});

// ----------Copy Function code----------
document.addEventListener("click", function (e) {});
