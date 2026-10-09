
const searchBox = document.querySelector(".search-box");
const categoryDropdown = document.querySelector(".category-dropdown");
const articleCards = document.querySelectorAll(".article-card");

function filterArticles() {
    const searchText = searchBox.value.toLowerCase();
    const selectedCategory = categoryDropdown.value.toLowerCase();

    articleCards.forEach(function(card) {
        const articleText = card.textContent.toLowerCase();
        const articleCategory = card.querySelector(".category").textContent.toLowerCase();

        const matchesSearch = articleText.includes(searchText);
        const matchesCategory =
            selectedCategory === "all categories" ||
            articleCategory.includes(selectedCategory);

        if (matchesSearch && matchesCategory) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

searchBox.addEventListener("input", filterArticles);
categoryDropdown.addEventListener("change", filterArticles);