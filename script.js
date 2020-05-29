const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

cards.forEach((card) => {
  card.addEventListener("dragstart", handleDragStart);
  card.addEventListener("drag", handleDrag);
  card.addEventListener("dragend", handleDragEnd);
});

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", handleDragEnter);
  dropzone.addEventListener("dragover", handleDragOver);
  dropzone.addEventListener("dragleave", handleDragLeave);
  dropzone.addEventListener("drop", handleDrop);
});

function handleDragStart() {
  dropzones.forEach((dropzone) => dropzone.classList.add("highlight"));
  this.classList.add("dragging");
}

function handleDrag() {}

function handleDragEnd() {
  dropzones.forEach((dropzone) => dropzone.classList.remove("highlight"));
  this.classList.remove("dragging");
}

function handleDragEnter() {}

function handleDragOver() {
  const draggingCard = document.querySelector(".dragging");

  this.appendChild(draggingCard);
  this.classList.add("over");
}

function handleDragLeave() {
  this.classList.remove("over");
}

function handleDrop() {
  this.classList.remove("over");
}
