

window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('show');
    });;
});

function showorhidemenu() {
    const mainNav = document.getElementById("mainnav");
    const menu = document.getElementById("mobilenav");
    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        mainNav.classList.add("menuToggled");
    } else {
        mainNav.classList.remove("menuToggled");
    }
}
