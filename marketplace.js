document.addEventListener("DOMContentLoaded", function () {
    function filterProducts(category) {
        let products = document.querySelectorAll(".product-card");

        products.forEach((product) => {
            if (category === "all" || product.dataset.category === category) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    window.filterProducts = filterProducts;
});
