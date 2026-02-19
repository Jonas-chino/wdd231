
    const urlParams = new URLSearchParams(window.location.search);
    const displayElement = document.getElementById('display-data');

    if (urlParams.has('fname')) {
        displayElement.innerHTML = `
            <p><strong>Client:</strong> ${urlParams.get('fname')}</p>
            <p><strong>Date:</strong> ${urlParams.get('date')}</p>
            <p><strong>People:</strong> ${urlParams.get('guests')}</p>
            <p>We send an email to : <em>${urlParams.get('email')}</em></p>
        `;
    }