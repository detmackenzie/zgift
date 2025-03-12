document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.getElementById('likeButton');

    likeButton.addEventListener('click', () => {
        if (likeButton.classList.contains('liked')) {
            likeButton.classList.remove('liked');
            likeButton.textContent = 'favorite_border';
        } else {
            likeButton.classList.add('liked');
            likeButton.textContent = 'favorite';
        }
    });
});
