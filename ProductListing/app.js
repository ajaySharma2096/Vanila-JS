const productList = document.getElementById("product-list");

// Modal items
const modal = document.getElementById("product-modal");
const closeModal = document.getElementById("close-modal");
const descField = document.getElementById("description");
const ratingField = document.getElementById("rating");
const countField = document.getElementById("count");

// Fetch products
async function loadProducts() {
  const res = await fetch("https://fakestoreapi.com/products?limit=5");
  const data = await res.json();

  data.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-item");

    div.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p><strong>Price:</strong> $${product.price}</p>
            <p><strong>Category:</strong> ${product.category}</p>
        `;

    // On click open modal
    div.addEventListener("click", () => loadProductDetails(product.id));

    productList.appendChild(div);
  });
}

// Fetch details
async function loadProductDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  descField.textContent = product.description;
  ratingField.textContent = product.rating.rate;
  countField.textContent = product.rating.count;

  modal.classList.remove("hidden");
}

// Close modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Close modal if clicking outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

loadProducts();
