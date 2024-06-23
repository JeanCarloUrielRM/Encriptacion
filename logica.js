let desplazamiento_decifrado = 5;

function cifrarCesar(mensaje, desplazamiento) {
    desplazamiento = desplazamiento % 26;
    let cifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];
        if (char.match(/[a-z]/i)) {
            let codigo = mensaje.charCodeAt(i);
            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 + desplazamiento) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 + desplazamiento) % 26) + 97);
            }
        }
        cifrado += char;
    }
    return cifrado;
}

// Función para descifrar un mensaje con el cifrado César
function descifrarCesar(mensaje, desplazamiento) {
    desplazamiento = desplazamiento % 26;
    let descifrado = '';

    for (let i = 0; i < mensaje.length; i++) {
        let char = mensaje[i];
        if (char.match(/[a-z]/i)) {
            let codigo = mensaje.charCodeAt(i);
            if (codigo >= 65 && codigo <= 90) {
                char = String.fromCharCode(((codigo - 65 - desplazamiento + 26) % 26) + 65);
            } else if (codigo >= 97 && codigo <= 122) {
                char = String.fromCharCode(((codigo - 97 - desplazamiento + 26) % 26) + 97);
            }
        }
        descifrado += char;
    }
    return descifrado;
}

// Función para manejar el cifrado desde la interfaz
function cifrar(desplazamiento_decifrado) {
    let mensaje = document.getElementById('mensaje').value;
    //let desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    let desplazamiento = desplazamiento_decifrado
    let resultado = cifrarCesar(mensaje, desplazamiento);
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('res').textContent = 'Cifrado';
}

// Función para manejar el descifrado desde la interfaz
function descifrar(desplazamiento_decifrado) {
    let mensaje = document.getElementById('mensaje').value;
    //let desplazamiento = parseInt(document.getElementById('desplazamiento').value);
    let desplazamiento = desplazamiento_decifrado
    let resultado = descifrarCesar(mensaje, desplazamiento);
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('res').textContent = 'Descifrado';
}


function copiarTexto() {
    let resultado = document.getElementById('resultado');
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert("Texto copiado: " + resultado.value);
}