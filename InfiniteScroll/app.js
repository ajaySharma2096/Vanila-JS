const container = document.getElementById("container");
const sentinel = document.getElementById("sentinel");
const loader = document.getElementById("loader");

let count = 0;
let loading = false;

// Function to simulate async data loading
function loadItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newItems = [];
      for (let i = 0; i < 20; i++) {
        count++;
        newItems.push(count);
      }
      resolve(newItems);
    }, 1000); // simulate 1 second delay
  });
}

// Function to render items
function renderItems(items) {
  items.forEach((num) => {
    const div = document.createElement("div");
    div.className = "item";
    div.textContent = num;
    container.appendChild(div);
  });
}

// Main load handler
async function addItems() {
  if (loading) return;
  loading = true;
  loader.hidden = false;

  const items = await loadItems();
  renderItems(items);

  loader.hidden = true;
  loading = false;
}

// Load initial items
addItems();

// Observe sentinel
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !loading) {
        addItems();
      }
    });
  },
  { rootMargin: "100px" }
);

observer.observe(sentinel);
