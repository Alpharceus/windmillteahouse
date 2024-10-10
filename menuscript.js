const categories = document.querySelectorAll('.category');
const menuCategories = document.querySelectorAll('.menu-category');

categories.forEach((categoryButton) => {
    categoryButton.addEventListener('click', () => {
        // Remove active class from all categories
        categories.forEach((btn) => btn.classList.remove('active'));
        categoryButton.classList.add('active');

        // Show selected category items
        const category = categoryButton.getAttribute('data-category');
        menuCategories.forEach((menuCategory) => {
            menuCategory.classList.remove('active');
            if (menuCategory.classList.contains(category)) {
                menuCategory.classList.add('active');
            }
        });
    });
});
