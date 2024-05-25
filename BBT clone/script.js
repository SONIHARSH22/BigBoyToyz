document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.querySelector(".pre-btn");
    const nextBtn = document.querySelector(".nxt-btn");
    const productContainer = document.querySelector(".product-container");
  
    let scrollAmount = 0;
    const scrollStep = 500; // Adjust the scrolling step for smoother motion
  
    prevBtn.addEventListener("click", () => {
      scrollAmount -= scrollStep;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      productContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  
    nextBtn.addEventListener("click", () => {
      scrollAmount += scrollStep;
      if (scrollAmount > productContainer.scrollWidth - productContainer.clientWidth) {
        scrollAmount = productContainer.scrollWidth - productContainer.clientWidth;
      }
      productContainer.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: "smooth",
      });
    });
  });
  