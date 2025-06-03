document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('area').forEach(area => {
    area.addEventListener('click', function (e) {
      e.preventDefault(); // impede o comportamento padrão
      const target = this.dataset.bsTarget;
      if (target) {
        const modal = new bootstrap.Modal(document.querySelector(target));
        modal.show();
      }
    });
  });
});
