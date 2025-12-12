export default function Home() {
return (
<div>
{/* Header */}
<header className="section">
<div className="container">
<h1>Welcome to My Portfolio</h1>
<p>Hello! I'm Yusif McCall. Welcome to my landing page. Explore my work and download my resume below.</p>
</div>
</header>

{/* About Me */}
<section className="section">
<div className="container">
<h2>About Me</h2>
<p>I aim to be seen for my work and my potential. I'm learning,building, and pursuing oppurtunities that align with my growth and purpose. I bring creativity, determination and a drive to make an impact.</p>
</div>
</section>

{/* Resume Section */}
<section className="section">
<div className="container">
<h2>My Resume</h2>

{/* Link to PDF with GA4 tracking */}
<p>
<a
href="ym.pdf/ymresume.pdf"
target="_blank"
onClick={() => window.trackEvent('resume_view', 'click', 'PDF Resume')}
>
View Resume (PDF)
</a>
</p>

{/* Embed PDF */}
<iframe
src="ym.pdf/ymresume.pdf"
className="pdf-viewer"
title="My Resume"
/>
</div>
</section>

{/* Quote */}
<section className="section">
<div className="container">
<blockquote>"Code meets source, a my creation is born =)"</blockquote>
</div>
</section>

{/* Links Section */}
<section className="section">
<div className="container">
<h2>Links</h2>
<ul>
<li><a href="https://ym-portfolio-cm1o9xbyd-seffixits-projects.vercel.app" target="_blank">Landing Page</a></li>
<li><a href="https://github.com/Seffixit/Seffixit-Portfolio" target="_blank">GitHub Projects</a></li>
</ul>
</div>
</section>

{/* Footer */}
<footer className="footer">
<div className="container">
<p>&copy; 2025 Yusif. All rights reserved.</p>
</div>
</footer>
</div>
);
}
