document.addEventListener('DOMContentLoaded', () => {
    const likeButtonDesenho = document.getElementById('likeButtonDesenho');
    const popup = document.getElementById('popup');
    const closePopup = document.querySelector('.close-popup');
    const desenhoImage = document.querySelector('.desenho-image');
    const galleryImages = document.querySelectorAll('.gallery img');

    likeButtonDesenho.addEventListener('click', () => {
        if (likeButtonDesenho.textContent === 'favorite_border') {
            likeButtonDesenho.textContent = 'favorite';
        } else {
            likeButtonDesenho.textContent = 'favorite_border';
        }
        likeButtonDesenho.classList.toggle('active'); // Adiciona a classe active para animar
    });

    desenhoImage.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Adiciona evento de clique para abrir a imagem em tela cheia
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            openFullscreen(image.src);
        });
    });

    function openFullscreen(src) {
        const fullscreenPopup = document.createElement('div');
        fullscreenPopup.classList.add('fullscreen-popup');
        fullscreenPopup.innerHTML = `
            <span class="close-fullscreen">&times;</span>
            <img src="${src}" alt="Imagem em tela cheia">
        `;
        document.body.appendChild(fullscreenPopup);

        const closeFullscreen = fullscreenPopup.querySelector('.close-fullscreen');
        closeFullscreen.addEventListener('click', () => {
            document.body.removeChild(fullscreenPopup);
        });

        fullscreenPopup.addEventListener('click', (event) => {
            if (event.target === fullscreenPopup) {
                document.body.removeChild(fullscreenPopup);
            }
        });

        fullscreenPopup.style.display = 'block';
    }
});
