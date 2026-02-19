
    const urlParams = new URLSearchParams(window.location.search);
    const displayElement = document.getElementById('display-data');

    if (urlParams.has('fname')) {
        displayElement.innerHTML = `
            <p><strong>Cliente:</strong> ${urlParams.get('fname')}</p>
            <p><strong>Fecha:</strong> ${urlParams.get('date')}</p>
            <p><strong>Invitados:</strong> ${urlParams.get('guests')}</p>
            <p>Hemos enviado un detalle a: <em>${urlParams.get('email')}</em></p>
        `;
    }