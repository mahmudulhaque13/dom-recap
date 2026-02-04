// ==========================
// DOM Element ধরছি
// ==========================
const input = document.getElementById("inputText"); // Input field
const list = document.getElementById("itemList"); // UL list container

// Buttons ধরছি
const addBtn = document.getElementById("addBtn"); // Add Item
const removeBtn = document.getElementById("removeBtn"); // Remove Last
const changeHTMLBtn = document.getElementById("changeHTMLBtn"); // innerHTML
const changeStyleBtn = document.getElementById("changeStyleBtn"); // Change Style

// ==========================
// Add new item
// ==========================

addBtn.onclick = () => {
  const text = input.value.trim();
  if (!text) return;

  // নতুন <li> তৈরি
  const li = document.createElement("li");
  li.textContent = text;
  li.className =
    "p-6 bg-purple-100 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer text-xl"; // CSS class"
  list.appendChild(li);
  input.value = "";
};

// ==========================
// Remove last item
// ==========================
removeBtn.onclick = () => {
  if (!list.lastElementChild) return;
  list.removeChild(list.lastElementChild);
};
