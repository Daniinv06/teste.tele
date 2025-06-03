//modais
  
  document.getElementById('areaIntestinos').addEventListener('click', function(e) {
    e.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('modalIntestinos'));
    modal.show();
  });
  document.getElementById('areaSangue').addEventListener('click', function(e) {
    e.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('modalSangue'));
    modal.show();
  });
  document.getElementById('areaDiario').addEventListener('click', function(e) {
    e.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('modalDiario'));
    modal.show();
  });
  document.getElementById('areaExames').addEventListener('click', function(e) {
    e.preventDefault();
    var modal = new bootstrap.Modal(document.getElementById('modalExames'));
    modal.show();
});


//gamificação_arrastar
const respostasCorretas = {
    "DIARREIA_CRONICA": "DIARREIA CRÔNICA",
    "SANGUE_NAS_FEZES": "SANGUE NAS FEZES",
    "EXAMES_DE_SANGUE": "EXAMES DE SANGUE",
    "PERDA_PESO": "PERDA DE PESO INEXPLICADA",
    "COLONOSCOPIA": "COLONOSCOPIA",
    "FADIGA_INTENSA": "FADIGA INTENSA"
};

// Permitir arrastar
document.querySelectorAll(".draggable").forEach(item => {
    item.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text/plain", item.id);
    });
});

// Permitir soltar tanto na lista quanto na dropzone
const listaTermos = document.querySelector('.lista-termos');
const dropzone = document.getElementById('diagnostico');

[listaTermos, dropzone].forEach(zone => {
    zone.addEventListener("dragover", e => e.preventDefault());
    zone.addEventListener("drop", e => {
        e.preventDefault();
        const id = e.dataTransfer.getData("text/plain");
        const dragged = document.getElementById(id);
        if (dragged && !zone.contains(dragged)) {
            zone.appendChild(dragged);
            // Remove feedback visual ao mover
            dragged.classList.remove("correct", "wrong");
        }
    });
});

// Validação
function validarResposta() {
    const idsCorretos = Object.keys(respostasCorretas);
    const termos = dropzone.querySelectorAll(".draggable");
    let acertos = 0;

    termos.forEach(termo => {
        termo.classList.remove("correct", "wrong");
        if (idsCorretos.includes(termo.id)) {
            termo.classList.add("correct");
            acertos++;
        } else {
            termo.classList.add("wrong");
        }
    });

    // Só avança se todos os corretos e só eles estiverem na caixa
    if (acertos === idsCorretos.length && termos.length === idsCorretos.length) {
        setTimeout(() => {
            alert("Parabéns! Diagnóstico correto. Avançando para a próxima fase...");
            window.location.href = "escapeRoom2.html"; 
        }, 300);
    } else {
        alert("Algumas respostas estão incorretas. Podes tentar novamente!");
    }
}


//barra progresso
document.getElementById('progress').style.width = '25%'; // Página 1