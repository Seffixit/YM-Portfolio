// /pages/_app.js
import '../styles/global.css'; // <-- main global styles
import '../styles/vault.css'; // <-- vault section styles
import Script from 'next/script';








o
o
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

// Scroll tracking: fires once at 50% scroll

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
{/* Google Analytics */}
<Script
src="https://www.googletagmanager.com/gtag/js?id=G-7NJZDD7JMH"
strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-7NJZDD7JMH');
`}
</Script>

{/* Make trackEvent globally available */}
<Script id="global-track-event" strategy="afterInteractive">
{`window.trackEvent = ${trackEvent.toString()};`}
</Script>

<Component {...pageProps} trackEvent={trackEvent} />
</>
);
}

export default MyApp;
