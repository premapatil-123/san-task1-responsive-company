// Contact form validation

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("formMessage");

        if (name === "" || email === "" || message === "") {

            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";

            return;
        }

        if (!email.includes("@") || !email.includes(".")) {

            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";

            return;
        }

        formMessage.textContent =
            "Thank you! Your message has been submitted successfully.";

        formMessage.style.color = "green";

        contactForm.reset();
    });
}