function showConfirmationFunction() {
console.log("Showing Modal...");
}

document.addEventListener("htmx:beforeRequest", showConfirmationFunction);
