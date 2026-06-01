const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const content = accordion.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    const isOpen = accordion.classList.contains("active");

    accordion.classList.toggle("active");

    if (isOpen) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
