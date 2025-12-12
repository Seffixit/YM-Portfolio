import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
// Function to send GA4 events
const trackEvent = (action, category, label) => {
if (typeof window.gtag !== 'undefined') {
window.gtag('event', action, {
event_category: category,
event_label: label,
});
}
};

// Example: Scroll tracking
if (typeof window !== 'undefined') {
let scrollSent = false;
window.addEventListener('scroll', () => {
const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
if (scrollPercent > 50 && !scrollSent) {
trackEvent('scroll_50', 'scroll', '50_percent');
scrollSent = true;
}
});
}

return (
<>
{/* GA4 Scripts */}
<Script
src={`https://www.googletagmanager.com/gtag/js?id=G-7NJZDD7JMH`}
strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6MSD15JK1K');
`}
</Script>

{/* Make trackEvent available globally */}
