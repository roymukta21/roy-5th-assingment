//heart counter

const heartCountEl = document.getElementById("heartCount");
let heartCount = 0;
const cardHearts = document.querySelectorAll(".card-heart");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-heart")) {
    heartCountEl.textContent = ++heartCount;
    e.target.classList.toggle("text-red-500");
  }
});

// call+clear section

const historyList = document.getElementById("historyList");
const clearBtn = document.querySelector(".clear-btn");

// Handle Call button clicks
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = btn.closest(".bg-white");
    const serviceName = card.querySelector("h2").textContent;
    const number = card.querySelector("p.font-bold").textContent;

    // call Time
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    // new entry
    const entry = document.createElement("div");
    entry.className =
      "border-b border-gray-200 pb-1 flex justify-between items-center";
    entry.innerHTML = `
      <div>
        <span class="font-bold">${serviceName}</span> 
        <span class="text-gray-500">(${number})</span>
      </div>
      <span class="text-xs text-gray-400">${time}</span>
    `;
    historyList.prepend(entry);
  });
});

// Handle Clear button
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
// //copy counter
// const copyCountEl = document.getElementById("copyCount");
// let copyCount = 0;

// document.querySelectorAll(".copy-btn").forEach((btn) => {
//   btn.addEventListener("click", function () {
//     copyCount++;
//     copyCountEl.textContent = copyCount;
//   });
// });

//make copy
// copy counter
const copyCountEl = document.getElementById("copyCount");
let copyCount = 0;

document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // find service number
    const card = btn.closest(".bg-white");
    const number = card.querySelector("p.font-bold").textContent;

    // Copy on clipboard
    navigator.clipboard
      .writeText(number)
      .then(() => {
        // Copy counter for increase
        copyCount++;
        copyCountEl.textContent = copyCount;

        // animation
        btn.textContent = "Copied!";
        setTimeout(() => {
          btn.innerHTML = '<ion-icon name="copy-outline"></ion-icon>Copy';
        }, 1000);
      })
      .catch((err) => {
        console.error("Copy failed: ", err);
      });
  });
});

// call button alert
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".call-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".bg-white");
      const serviceName = card.querySelector("h2").textContent;
      const number = card.querySelector("p.font-bold").textContent;

      alert(`📞 Calling ${serviceName} (${number})...`);
    });
  });
});

//coin
document.addEventListener("DOMContentLoaded", () => {
  const coinCountEl = document.getElementById("coinCount");
  let coins = parseInt(coinCountEl.textContent);

  document.querySelectorAll(".call-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (coins < 20) {
        alert("You haven't enough coin. For calling you need min 20 coin.");
        return;
      }

      const card = btn.closest(".bg-white");
      const serviceName = card.querySelector("h2").textContent;
      const number = card.querySelector("p.font-bold").textContent;

      coins -= 20;
      coinCountEl.textContent = coins;
    });
  });
});
