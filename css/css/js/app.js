
// Doctors Point JavaScript

console.log("Doctors Point চালু হয়েছে");

// Welcome Message
window.onload = function () {
    console.log("Doctors Point Website Loaded");
};

// Search Function
function searchDoctor() {
    let input = document.getElementById("searchInput");

    if (!input) return;

    let filter = input.value.toLowerCase();
    let cards = document.getElementsByClassName("doctor-card");

    for (let i = 0; i < cards.length; i++) {
        let text = cards[i].innerText.toLowerCase();

        if (text.indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// Floating WhatsApp Button
function openWhatsApp() {
    window.open("https://wa.me/8801314540699", "_blank");
}
