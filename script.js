document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if(name && email && message){
        formMessage.style.color = "green";
        formMessage.textContent = `Merci ${name}, votre message a été envoyé !`;
        document.getElementById('contactForm').reset();
    } else {
        formMessage.style.color = "red";
        formMessage.textContent = "Veuillez remplir tous les champs.";
    }
});
