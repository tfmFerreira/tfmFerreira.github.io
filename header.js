document.write(`
    <header style="text-align: center;">
        <h1>Biomembrane Magnetic Resonance Lab
</h1>
        <nav>
            <ul style="text-align: center;">
                <li><a href="index.html">Home</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="members.html">Members</a></li>
                <li><a href="publications.html">Publications</a></li>
                <li><a href="scripts.html">Scripts</a></li>
                <li><a href="news.html">News</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>

    </header>
`);

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page filename (e.g., "index.html")
    let currentPage = window.location.pathname.split("/").pop();

    // Select all navigation links in the header
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        let linkHref = link.getAttribute("href");

        // If the link matches the current page, apply styles
        if (currentPage === linkHref) {
            link.style.fontWeight = "bold";
            link.style.color = "#66CCFF"; // Yellow for high contrast with dark grey
        }
    });
});
