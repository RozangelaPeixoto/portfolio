// O objetivo desse código é verificar se o input do fomulário foi preenchido
// A função é chamada no focusout dos campos do formulário
// Se preenchido uma classe será adicionada para mudar o estilo do elemento
const inputs = document.querySelectorAll('.contato__efeito');

for (const input of inputs) {
    input.addEventListener('focusout', function() {
        for (const valor of inputs){
            if (valor.value != ""){
                valor.classList.add("has-content");
            }else{
                valor.classList.remove("has-content")
            }
        }
    })
}

