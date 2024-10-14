
document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const subject = "Nuevo mensaje de " + name;
            const body = `Nombre: ${name}%0AEmail: ${email}%0AMensaje: ${message}`;

            window.location.href = `mailto:mcalvogd@outlook.es?subject=${subject}&body=${body}`;
        });


       

});