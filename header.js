document.write(`
    <header style="background-color: #222; padding: 20px 0; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); text-align: center;">
        <h1 class="site-title">
            Biomembrane Magnetic Resonance Lab
        </h1>
        <nav style="display: flex; justify-content: center; margin-top: 10px;">
            <ul style="list-style: none; padding: 0; display: flex; gap: 15px;">
                <li><a href="index.html" class="nav-link">Home</a></li>
                <li><a href="research.html" class="nav-link">Research</a></li>
                <li><a href="members.html" class="nav-link">Members</a></li>
                <li><a href="publications.html" class="nav-link">Publications</a></li>
                <li><a href="news.html" class="nav-link">News</a></li>
                <li><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>
    <style>
        /* Main Site Title Styling */
        .site-title {
            font-size: 32px; /* Large text */
            font-weight: bold;
            color: #fff; /* White color for contrast */
            letter-spacing: 1.5px; /* Spacing for style */
            margin-bottom: 10px;
            display: block; /* Ensures it is centered properly */
            text-align: center;
            font-family: Arial, sans-serif;
        }

        /* Modern Navigation Bar Styling */
        .nav-link {
            text-decoration: none;
            color: #ddd;
            font-size: 18px;
            font-family: Arial, sans-serif;
            padding: 10px 15px;
            transition: color 0.3s, background-color 0.3s;
            border-radius: 5px;
        }

        /* Hover Effect */
        .nav-link:hover {
            color: #fff;
            background-color: #444;
        }

        /* Active Page Styling with Blue Highlight */
        .nav-link.active {
            font-weight: bold;
            color: #66CCFF; /* Blue color for selected pages */
            background-color: #333;
            border-radius: 5px;
        }

        /* Responsive Navigation for Small Screens */
        @media (max-width: 768px) {
            nav ul {
                flex-direction: column;
                text-align: center;
            }

            .nav-link {
                display: block;
                padding: 12px;
            }
        }
    </style>
`);

document.addEventListener("DOMContentLoaded", function () {
    // Get the current page filename (e.g., "index.html")
    let currentPage = window.location.pathname.split("/").pop();

    // Select all navigation links in the header
    let navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        let linkHref = link.getAttribute("href");

        // If the link matches the current page, apply the active class
        if (currentPage === linkHref) {
            link.classList.add("active");
        }
    });
});

