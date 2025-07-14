// Objeto para almacenar el estado de los cursos
const estadoCursos = {
    completados: [],
    desbloqueados: []
};

// Al cargar la página, restaurar el estado guardado
document.addEventListener('DOMContentLoaded', function() {
    const estadoGuardado = localStorage.getItem('estadoCursos');
    if (estadoGuardado) {
        Object.assign(estadoCursos, JSON.parse(estadoGuardado));
        aplicarEstadoCursos();
    }
});

// Aplicar el estado guardado a los cursos
function aplicarEstadoCursos() {
    // Aplicar estado de cursos completados
    estadoCursos.completados.forEach(cursoId => {
        const curso = document.getElementById(cursoId);
        if (curso) {
            curso.classList.add('completado');
            const btn = curso.querySelector('.completar-btn');
            if (btn) {
                btn.textContent = '✅ Completado';
                btn.disabled = true;
            }
        }
    });

    // Aplicar estado de cursos desbloqueados
    estadoCursos.desbloqueados.forEach(cursoId => {
        const curso = document.getElementById(cursoId);
        if (curso) {
            curso.classList.remove('curso-bloqueado');
            const btn = curso.querySelector('.completar-btn');
            if (btn) {
                btn.disabled = false;
                btn.textContent = '✅ Completar';
            }
        }
    });
}

// Guardar el estado actual en localStorage
function guardarEstado() {
    localStorage.setItem('estadoCursos', JSON.stringify(estadoCursos));
}

// Cambiar entre años
function mostrarAnio(anioId) {
    document.querySelectorAll('.anio-content').forEach(anio => {
        anio.style.display = 'none';
    });
    document.querySelectorAll('.anio-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(anioId).style.display = 'block';
    document.querySelector(`button[onclick="mostrarAnio('${anioId}')"]`).classList.add('active');
    
    // Restaurar el estado al cambiar de año
    aplicarEstadoCursos();
}

// Cambiar entre ciclos
function mostrarCiclo(cicloId) {
    const anioContent = document.querySelector('.anio-content[style="display: block;"]') || document.querySelector('.anio-content:not([style])');
    anioContent.querySelectorAll('.ciclo').forEach(ciclo => {
        ciclo.classList.remove('active');
    });
    anioContent.querySelectorAll('.ciclo-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(cicloId).classList.add('active');
    document.querySelector(`button[onclick="mostrarCiclo('${cicloId}')"]`).classList.add('active');
    
    // Restaurar el estado al cambiar de ciclo
    aplicarEstadoCursos();
}

// Completar curso y desbloquear el siguiente
function completarCurso(cursoId, siguientesCursosIds) {
    const curso = document.getElementById(cursoId);
    curso.classList.add('completado');
    estadoCursos.completados.push(cursoId);
    
    const btn = curso.querySelector('.completar-btn');
    btn.textContent = '✅ Completado';
    btn.disabled = true;

    if (siguientesCursosIds) {
        const ids = siguientesCursosIds.split(',');
        ids.forEach(id => {
            id = id.trim();
            const siguienteCurso = document.getElementById(id);
            if (siguienteCurso) {
                siguienteCurso.classList.remove('curso-bloqueado');
                estadoCursos.desbloqueados.push(id);
                
                const siguienteBtn = siguienteCurso.querySelector('.completar-btn');
                siguienteBtn.disabled = false;
                siguienteBtn.textContent = '✅ Completar';
            }
        });
    }
    
    guardarEstado();
}

// Botón para resetear todo el progreso
function resetearProgreso() {
    if (confirm('¿Estás seguro de que quieres resetear todo tu progreso?')) {
        localStorage.removeItem('estadoCursos');
        estadoCursos.completados = [];
        estadoCursos.desbloqueados = [];
        location.reload();
    }
}