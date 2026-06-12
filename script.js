function initAccordion(blockClass, headerClass, contentClass) {
  const blocks = document.querySelectorAll(blockClass);

  blocks.forEach((block) => {
    const header = block.querySelector(headerClass);
    const content = block.querySelector(contentClass);

    if (!header || !content) return;

    header.addEventListener("click", () => {
      const isOpen = block.classList.contains("active");

      block.classList.toggle("active");

      if (isOpen) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      updateParentHeights(block);
    });
  });
}

function updateParentHeights(block) {
  const parentBlock = block.closest(".block1.active");

  if (!parentBlock) return;

  const parentContent = parentBlock.querySelector(".block1-content");

  parentContent.style.maxHeight =
    parentContent.scrollHeight + 300 + "px";
}

initAccordion(".block1", ".block1-header", ".block1-content");
initAccordion(".block2", ".block2-header", ".block2-content");
