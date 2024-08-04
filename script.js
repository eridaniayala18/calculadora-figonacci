function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b;
}

document.getElementById('calcular').addEventListener('click', function() {
    const n = parseInt(document.getElementById('numero').value);
    if (isNaN(n) || n < 1) {
        alert('Por favor, introduzca un número válido mayor o igual a 1.');
        return;
    }
    
    const listaResultado = document.getElementById('listaResultado');
    listaResultado.innerHTML = '';
    for (let i = 0; i < n; i++) {
        const li = document.createElement('div');
        li.textContent = `Fibonacci(${i}) = ${fibonacci(i)}`;
        listaResultado.appendChild(li);
    }
});

document.getElementById('limpiar').addEventListener('click', function() {
    document.getElementById('numero').value = '';
    document.getElementById('listaResultado').innerHTML = '';
});

document.getElementById('salir').addEventListener('click', function() {
    if (confirm('¿Está seguro de que desea salir?')) {
        window.close();
    }
});