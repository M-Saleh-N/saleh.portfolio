function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function openModal(title, description, link) {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalLink = document.getElementById("modal-link");
    
    modalTitle.innerText = title;
    modalDescription.innerText = description;
    modalLink.href = link;
    
    modal.style.display = "block";
}

const closeModal = document.getElementById("close-modal");
closeModal.addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
        alert("Form submitted successfully!");
    } else {
        alert("Please fill all fields.");
    }
});

// Store form data in localStorage
function saveFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("subject", subject);
    localStorage.setItem("message", message);
}

// Restore form data from localStorage
window.onload = function () {
    if (localStorage.getItem("name")) {
        document.getElementById("name").value = localStorage.getItem("name");
    }
    if (localStorage.getItem("email")) {
        document.getElementById("email").value = localStorage.getItem("email");
    }
    if (localStorage.getItem("subject")) {
        document.getElementById("subject").value = localStorage.getItem("subject");
    }
    if (localStorage.getItem("message")) {
        document.getElementById("message").value = localStorage.getItem("message");
    }
};

// Add event listener to save data when form is being filled
document.getElementById("contact-form").addEventListener("input", saveFormData);
