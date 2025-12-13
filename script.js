console.log("Portfolio loaded!");

// Confirm JS is loaded
console.log("Portfolio loaded!");

// GA4 Event Tracking Helper
function trackEvent(action, category, label) {
if (typeof gtag !== "undefined") {
gtag("event", action, {
event_category: category,
event_label: label,
});
}
}

// Track Resume link clicks
const resumeLink = document.querySelector('a[href="ym.pdf/ymresume.pdf"]');
if (resumeLink) {
resumeLink.addEventListener("click", () => {
trackEvent("resume_view", "engagement", "Resume PDF");
});
}

// Track scroll to 50% of page
let scrollSent = false;
window.addEventListener("scroll", () => {
const scrollPercent =
(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
if (scrollPercent > 50 && !scrollSent) {
trackEvent("scroll_50", "scroll", "50_percent");
scrollSent = true;
}
});
