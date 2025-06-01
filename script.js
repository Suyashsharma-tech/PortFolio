// Optional: Search input focus effect
document.addEventListener("DOMContentLoaded", () => {
  const searchBox = document.querySelector(".sc-bmzYkS");

  searchBox.addEventListener("click", () => {
    const searchText = document.querySelector(".sc-aXZVg");
    searchText.innerText = "Typing...";
    setTimeout(() => {
      searchText.innerText = "Search for restaurant, item or more";
    }, 2000);
  });
});
