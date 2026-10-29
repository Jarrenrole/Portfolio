
/* MOBILE NAVIGATION */

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navbar a");

function closeMenu() {
    navbar.classList.remove("open");

    menuIcon.setAttribute("aria-expanded", "false");
    menuIcon.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuIcon.innerHTML = '<i class="bx bx-menu"></i>';
}

menuIcon.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");

    menuIcon.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    menuIcon.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation menu"
            : "Open navigation menu"
    );

    menuIcon.innerHTML = isOpen
        ? '<i class="bx bx-x"></i>'
        : '<i class="bx bx-menu"></i>';
});

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
        closeMenu();
    }
});

/* TYPING ANIMATION */

const typingElement = document.querySelector(".multiple-text");

const roles = [
    "IT Student",
    "Future Programmer"
];

let roleIndex = 0;
let characterIndex = 0;
let deleting = false;

const typingSpeed = 100;
const deletingSpeed = 55;
const pauseAfterTyping = 1500;

function typeRole() {
    if (
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {
        typingElement.textContent = roles[0];
        return;
    }

    const currentRole = roles[roleIndex];

    if (!deleting) {
        characterIndex++;

        typingElement.textContent =
            currentRole.substring(0, characterIndex);

        if (characterIndex === currentRole.length) {
            deleting = true;

            setTimeout(typeRole, pauseAfterTyping);
            return;
        }
    } else {
        characterIndex--;

        typingElement.textContent =
            currentRole.substring(0, characterIndex);

        if (characterIndex === 0) {
            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    setTimeout(
        typeRole,
        deleting ? deletingSpeed : typingSpeed
    );
}

typeRole();

/* FOOTER YEAR */

const yearElement = document.querySelector("#year");

yearElement.textContent = new Date().getFullYear();

/* ACTIVE HOME LINK */

const homeLink = document.querySelector('.navbar a[href="#home"]');

if (homeLink) {
    homeLink.classList.add("active");
}
