const productName = "  wireless headphones PRO  ";
const trimmedName = productName.trim().toLowerCase();
const titleCaseName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
const cleanedTitle = titleCaseName.replace(/\bpro\b/i, "Pro Edition");
console.log(`Cleaned product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);