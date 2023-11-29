
document.getElementById('visitaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const motivo = document.getElementById('motivo').value;


    const visita = {
        nombre,
        direccion,
        email,
        motivo
    };


    let visitas = JSON.parse(localStorage.getItem('visitas')) || [];


    visitas.push(visita);

    localStorage.setItem('visitas', JSON.stringify(visitas));


    mostrarVisitas();
});

function mostrarVisitas() {
    const visitas = JSON.parse(localStorage.getItem('visitas')) || [];

    const visitasTable = document.getElementById('visitasTable');
    const tableBody = visitasTable.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    visitas.forEach(visita => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${visita.nombre}</td>
            <td>${visita.direccion}</td>
            <td>${visita.email}</td>
            <td>${visita.motivo}</td>
        `;
    });
}


mostrarVisitas();

document.getElementById('visitaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const motivo = document.getElementById('motivo').value;

    const visita = {
        nombre,
        direccion,
        email,
        motivo
    };

    let visitas = JSON.parse(localStorage.getItem('visitas')) || [];


    localStorage.setItem('visitas', JSON.stringify(visitas));


    mostrarVisitas();
});

function mostrarVisitas() {
    const visitas = JSON.parse(localStorage.getItem('visitas')) || [];

    const visitasTable = document.getElementById('visitasTable');
    const tableBody = visitasTable.getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    visitas.forEach((visita, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${visita.nombre}</td>
            <td>${visita.direccion}</td>
            <td>${visita.email}</td>
            <td>${visita.motivo}</td>
            <td>
                <button onclick="editarVisita(${index})" class="btn btn-sm btn-primary">Editar</button>
                <button onclick="borrarVisita(${index})" class="btn btn-sm btn-danger">Borrar</button>
            </td>
        `;
    });
}

function editarVisita(index) {
    let visitas = JSON.parse(localStorage.getItem('visitas')) || [];
    const visita = visitas[index];

    document.getElementById('nombre').value = visita.nombre;
    document.getElementById('direccion').value = visita.direccion;
    document.getElementById('email').value = visita.email;
    document.getElementById('motivo').value = visita.motivo;


    visitas.splice(index, 1);
    localStorage.setItem('visitas', JSON.stringify(visitas));
}

function borrarVisita(index) {
    let visitas = JSON.parse(localStorage.getItem('visitas')) || [];
    visitas.splice(index, 1);
    localStorage.setItem('visitas', JSON.stringify(visitas));
    mostrarVisitas();
}


mostrarVisitas();
document.getElementById('visitaForm').addEventListener('submit', function(event) {
    event.preventDefault();

 
    const nombre = document.getElementById('nombre').value;
    const direccion = document.getElementById('direccion').value;
    const email = document.getElementById('email').value;
    const motivo = document.getElementById('motivo').value;

   
    if (nombre.trim() === '' || direccion.trim() === '' || email.trim() === '' || motivo.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return; 
    }


    const visita = {
        nombre,
        direccion,
        email,
        motivo
    };

  
    let visitas = JSON.parse(localStorage.getItem('visitas')) || [];


    visitas.push(visita);


    localStorage.setItem('visitas', JSON.stringify(visitas));


    mostrarVisitas();


    alert('¡Visita agregada exitosamente!');
});
