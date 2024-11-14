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

