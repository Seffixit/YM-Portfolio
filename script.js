// Get modal elements
const modal = document.getElementById("readmeModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close");

// Open the modal when clicking "Read Me Info"
openBtn.onclick = () => {
modal.style.display = "block";
};

// Close the modal when clicking the "X"
closeBtn.onclick = () => {
modal.style.display = "none";
};

// Close the modal if clicking outside of the modal content
window.onclick = (event) => {
if (event.target == modal) {
modal.style.display = "none";
}
};