// script.js
document.getElementById('yes').addEventListener('click', function() {
    document.querySelector('.hidden-message').style.display = 'block';
});

document.getElementById('no').addEventListener('click', function() {
    const noOption = document.getElementById('no');
    noOption.style.display = 'none';

    setTimeout(function() {
        const objWidth = noOption.clientWidth;
        const objHeight = noOption.clientHeight;

        const maxX = window.innerWidth - objWidth;
        const maxY = window.innerHeight - objHeight;

        let randomX = Math.floor(Math.random() * maxX);
        let randomY = Math.floor(Math.random() * maxY);

        // Ensure the object stays within the window boundaries
        randomX = Math.max(0, randomX);
        randomX = Math.min(maxX, randomX);
        randomY = Math.max(0, randomY);
        randomY = Math.min(maxY, randomY);

        noOption.style.position = 'absolute';
        noOption.style.left = randomX + 'px';
        noOption.style.top = randomY + 'px';
        noOption.style.display = 'block';

        // Hide other elements if final response message is displayed
        if (document.getElementById("RESPUESTA_FINAL").style.display === "block") {
            document.querySelector('.container').style.display = 'none';
            document.querySelector('.message').style.display = 'none';
            document.querySelector('.options').style.display = 'none';
        }
    }, 200); // Cambia el tiempo en milisegundos antes de que aparezca de nuevo
});