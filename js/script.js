document.addEventListener('DOMContentLoaded', () => {
    const likeButtons = document.querySelectorAll('.like-button');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.classList.contains('liked')) {
                button.classList.remove('liked');
                button.textContent = 'favorite_border';
            } else {
                button.classList.add('liked');
                button.textContent = 'favorite';
            }
        });
    });
});

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.querySelector(".menu-button").classList.add("hidden");
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector(".menu-button").classList.remove("hidden");
}
