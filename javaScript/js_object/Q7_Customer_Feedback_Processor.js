const feedback = "Great product! Fast delivery and amazing sound quality.";

const words = feedback.trim().split(/\s+/);
const wordCount = words.length;
const lowerCaseFeedback = feedback.toLowerCase();

const containsNegativeWords =
    lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");

const feedbackStatus = containsNegativeWords
    ? "Needs Improvement"
    : "Positive Feedback";

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);
console.log(`Contains "bad" or "poor": ${containsNegativeWords}`);
console.log(`Review status: ${feedbackStatus}`);
