const products = [
  { name: "Telegram Number Checker", desc: "Check if a phone number is registered on Telegram.", price: "₦100,000", type: "upload" },
  { name: "BTC Wallet Generator", desc: "Create unlimited Bitcoin wallet addresses for testing or demo purposes.", price: "₦100,000", type: "upload" },
  { name: "Email Leak Checker", desc: "Find out if your email has been exposed in any data breaches.", price: "₦100,000", type: "upload" },
  { name: "BTC Transaction Unlock Key", desc: "Generate or verify hash keys required to access locked BTC transactions.", price: "₦124,900", type: "paste" },
  { name: "Telegram Login Hash Tool", desc: "Bypass restrictions using special login hash for Telegram Web access.", price: "₦137,000", type: "paste" },
  { name: "Private API Key Generator", desc: "Get unique API keys for premium access to crypto and data services.", price: "₦142,000", type: "paste" },
  { name: "Hash Unlocker Pro", desc: "Tool to decrypt SHA256/MD5 hashes used in secure logins or file access.", price: "₦128,500", type: "paste" },
  { name: "Exchange Fee Bypass Token", desc: "Special hash/token to reduce or remove fees on select exchanges.", price: "₦136,900", type: "paste" },
  { name: "Browser Fingerprint Spoofer", desc: "Bypass website security using fake browser/device fingerprints.", price: "₦149,000", type: "upload" },
  { name: "Crypto Gas Fee Saver", desc: "Reduce gas fees on Ethereum, BNB and more.", price: "₦125,000", type: "upload" },
  { name: "Telegram Message Injector", desc: "Inject invisible or encoded messages inside Telegram chats.", price: "₦130,000", type: "upload" },
  { name: "Cloudflare Bypass Script", desc: "Bypass common Cloudflare protections and captchas.", price: "₦135,000", type: "upload" },
  { name: "Dark Web Email Extractor", desc: "Extract sensitive email addresses from dark web dumps.", price: "₦144,000", type: "upload" },
  { name: "Premium ChatGPT Jailbreaker", desc: "Unlock advanced behavior of GPT bots.", price: "₦150,000", type: "paste" },
  { name: "Deep Search API Token", desc: "Premium data access from surface + deep web.", price: "₦155,000", type: "paste" }
];

let selectedProduct = null;

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const productGrid = document.getElementById("products");
products.forEach((p, index) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <p class="price">${p.price}</p>
    <button onclick="handleClick(${index})">Buy</button>
  `;
  productGrid.appendChild(div);
});

function handleClick(index) {
  const product = products[index];
  selectedProduct = product;
  document.getElementById("uploadSection").classList.toggle("hidden", product.type !== "upload");
  document.getElementById("pasteSection").classList.toggle("hidden", product.type !== "paste");
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function closeConfirmation() {
  document.getElementById("confirmation").classList.add("hidden");
}

document.getElementById("purchaseForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const accNumber = document.getElementById("accNumber").value.trim();
  const bankName = document.getElementById("bankName").value.trim();
  const accName = document.getElementById("accName").value.trim();

  if (!/^\d+$/.test(accNumber) || !/^[a-zA-Z\s]+$/.test(bankName) || !/^[a-zA-Z\s]+$/.test(accName)) {
    alert("Please enter valid account details.");
    return;
  }

  if (selectedProduct.type === "upload") {
    const file = document.getElementById("uploadFile").files[0];
    if (!file || !file.name.toLowerCase().includes(selectedProduct.name.toLowerCase().split(" ")[0])) {
      alert("Uploaded file is not the product.");
      return;
    }
  }

  if (selectedProduct.type === "paste") {
    const text = document.getElementById("pasteText").value.trim();
    if (!text.endsWith("3446")) {
      alert("Pasted content is not the product.");
      return;
    }
  }

  document.getElementById("modal").classList.add("hidden");
  document.getElementById("confirmationDetails").innerText = `
    Account Number: ${accNumber}
    Bank Name: ${bankName}
    Account Holder: ${accName}
  `;
  document.getElementById("confirmation").classList.remove("hidden");
});

/* ==== Trading Chart / Ticker Simulation ==== */
const tradingPairs = [
  { symbol: "BTC/USDT", price: 65875.12 },
  { symbol: "ETH/USDT", price: 3234.55 },
  { symbol: "BNB/USDT", price: 581.32 },
  { symbol: "SOL/USDT", price: 143.88 },
  { symbol: "XRP/USDT", price: 0.62 },
  { symbol: "DOGE/USDT", price: 0.148 },
  { symbol: "ADA/USDT", price: 0.482 }
];

const tickerContainer = document.querySelector(".trading-ticker");

function renderTicker() {
  tickerContainer.innerHTML = "";
  tradingPairs.forEach(pair => {
    const div = document.createElement("div");
    div.className = "ticker-item";

    const oldPrice = pair.price;
    const change = (Math.random() - 0.5) * 2; // simulate fluctuation
    pair.price = +(pair.price + change).toFixed(2);
    const up = pair.price > oldPrice;

    div.innerHTML = `
      <span>${pair.symbol}</span>
      <span class="price-change ${up ? "up" : "down"}">${pair.price}</span>
    `;
    tickerContainer.appendChild(div);
  });
}

renderTicker();
setInterval(renderTicker, 4000); // update every 4 seconds
