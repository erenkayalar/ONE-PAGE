document.addEventListener("DOMContentLoaded", () => {
    console.log("Nature's Harmony loaded successfully!");

    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("click", () => {
            alert(`You explored: ${item.querySelector("h2").textContent}`);
        });
    });
});
