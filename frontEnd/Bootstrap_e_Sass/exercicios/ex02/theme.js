const html = document.documentElement
const button = document.getElementById("themeToggle")

button.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme")

    if (currentTheme === "dark") {
        html.setAttribute("data-bs-theme", "light")
        button.textContent = "☀️ Modo Light"
    } else {
        html.setAttribute("data-bs-theme", "dark")
        button.textContent = "🌙 Modo Dark"
    }
})
