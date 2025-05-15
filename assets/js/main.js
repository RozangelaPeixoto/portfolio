// O objetivo desse código é verificar se o input do fomulário foi preenchido
// A função é chamada no focusout dos campos do formulário
// Se preenchido uma classe será adicionada para mudar o estilo do elemento
const inputs = document.querySelectorAll('.contato__efeito');

for (const input of inputs) {
    input.addEventListener('focusout', function () {
        for (const valor of inputs) {
            if (valor.value != "") {
                valor.classList.add("has-content");
            } else {
                valor.classList.remove("has-content")
            }
        }
    })
}

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModal = document.querySelector('.close');

document.querySelectorAll('.btn-certificado').forEach(button => {
    button.addEventListener('click', () => {
        const imgSrc = button.getAttribute('data-img');
        modalImg.src = imgSrc;
        modal.classList.remove('hidden');
    });
});

document.querySelectorAll('.figure-certificado').forEach(figure => {
    figure.addEventListener('click', () => {
        const imgSrc = figure.getAttribute('data-img');
        modalImg.src = imgSrc;
        modal.classList.remove('hidden');
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalImg.src = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        modalImg.src = '';
    }
});