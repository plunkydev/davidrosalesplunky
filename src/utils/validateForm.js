export function validateContactForm(form) {
    let isValid = true;
    const errorMessages = form.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    const fields = form.querySelectorAll('input[required], textarea[required]');
    fields.forEach(field => {
        if (field.value.trim() === '') {
            showError(field, 'Este campo es obligatorio');
            isValid = false;
        } else if (field.type === 'email' && !validateEmail(field.value)) {
            showError(field, 'Por favor, ingresa un correo válido');
            isValid = false;
        }
    });
    return isValid;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(field, message) {
    const error = document.createElement('div');
    error.className = 'error-message';
    error.style.color = 'red';
    error.textContent = message;
    field.parentNode.appendChild(error);
}

// Nueva función: se encarga del envío AJAX del formulario
export function sendContactForm(form) {
    const formData = new FormData(form);
    return fetch(form.action, {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: formData
    });
}