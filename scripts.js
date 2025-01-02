document.addEventListener("DOMContentLoaded", function() {
    const targetDate = new Date('2024-06-25T00:00:00'); // Fecha de cumpleaños: 25 de junio del 2024
    const countdownElement = document.getElementById('countdown');
    const birthdayMessage = document.getElementById('birthday-message');
    const balloonsTop = document.getElementById('balloons-top');
    const balloonsBottom = document.getElementById('balloons-bottom');

    function updateCountdown() {
        const now = new Date();
        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (timeDifference < 0) {
            clearInterval(interval);
            countdownElement.classList.add('hidden');
            birthdayMessage.classList.remove('hidden');
            balloonsTop.classList.remove('hidden'); // Mostrar globos superiores
            balloonsBottom.classList.remove('hidden'); // Mostrar globos inferiores
        }
    }

    const interval = setInterval(updateCountdown, 1000);

    
        // Configuración del carrusel de fotos
        const carouselInner = document.querySelector('.carousel-inner');
        let index = 0;
    
        function showNextImage() {
            index++;
            if (index >= carouselInner.children.length) {
                index = 0;
            }
            const offset = -index * 100;
            carouselInner.style.transform = `translateX(${offset}%)`;
        }
    
        setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos
    

    });
    