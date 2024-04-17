function showRandomNotification() {
    const messages = [
        "A new classifieds ad has posted!"
    ];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const message = messages[getRandomInt(messages.length)];

    const notificationElement = document.getElementById('notification');
    notificationElement.innerText = message;
    notificationElement.style.display = 'block';

    setTimeout(() => {
        notificationElement.style.display = 'none';
    }, 10000);
}

setTimeout(showRandomNotification, 3000);
