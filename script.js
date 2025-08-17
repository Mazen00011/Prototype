

window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('show');
    });;
});

function showorhidemenu() {
    const menu = document.getElementById("mobilenav");
    menu.classList.toggle("show");
}