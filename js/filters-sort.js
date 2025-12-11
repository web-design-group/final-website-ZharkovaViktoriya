document.addEventListener("DOMContentLoaded", () => {

    const categoryItems = document.querySelectorAll(".filter:first-child .filter-content p");
    const cards = document.querySelectorAll(".card");

    categoryItems.forEach(item => {
        item.addEventListener("click", () => {

            const value = item.textContent.trim().toLowerCase();

            if (item.dataset.reset === "true") {
                cards.forEach(card => card.style.display = "block");
                return;
            }

            cards.forEach(card => {

                const raw = (card.dataset.category || "").toLowerCase();

                const categories = raw.split(/\s+/).filter(Boolean);

                if (categories.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

});
