// heart counter
const heartCountEl = document.getElementById("heartCount");
let heartCount = 0;
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("card-heart")) {
    heartCountEl.textContent = ++heartCount;
    e.target.classList.toggle("text-red-500");
  }
});

// call + copy + clear section
const historyList = document.getElementById("historyList");
const clearBtn = document.querySelector(".clear-btn");
const copyCountEl = document.getElementById("copyCount");
let copyCount = 0;

// coin
const coinCountEl = document.getElementById("coinCount");
let coins = parseInt(coinCountEl.textContent);

// Handle Call button clicks (all logic here)
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const serviceName = card.querySelector("h2").textContent;
    const number = card.querySelector("p.font-bold").textContent;

    if (coins < 20) {
      alert("You haven't enough coin. For calling you need min 20 coin.");
      return; // stop if not enough coin
    }

    // Deduct coins
    coins -= 20;
    coinCountEl.textContent = coins;

    // Show alert
    alert(`📞 Calling ${serviceName} (${number})...`);

    // Add to history (only if enough coin)
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

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

// Handle Copy button clicks
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const number = card.querySelector("p.font-bold").textContent;

    navigator.clipboard
      .writeText(number)
      .then(() => {
        copyCount++;
        copyCountEl.textContent = copyCount;

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

// Handle Clear button
clearBtn.addEventListener("click", () => {
  historyList.innerHTML = "";
});
