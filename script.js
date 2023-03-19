function updateYear() {
    let currentYear = new Date().getFullYear();
    document.getElementById("year").innerHTML = currentYear;
}
window.addEventListener("load", updateYear);
