// Fetch users from a public API
function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      return response.json();
    }
  );
}

// Render user cards using a template
function renderUsers(users) {
  const container = document.getElementById("userList");
  const template = document.getElementById("userCardTemplate");
  container.innerHTML = "";

  users.forEach((user) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".user-name").textContent = user.name;
    clone.querySelector(".user-email").textContent = user.email;
    clone.querySelector(".user-city").textContent = user.address.city;
    container.appendChild(clone);
  });
}

// Load users and render
fetchUsers() // This line will be load when we first load the page
  .then((data) => {
    console.log("✅ Users loaded:", data);
    renderUsers(data);
  })
  .catch((error) => {
    console.error("❌ Error:", error.message);
  });

