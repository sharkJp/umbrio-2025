const modal = document.getElementById("miModalSecc6");
    const btnAbrir = document.getElementById("abrirModalSecc6");
    const spanCerrar = document.getElementsByClassName("cerrarSecc6")[0];

    const body = document.body;
    btnAbrir.onclick = function () {
      modal.style.display = "flex";
      body.style.overflow = "hidden";
    }

    spanCerrar.onclick = function () {
      modal.style.display = "none";
      body.style.overflow = "auto";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
        body.style.overflow = "auto";
      }
    }

    function updateTime() {
      const now = new Date();
      const options = { hour: '2-digit', minute: '2-digit', hour12: true };
      document.getElementById('current-time').textContent =
        now.toLocaleTimeString('es-ES', options).replace('a. m.', 'AM').replace('p. m.', 'PM');
    }
    updateTime();
    setInterval(updateTime, 1000);
