function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = new Date().toLocaleString();
    document.getElementById('currentyear').textContent = currentYear;
    document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;
}
updateFooter()