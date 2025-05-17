document.addEventListener("DOMContentLoaded", function () {
    const updateNoItemsVisibility = () => {
        const items = document.querySelectorAll(".item");
        const noItemsBlock = document.querySelector(".no-items");
        if (noItemsBlock) {
            noItemsBlock.style.display = items.length === 0 ? "flex" : "none";
        }
    };

    updateNoItemsVisibility();

    document.addEventListener("click", function (event) {
        if (event.target.closest(".remove-btn")) {
            const item = event.target.closest(".item");
            if (item) {
                item.classList.add("removing");
                setTimeout(() => {
                    item.remove();
                    updateNoItemsVisibility();
                }, 300);
            }
        }
    });
});
