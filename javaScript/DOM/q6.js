const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#studentTableBody tr");
const noResultsMessage = document.getElementById("noResults");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase(); 
  let visibleRowCount = 0;

  tableRows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();
    const isMatch = rowText.includes(query);

    row.style.display = isMatch ? "" : "none";
    if (isMatch) visibleRowCount++;
  });

  noResultsMessage.style.display = visibleRowCount === 0 ? "block" : "none";
});